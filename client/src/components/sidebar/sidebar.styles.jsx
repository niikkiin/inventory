import styled from 'styled-components';

import { breakpoints, helpers } from 'utilities/styles/helpers.styles';

const { tabletLandscape, desktop, highResDesktop } = breakpoints;
const { mainColor, secondaryColor } = helpers;

export const Container = styled.div`
  background-color: ${mainColor};
  color: ${secondaryColor};
  font-size: 1.6rem;
  
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
