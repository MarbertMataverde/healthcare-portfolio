import { useEffect, useCallback } from 'react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
}

declare global {
  interface Window {
    requestIdleCallback: (callback: IdleRequestCallback, options?: IdleRequestOptions) => number;
  }
}

interface PerformanceEntryWithStart extends PerformanceEntry {
  processingStart?: number;
  hadRecentInput?: boolean;
  value?: number;
  responseStart?: number;
}

export const usePerformanceMonitoring = (callback?: (metrics: PerformanceMetrics) => void) => {
  const metrics: PerformanceMetrics = {
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
  };

  const reportMetric = useCallback((name: string, value: number) => {
    switch (name) {
      case 'FCP':
        metrics.fcp = value;
        break;
      case 'LCP':
        metrics.lcp = value;
        break;
      case 'FID':
        metrics.fid = value;
        break;
      case 'CLS':
        metrics.cls = value;
        break;
      case 'TTFB':
        metrics.ttfb = value;
        break;
    }

    if (callback) {
      callback(metrics);
    }

    // Log to console in development
    if (import.meta.env.DEV) {
      console.log(`Performance Metric - ${name}:`, value);
    }
  }, [callback]);

  useEffect(() => {
    // First Contentful Paint
    const fcpObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      if (entries.length > 0) {
        reportMetric('FCP', entries[0].startTime);
      }
    });

    // Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      if (entries.length > 0) {
        reportMetric('LCP', entries[entries.length - 1].startTime);
      }
    });

    // First Input Delay
    const fidObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      if (entries.length > 0) {
        const entry = entries[0] as PerformanceEntryWithStart;
        if (entry.processingStart) {
          reportMetric('FID', entry.processingStart - entry.startTime);
        }
      }
    });

    // Cumulative Layout Shift
    const clsObserver = new PerformanceObserver((entryList) => {
      let clsValue = 0;
      for (const entry of entryList.getEntries()) {
        const layoutShiftEntry = entry as PerformanceEntryWithStart;
        if (!layoutShiftEntry.hadRecentInput && layoutShiftEntry.value) {
          clsValue += layoutShiftEntry.value;
        }
      }
      reportMetric('CLS', clsValue);
    });

    // Time to First Byte
    const ttfbObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      if (entries.length > 0) {
        const entry = entries[0] as PerformanceEntryWithStart;
        if (entry.responseStart) {
          reportMetric('TTFB', entry.responseStart);
        }
      }
    });

    try {
      fcpObserver.observe({ type: 'paint', buffered: true });
      lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
      fidObserver.observe({ type: 'first-input', buffered: true });
      clsObserver.observe({ type: 'layout-shift', buffered: true });
      ttfbObserver.observe({ type: 'navigation', buffered: true });
    } catch (e) {
      console.warn('Performance monitoring not supported:', e);
    }

    return () => {
      fcpObserver.disconnect();
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
      ttfbObserver.disconnect();
    };
  }, [reportMetric]);
};

export const measureComponentRender = (componentName: string) => {
  const startTime = performance.now();
  return () => {
    const duration = performance.now() - startTime;
    if (import.meta.env.DEV) {
      console.log(`${componentName} render time:`, duration.toFixed(2), 'ms');
    }
  };
};

export const debounce = <T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;

  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};
