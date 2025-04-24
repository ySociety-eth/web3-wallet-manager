/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "hsla(var(--primary-500))",
          100: "hsla(var(--primary-100))",
          200: "hsla(var(--primary-200))",
          300: "hsla(var(--primary-300))",
          400: "hsla(var(--primary-400))",
          500: "hsla(var(--primary-500))",
          600: "hsla(var(--primary-600))",
          700: "hsla(var(--primary-700))",
          800: "hsla(var(--primary-800))",
          900: "hsla(var(--primary-900))"
        },
        background: "hsla(var(--background))",
        foreground: "hsla(var(--foreground))",
        accentForeground: "hsla(var(--accent-foreground))",
        accent: "hsla(var(--accent))",
        muted: "hsla(var(--muted))",
        mutedDark: "hsla(var(--muted-dark))",
        mutedForeground: "hsla(var(--muted-foreground))",
        mutedForegroundNeutral: "hsla(var(--muted-foreground-neutral))",
        card: "hsla(var(--card))",
        border: "hsla(var(--border))",
        danger: "hsla(var(--danger))",
        success: "hsla(var(--success))",
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

