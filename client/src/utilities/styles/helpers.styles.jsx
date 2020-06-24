import { css } from 'styled-components';
/**
 * Helper styles and themes for global usage
 */
export const helpers = {
	mainColor: '#161E36',
	secondaryColor: '#FCFCFD',
	accentColor: '#1726C7',

	mainTint: '#525966',

	dangerColor: '#800d46',
	successColor: '#27F9A2',
	successHighlightColor: '#083623',

	boxShadow: '10px 25px 45px 0px rgba(0,0,0,0.25)'
};

export const breakpoints = {
	highResDesktop: '(min-width: 1281px)',
	desktop: '(min-width: 1025px) and (max-width: 1280px)',
	tabletLandscape: '(min-width: 961px) and (max-width: 1024px)',
	tabletPortrait: '(min-width: 641px) and (max-width: 960px)',
	phone: '(min-width: 320px) and (max-width: 640px)',
};

export const displayColumnCenter = css`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const displayRowCenter = css`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const displayCenterSpaceBetween = css`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 1.6rem;
`;

// SECTION ANIMATIONS
export const shrinkLabelStyles = css`
	top: -1.8rem;
	font-size: 1.3rem;
	color: ${helpers.accentColor};
`;
