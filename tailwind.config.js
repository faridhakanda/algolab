/** @type {import('tailwindcss').Config} */
//const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  
  theme: {
    screens: {
      'mobile': {'min': '200px', 'max': '229px'},
      'sm': {'min': '230px', 'max': '500px'},
      'md': {'min': '501px', 'max': '750px'},
      'lg': {'min': '751px', 'max': '1024px'},
      'xl': {'min': '1280px', 'max': '1535px'}

    },
    colors : {
      'green': "#E9660A",
      'blue': '#1F6E8C',
      'air': '#D2E9E9',
      'zinc': '#71717a',
      'red': '#f87171',
      'orange': '#f97316',
      'lime': '#a3e635',
      'violet': '#4c1d95',
      'gray': '#6b7280',

    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
