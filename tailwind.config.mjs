/** @type { import('tailwindcss').Config } */
export default {
	darkMode: 'class',
	content: ["./src/**/**.tsx"],
	theme: {
		extend: {
			colors: {
				'primary-color': '#1A1A1A',
				'second-color': '#4A4A4A',
				'title-color': '#0D0D0D',
				'contrast-color': '#E0E0E0',
				'border-color': '#C8C8C8',
				'hover-color': '#C8C8C8',
				'divider-color': '#A0A0A0',
				'link-hover-color': '#F57C00',
				'primary-color-dark': '#EDEDED',
				'second-color-dark': '#818181',
				'title-color-dark': '#f2f2f2',
				'contrast-color-dark': '#181818',
				'border-color-dark': '#212121',
				'hover-color-dark': '#181818',
				'divider-color-dark': '#181817',
				'teste-border': 'rgba(245, 124, 0, 0.3)'
			},
			keyframes: {
				slideUp: {
					'0%': { transform: 'translateY(15%)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},

				visible: {
					"0%": { transform: 'translateY(20px)', opacity: '0'},
					"100%": { transform: 'translateY(0px)', opacity: '1'}
				}
			},
			animation: {
				slideUp: 'slideUp 0.7s ease-out',
				visible: 'visibleSection 0.7s ease'
			},

			animationDelay: {
				100: '100ms',
				200: '200ms',
				300: '300ms',
				400: '400ms',
				500: '500ms',
			},
			animationDuration: {
				500: '500ms',
				700: '700ms',
				1000: '1000ms',
			},

		},
	},
	plugins: [],
}

