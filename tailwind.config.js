/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
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
    purpleB: '#24223C',
    white: '#ffff'
  },
  screens: {
    'sm': '640px',
    // => @media (min-width: 640px) { ... }
    'md': '768px',
    // => @media (min-width: 768px) { ... }
    
    'lg': '1024px',
    // => @media (min-width: 1024px) { ... }
    
    'xl': '1280px',
    // => @media (min-width: 1280px) { ... }

    '2xl': '1536px',
    // => @media (min-width: 1536px) { ... }

    '3xl': '1920px',
    // => @media (min-width: 1920px) { ... }
  }
};
export const plugins = [];
