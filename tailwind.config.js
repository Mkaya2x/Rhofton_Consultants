/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        evergreen: {
          50: "#f1f8f5",
          100: "#dfeee7",
          200: "#b8dacb",
          300: "#90c6af",
          400: "#5aa580",
          500: "#2f7d5b",
          600: "#236248",
          700: "#1d4e3b",
          800: "#173d2f",
          900: "#112b21"
        },
        mist: "#f7fbf9"
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Source Sans 3", "system-ui", "sans-serif"]
      },
      boxShadow: {
        card: "0 18px 40px rgba(17, 43, 33, 0.12)"
      },
      backgroundImage: {
        "hero-grid":
          "radial-gradient(circle at top left, rgba(47,125,91,0.16), transparent 55%), radial-gradient(circle at 30% 20%, rgba(47,125,91,0.12), transparent 50%), linear-gradient(135deg, rgba(47,125,91,0.12), rgba(247,251,249,0.9))"
      }
    }
  },
  plugins: []
};
