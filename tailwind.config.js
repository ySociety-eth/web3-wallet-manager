/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "hsla(var(--primary))",
        background: "hsla(var(--background))",
        foreground: "hsla(var(--foreground))",
        accentForeground: "hsla(var(--accent-foreground))",
        accent: "hsla(var(--accent))",
        muted: "hsla(var(--muted))",
        mutedForeground: "hsla(var(--muted-foreground))",
        card: "hsla(var(--card))",
        border: "hsla(var(--border))",
      }
    },
  },
  plugins: [],
}

