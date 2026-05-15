/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#fdf8f0',
        gold: '#c6a43b',
        brown: '#3d2b1f',
        'deep-brown': '#2a1f14',
        whatsapp: '#25d366',
      },
      boxShadow: {
        soft: '0 2px 18px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}

