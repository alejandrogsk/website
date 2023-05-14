import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],

  theme: {
    extend: {
      fontFamily: {
        inter: [ 'Inter', 'sans-serif'],
        anton: [ 'Anton', 'sans-serif' ]
      },
      screens: {
        xs: "320px",
        sm: "425px",
        md: "600px",
        lg: "820px",
        xl: "1024px",
        big: "1440px"
      },
      colors: {
        cRed: {
          main: "#F93943"
        },
        cGrey: {
          main: "#ACACAC"
        }
      }
    },
  },
  plugins: [],
} satisfies Config

