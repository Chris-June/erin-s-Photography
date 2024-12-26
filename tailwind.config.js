/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        silver: "#C0C0C0",
        midnight: "#0B1A36",
        copper: "#B87333",
        charcoal: "#3A3A3A",
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        pastel: {
          mauve: "#E0CCFF",     // Soft lavender-mauve
          periwinkle: "#CCCCFF", // Soft blue-purple
          blush: "#FFD1DC",     // Soft pink
          sky: "#B0E0E6",       // Soft blue
          lilac: "#C8A2C8"      // Soft purple
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        'gradient-main': 'linear-gradient(to bottom right, #0B1A36, #1A365D, #2A4A7F)',
        'gradient-mauve-periwinkle': 'linear-gradient(135deg, #E0CCFF 0%, #CCCCFF 100%)',
        'gradient-blush-sky': 'linear-gradient(135deg, #FFD1DC 0%, #B0E0E6 100%)',
        'gradient-lilac-mauve': 'linear-gradient(135deg, #C8A2C8 0%, #E0CCFF 100%)',
      },
      boxShadow: {
        'floating': '0 20px 45px rgba(0, 0, 0, 0.6), 0 10px 25px rgba(0, 0, 0, 0.5)',
      },
      keyframes: {
        'color-shift': {
          '0%, 100%': { 
            backgroundColor: 'var(--color-1)' 
          },
          '50%': { 
            backgroundColor: 'var(--color-2)' 
          }
        },
        'pulse-glow': {
          '0%, 100%': { 
            transform: 'scale(1)',
            opacity: '0.7'
          },
          '50%': { 
            transform: 'scale(1.1)',
            opacity: '1'
          }
        }
      },
      animation: {
        'color-shift': 'color-shift 5s ease infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite'
      }
    },
  },
  plugins: [
    require('tailwindcss/plugin')(({ addUtilities }) => {
      const newUtilities = {
        '.gradient-text': {
          'background-image': 'linear-gradient(135deg, #E0CCFF, #CCCCFF)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        }
      }
      addUtilities(newUtilities)
    })
  ]
}
