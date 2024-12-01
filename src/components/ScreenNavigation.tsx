import { memo } from 'react';

interface ScreenNavigationProps {
  currentSection: string;
  onNavigate: (section: string) => void;
  sections: string[];
}

const ScreenNavigation = memo(({ currentSection, onNavigate, sections }: ScreenNavigationProps) => {
  const currentIndex = sections.indexOf(currentSection);

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-gray-200/50">
        <div className="flex items-center gap-2">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => onNavigate(section)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                currentSection === section
                  ? 'bg-coral-500 w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Navigate to ${section} section`}
            />
          ))}
        </div>
      </div>
      {currentIndex < sections.length - 1 && (
        <button
          onClick={() => onNavigate(sections[currentIndex + 1])}
          className="absolute left-1/2 -translate-x-1/2 bottom-16 text-gray-600 hover:text-coral-500 transition-colors"
          aria-label="Scroll to next section"
        >
          <svg
            className="w-8 h-8 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      )}
    </div>
  );
});

ScreenNavigation.displayName = 'ScreenNavigation';

export default ScreenNavigation;
