/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        theme: {
          light: {
            bg: '#FFFFFF',
            'bg-secondary': '#F8F9FA',
            text: '#2D3748',
            'text-secondary': '#4A5568',
            accent: '#FF9F87',
            'accent-hover': '#FF8A6D',
            border: '#E2E8F0',
          }
        },
        coral: {
          50: '#fff5f2',
          100: '#ffe6e0',
          200: '#ffd1c7',
          300: '#ffb3a3',
          400: '#ff8670',
          500: '#FF8873',
          600: '#FF7559',
          700: '#cc2e0e',
          800: '#a82915',
          900: '#8a2817',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
