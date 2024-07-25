/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        bounceUpDown: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
      },
      animation: {
        bounceUpDown: 'bounceUpDown 2s infinite',
      },
    },
    screens: {
      xl: { max: "1279px" },
      lg: { max: "1035px" },
      md: { max: "882px" },
      sm: { max: "740px" },
      xs: { max: "540px" },
    },
  },
  plugins: [],
}