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
        "almost-white": "hsl(0, 0%, 98%)",
        "medium-gray": "hsl(0, 0%, 41%)",
        "almost-black": "hsl(0, 0%, 8%)",
      },
    },
  },
  plugins: [],
};
