/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: "hsl(var(--background))",
        "foreground": "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        popover: "hsl(var(--card))",
        "popover-foreground": "hsl(var(--popover-foreground))",
        primary: "hsl(var(--card))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        secondary: "hsl(var(--card))",
        "secondary-foreground": "hsl(var(--secondary-foreground))",
        muted: "hsl(var(--card))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        accent: "hsl(var(--card))",
        "accent-foreground": "hsl(var(--accent-foreground))",
        destrutive: "hsl(var(--card))",
        "destrutive-foreground": "hsl(var(--destrutive-foreground))",
        border: "hsl(var(--card))",
        "border-foreground": "hsl(var(--border-foreground))",
        input: "hsl(var(--card))",
        "input-foreground": "hsl(var(--input-foreground))",
        ring: "hsl(var(--card))",
        "ring-foreground": "hsl(var(--ring-foreground))",
        radius: "hsl(var(--card))",
        "radius-foreground": "hsl(var(--radius-foreground))",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}