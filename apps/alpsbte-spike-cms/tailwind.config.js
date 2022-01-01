const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');


module.exports = {

  purge: createGlobPatternsForDependencies(__dirname),

  darkMode: false, // or 'media' or 'class'


  content: [    "./pages/**/*.{js,ts,jsx,tsx}",    "./components/**/*.{js,ts,jsx,tsx}",  ],

  theme: {

    extend: {},

  },

  variants: {

    extend: {},

  },

  plugins: [],

};