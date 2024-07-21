/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {    
    extend: {
      fontFamily: {
        'inter': 'Inter'
      },
      colors: {      
        grey: '#758694',
        navy: '#405D72',
        belge: '#F7E7DC',
        white: '#FFF8F3'
      },
    },
  },
  plugins: [],
}

