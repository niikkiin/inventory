import styled from 'styled-components';

import { breakpoints, helpers } from 'utilities/styles/helpers.styles';

const { desktop, highResDesktop } = breakpoints;
const { mainTint } = helpers;

export const Container = styled.div`
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

	.set-up-profile {
		background-color: #f8d6f8;
		margin: 20px;
		padding: 20px;

		color: ${mainTint};
		font-size: 1.6rem;
	}
`;
