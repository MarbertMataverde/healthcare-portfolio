import { useEffect, useRef, useState, useCallback } from 'react';

interface UseIntersectionObserverProps {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
  freezeOnceVisible?: boolean;
}

export const useIntersectionObserver = ({
  threshold = 0,
  root = null,
  rootMargin = '0px',
  freezeOnceVisible = false
}: UseIntersectionObserverProps = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

  const frozen = freezeOnceVisible && hasBeenVisible;

  const callback = useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      const isIntersecting = entry?.isIntersecting;

      if (isIntersecting) {
        setIsVisible(true);
        setHasBeenVisible(true);
      } else if (!frozen) {
        setIsVisible(false);
      }
    },
    [frozen]
  );

  useEffect(() => {
    const node = elementRef?.current;
    if (!node || frozen) return;

    const observer = new IntersectionObserver(callback, {
      threshold,
      root,
      rootMargin,
    });

    observer.observe(node);

    return () => observer.disconnect();
  }, [callback, frozen, root, rootMargin, threshold]);

  return { elementRef, isVisible };
};
