import { extendTheme } from "@chakra-ui/react";
const theme = extendTheme({
	zIndices: {
		hide: -1,
		auto: 'auto',
		base: 0,
		docked: 10,
		dropdown: 1000,
		sticky: 1100,
		banner: 1200,
		overlay: 1300,
		modal: 1000,
		popover: 1500,
		skipLink: 1600,
		toast: 1700,
		tooltip: 1800,
	},
	colors: {
		azul:
		{
			50: '#e0f4ff',
			100: '#b8dcfa',
			200: '#8ec4f1',
			300: '#63ace8',
			400: '#3994e0',
			500: '#1f7bc6',
			600: '#135f9b',
			700: '#084470',
			800: '#002946',
			900: '#000f1d',
		}
	},

});


export default theme;