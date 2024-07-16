/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        PPEdNewRegular: ["var(--font-ed-reg)"],
        PPEdNewUltrabold: ["var(--font-ed-ub)"],
        PPEdNewUltralight: ["var(--font-ed-ul)"],
        inter: ["var(--font-inter)"]
      }
    },
    backgroundColor: {
      purple: '#22203E',
      prupleB: '#24223C',
      white: '#ffff',
      pink: '#D4396A'
    },
    colors: {
      purpleB: '#24223C'
    }
  },
  plugins: [],
};
