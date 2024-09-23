/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
			'custom-green': '#c2efd4',
        'dark-green': '#224f34',
      },
      fontFamily: {
		'roboto-serif': ['Roboto Serif', 'serif'],
		'roboto-slab': ['Roboto Slab', 'serif'],
        'elephant': ['Elephant', 'serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'rufina': ['Rufina', 'serif'],
      },
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

