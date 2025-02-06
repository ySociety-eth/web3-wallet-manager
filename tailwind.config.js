/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "hsla(var(--primary))",
        primaryLight: "hsla(var(--primary-light))",
        primaryLighter: "hsla(var(--primary-lighter))",
        background: "hsla(var(--background))",
        foreground: "hsla(var(--foreground))",
        accentForeground: "hsla(var(--accent-foreground))",
        accent: "hsla(var(--accent))",
        muted: "hsla(var(--muted))",
        mutedForeground: "hsla(var(--muted-foreground))",
        mutedForegroundNeutral: "hsla(var(--muted-foreground-neutral))",
        card: "hsla(var(--card))",
        border: "hsla(var(--border))",
      },
      borderRadius: {
        dft: '0.75rem'
      },
      transitionDuration: {
        DEFAULT: '170ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'ease-in-out',
      },
    },
  },
  plugins: [],
}

