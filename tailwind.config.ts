/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    keyframes: {
      rotate: {
        "0%": { transform: "rotate(0deg)" },
        "100%": { transform: "rotate(360deg)" },
      },
    },
    animation: {
      rotate: "rotate 40s linear infinite",
    },
    // 2. Fonts
    // fontSize: {
    //   h1: "var(--h1)",
    //   h2: "var(--h2)",
    //   h3: "var(--h3)",
    //   h4: "var(--h4)",
    //   h5: "var(--h5)",
    //   h6: "var(--h6)",
    //   p: "var(--p)",
    //   s: "var(--s)",
    // },
    // 4. Font weights
    // fontWeight: {
    //   regular: "400",
    //   semiBold: "600",
    //   bold: "700",
    // },
    extend: {
      boxShadow: {
        main: "0px 4px 20px rgba(196, 196, 196, 0.2)",
      },
      // 7. screen
      screens: {
        xxs: "480px",
        xs: "560px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
      },
      // 1. Colors
      colors: {
        // 1.1. Primary Colors
        "primary-900": "var(--primary-900)",
        "primary-800": "var(--primary-800)",
        "primary-700": "var(--primary-700)",
        "primary-600": "var(--primary-600)",
        "primary-500": "var(--primary-500)",
        "primary-400": "var(--primary-400)",
        "primary-300": "var(--primary-300)",
        "primary-200": "var(--primary-200)",
        "primary-100": "var(--primary-100)",
        // 1.2. Neutral colors
        "neutral-900": "var(--neutral-900)",
        "neutral-800": "var(--neutral-800)",
        "neutral-700": "var(--neutral-700)",
        "neutral-600": "var(--neutral-600)",
        "neutral-500": "var(--neutral-500)",
        "neutral-400": "var(--neutral-400)",
        "neutral-300": "var(--neutral-300)",
        "neutral-200": "var(--neutral-200)",
        "neutral-100": "var(--neutral-100)",
        // 1.3. Secondary colors
        "secondary-500": "var(--secondary-500)",
      },
    },
  },
  plugins: [],
};