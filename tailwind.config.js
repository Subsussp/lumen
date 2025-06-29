/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
        "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { 
        keyframes: {
      'fade-down': {
        '0%': { opacity: '0', transform: 'translateY(-20px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
      },
    },
    animation: {
      'fade-down': 'fade-down 0.6s ease-out forwards',
    },
      colors: {
        'mainele': "var(--mainele)", // NavBackground ,
        'secondary': "var(--secondary)"
      },
      fontFamily: {
        Main: [
          'var(--Main-font)',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Fira Sans',
          'Droid Sans',
          'Helvetica Neue',
          'sans-serif',
        ],
        Second: [
          'var(--Second-font)',
          'source-code-pro',
          'Menlo',
          'Monaco',
          'Consolas',
          'Courier New',
          'monospace',
        ]}
  },
  plugins: []}
}

