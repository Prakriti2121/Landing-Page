/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
         darkGrayishBlue: '#6C6E74',
         brightRed: '#F3603C',
        brightRedLight: '#E57373',
        veryDarkBlue: '#1D1E25',
      },
    },
  },
  plugins: [],
};
