import styled from 'styled-components';
import { breakpoints, displayCenterSpaceBetween } from 'utilities/styles/helpers.styles';

const { tabletLandscape, desktop, highResDesktop } = breakpoints;

export const Container = styled.div`
	// display: grid;
	// grid-template-columns: 24rem 1fr;
	// grid-template-rows: 5rem 1fr 5rem;
	// grid-template-areas:
	// 	'sidebar header'
	// 	'sidebar main'
	// 	'sidebar footer';
	// height: 100vh;
  // background-color: yellow;
  
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
      "sidebar header"
      "sidebar main"
      "sidebar footer";
  }
  @media ${desktop} {
    grid-template-columns: 240px 1fr; /* Show the side nav for non-mobile screens */
    grid-template-areas:
      "sidebar header"
      "sidebar main"
      "sidebar footer";
  }
  @media ${highResDesktop} {
    grid-template-columns: 240px 1fr; /* Show the side nav for non-mobile screens */
    grid-template-areas:
      "sidebar header"
      "sidebar main"
      "sidebar footer";
  }
`;

export const Sidebar = styled.aside`
  background-color: violet;
  display: none;
	grid-area: sidebar;

  @media ${tabletLandscape} {
    display: flex;
    flex-direction: column;
  }
  @media ${desktop} {
    display: flex;
    flex-direction: column;
  }
  @media ${highResDesktop} {
    display: flex;
    flex-direction: column;
  }

	ul {
		padding: 0;
		margin-top: 8.5rem;
		list-style-type: none;

		li {
			padding: 20px 20px 20px 40px;
			color: #ddd;

			&:hover {
				background-color: rgba(255, 255, 255, 0.2);
				cursor: pointer;
			}
		}
	}
`;

export const Header = styled.header`
	background-color: blue;
	grid-area: header;

	${displayCenterSpaceBetween};

	.profile,
	.date {
		background-color: cyan;
	}
`;

export const Main = styled.header`
	background-color: orange;
	grid-area: main;

	.main-header {
		display: flex;
		justify-content: space-between;
		margin: 20px;
		padding: 20px;
		height: 150px; /* Force our height since we don't have actual content yet */
		background-color: #e3e4e6;
		color: slategray;
	}

	.main-overview {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(265px, 1fr)); /* Where the magic happens */
		grid-auto-rows: 94px;
		grid-gap: 20px;
		margin: 20px;
	}

	.overviewcard {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20px;
		background-color: #d3d3;
  }
  
  .main-cards {
    column-count: 1;
    column-gap: 20px;
    margin: 20px;

    @media ${desktop} {
      column-count: 2;
    }
    @media ${highResDesktop} {
      column-count: 2;
    }
  }

  
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: #82bef6;
    margin-bottom: 20px;
    -webkit-column-break-inside: avoid;
    padding: 24px;
    box-sizing: border-box;
  }

  /* Force varying heights to simulate dynamic content */
  .card:first-child {
    height: 485px;
  }

  .card:nth-child(2) {
    height: 200px;
  }

  .card:nth-child(3) {
    height: 265px;
  }
`;

export const Footer = styled.div`
	background-color: green;
	grid-area: footer;

	${displayCenterSpaceBetween};
`;
