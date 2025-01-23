/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        rickandmorty: {
          primary: "#A1DDD9", // Rick'in gök mavisi
          secondary: "#FFD166", // Morty'nin sarısı
          accent: "#6E44FF", // Uzay moru
          neutral: "#1B1F3B", // Koyu gece mavisi
          base100: "#C4C4C4", // Arka plan rengi
          info: "#4ECDC4", // Yeşil (uzaylılar)
          success: "#39FF14", // Yeşil
          warning: "#FFD166", // Sarı
          error: "#FF6B6B", // Kırmızı
        },
      }
    ],
  },
}