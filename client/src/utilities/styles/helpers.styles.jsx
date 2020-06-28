import { css } from 'styled-components';
/**
 * Helper styles and themes for global usage
 */
export const helpers = {
	mainColor: '#161E36',
	secondaryColor: '#FCFCFD',
	accentColor: '#1726C7',

	mainTint: '#525966',
	mainRGB: '165, 174, 214',

	successColor: '#1DBE17',
	warningColor: '#E69316',
	dangerColor: '#BE174E',
	successHighlightColor: '#083623',

	boxShadow: '10px 25px 45px 0px rgba(0,0,0,0.25)',
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

export const tableStyles = css`
	table {
		width: 100%;
	}

	/* Force table to not be like tables anymore */
	table,
	thead,
	tbody,
	th,
	td,
	tr {
		display: block;
	}

	/* Hide table headers (but not display: none;, for accessibility) */
	thead tr {
		position: absolute;
		top: -9999px;
		left: -9999px;
	}

	tr {
		border: 1px solid #ccc;
	}

	td {
		/* Behave  like a "row" */
		border: none;
		border-bottom: 1px solid #eee;
		position: relative;
		padding-left: 50%;
	}

	td:before {
		/* Now like a table header */
		position: absolute;
		/* Top/left values mimic padding */
		top: 6px;
		left: 6px;
		width: 45%;
		padding-right: 10px;
		white-space: nowrap;
		/* Label the data */
		content: attr(data-column);

		color: #000;
		font-weight: bold;
	}
`;

// SECTION ANIMATIONS
export const shrinkLabelStyles = css`
	top: -1.8rem;
	font-size: 1.3rem;
	color: ${helpers.accentColor};
`;
