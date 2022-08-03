import 'styled-components';

/**
 * Type Interface for Styled Components Default Theme
 * @typedef {Object} ThemeObject
 * @property {Object} colors - add specific color property
 */

/** @type {ThemeObject} */
declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			white: string;
			black: string;
			gray: string;
			highlight: string;
			footer: string;
		};
	}
}
