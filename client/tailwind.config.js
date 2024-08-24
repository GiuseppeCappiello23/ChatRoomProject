/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {}
  },

  daisyui: {
    themes: [
      {
        mytheme: {


          "primary": "#b100ff",


          "secondary": "#00897e",


          "accent": "#1400ff",


          "neutral": "#1e1a16",


          "base-100": "#c7d2fe",


          "info": "#007dea",


          "success": "#008f41",


          "warning": "#e47800",


          "error": "#ed3e53",
        },
      },
    ],
  }, daisyui: {
    themes: ["dim", "nord"],
  },
  plugins: [
    require('daisyui'),
  ]
};
