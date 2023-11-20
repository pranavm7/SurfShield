/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-gray':'#B5C0BC',
        'custom-green':'#0D575F',
        'custom-blue':'#273654',
        'custom-white':'#FBFDF6',
      }
    },
  },
  plugins: [],
};
