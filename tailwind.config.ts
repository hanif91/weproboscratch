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
    fontFamily: {
      Poppins: "Poppins"
    },
    extend: {
      backgroundImage: {
        "water-image" : "url('/images/hero/water.png')",
      },

      backgroundSize: {
        '300%': '300%',
      },

      textColor : {
        'txtprimary' : '#212121',
        'txtsecondary' : '#757575',
        'txttexticon' : '#FFFFFF',
      },
      colors: {
        'myprimary': {
            '50': '#f1fcf9',
            '100': '#cef9eb',
            '200': '#9df2d8',
            '300': '#65e3c2',
            '400': '#35cca9',
            '500': '#1cb090',
            '600': '#16a085',
            '700': '#147160',
            '800': '#155a4f',
            '900': '#164b42',
            '950': '#062d28',
            'lightprimary' : '#B2DFDB',
            'accentcolor' : '#536DFE',
            'divider' : '#BDBDBD',
            'iconwhite' : '#FFFFFF'
        },

        'mysecondary': {
          '50': '#f2f5fc',
          '100': '#e1e8f8',
          '200': '#cbd8f2',
          '300': '#a6bfea',
          '400': '#7c9dde',
          '500': '#5d7dd4',
          '600': '#4963c7',
          '700': '#3f51b5',
          '800': '#394494',
          '900': '#323d76',
          '950': '#222749',
        },
      
      
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        slide : {
          "0%,100%" : {transform: "translateX(5%)"},
          "50%": {transform: "translateX(-120%)"}
        },
        "wiggle" : {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        animatedgradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        slide: "slide 25s linear infinite",
        "wiggle": 'wiggle 1s ease-in-out infinite',
        gradient: 'animatedgradient 3s ease infinite alternate',
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [require("tailwindcss-animate")],
}