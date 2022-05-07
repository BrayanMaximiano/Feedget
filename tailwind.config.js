module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        brand: {
          500: '#cca43b',
          300: '#e3b744',
        }
      },
      borderRadius: {
        md: '4px',
      },
    },
    plugins: [
      require('@tailwindcss/forms'),
      require('tailwind-scrollbar'),
    ],
  }
}