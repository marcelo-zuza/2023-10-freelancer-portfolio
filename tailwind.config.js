/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily:{
        'bakersfield': 'bakersfield',
        'avenir': 'avenir',
        'gin': 'gin',
        'oswald': ['Oswald', 'sans-serif'],
        'inter': 'Inter',
        'domine': 'Domine',
        'roboto': 'Roboto',
        'open-sans': 'Open-Sans'
      },
      colors: {
        /* PALETA 1 
        'color-1' : '#191A19',
        'color-2': '#1E5128',
        'color-3': '#4E9F3D',
        'color-4': '#D8E9A8'
*/

        /* PALETA 2 
        'color-1' : '#001524',
        'color-2': '#445D48',
        'color-3': '#D6CC99',
        'color-4': '#FDE5D4'
        */

        /* PALETA 3 
        'color-1' : '#040D12',
        'color-2': '#183D3D',
        'color-3': '#5C8374',
        'color-4': '#93B1A6'
        */

        /* PALETA 4 
        'color-1' : '#000000',
        'color-2': '#007F5F',
        'color-3': '#00B27D',
        'color-4': '#F0F0F0'
        */
        
        /* PALETA 5 */
        'color-1': '#151718',
        'color-2': '#1a1d1e',
        'color-3': '#007F5F',
        'color-4': '#00B27D',
        'color-5': '#F0F0F0'
        
      },

    },
  },
  plugins: [],
}

