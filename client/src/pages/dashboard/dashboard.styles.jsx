import styled from 'styled-components';
import { breakpoints } from 'utilities/styles/helpers.styles';

const { tabletLandscape, desktop, highResDesktop } = breakpoints;

export const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr; /* Side nav is hidden on mobile */
	grid-template-rows: 50px 1fr 50px;
	grid-template-areas:
		'header'
		'main'
		'footer';
	height: 100vh;

	@media ${tabletLandscape} {
		grid-template-columns: 240px 1fr; /* Show the side nav for non-mobile screens */
		grid-template-areas:
			'sidebar header'
			'sidebar main'
			'sidebar footer';
	}
	@media ${desktop} {
		grid-template-columns: 240px 1fr; /* Show the side nav for non-mobile screens */
		grid-template-areas:
			'sidebar header'
			'sidebar main'
			'sidebar footer';
	}
	@media ${highResDesktop} {
		grid-template-columns: 240px 1fr; /* Show the side nav for non-mobile screens */
		grid-template-areas:
			'sidebar header'
			'sidebar main'
			'sidebar footer';
	}
`;

export const Main = styled.header`
	grid-area: main;
`;
