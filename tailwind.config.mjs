/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: '#1E3A5F',
        red: '#C41E3A',
        snow: '#F8FAFC'
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif']
      },
      boxShadow: {
        card: '0 18px 45px -24px rgba(30, 58, 95, 0.35)'
      }
    }
  },
  plugins: []
};
