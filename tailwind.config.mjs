/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts}'],
  theme: {
    extend: {
      colors: {
        ground: 'var(--ground)',
        plate: 'var(--plate)',
        frost: 'var(--frost)',
        lichen: 'var(--lichen)',
        signal: 'var(--signal)'
      }
    }
  },
  plugins: []
};
