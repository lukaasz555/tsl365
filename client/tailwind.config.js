/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{ts,tsx}'],
	theme: {
		colors: {
			accent: '#0D97AE',
			accentHover: '#05889E',
			white: '#FFF',
			whiteBg: '#FDFDFD',
			black: '#2A2B2A',
			blackHover: '#575A57',
			gray: '#A9A8A8',
			grayHover: '#929292',
			error: '#B23A48',
			errorHover: '#CA081F',
			success: '#6CC551',
			successHover: '#32BA09',
			warning: '#DBD053',
			warningHover: '#F1E12B',
		},
		fontFamily: {
			poppins: ['Poppins', 'sans-serif'],
			montserrat: ['Montserrat', 'sans-serif'],
		},
		fontSize: {
			xxl: '24px',
			xl: '21px',
			l: '18px',
			m: '16px',
			s: '13px',
			xs: '11px',
		},
		borderRadius: {
			max: '25px',
			l: '12px',
			m: '8px',
			s: '4px',
		},
		extend: {
			boxShadow: {
				default: '4px 8px 22px rgba(0, 0, 0, 0.15)',
			},
		},
	},
	plugins: [],
};
