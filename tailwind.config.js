/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      textColor: {
        skin: {
          base: {
            dark: 'var(--color-text-base-dark)',
            light: 'var(--color-text-base-light)'
          }
        }
      },
      backgroundColor: {
        skin: {
          base: {
            dark: 'var(--background-color-dark)',
            light: 'var(--background-color-light)'
          },
          button: {
            dark: 'var(--color-button-accent-dark)',
            light: 'var(--color-button-accent-light)',
            hoverDark: 'var(--color-button-accent-hover-dark)',
            hoverLight: 'var(--color-button-accent-hover-light)',
          }
        }
      },
    },
  },
  plugins: [],
  darkMode: "class",
}
