import styled from 'styled-components';

import { helpers, displayCenterSpaceBetween } from 'utilities/styles/helpers.styles';

const { mainTint, secondaryColor } = helpers;

export const Container = styled.div`
	grid-area: footer;

	background-color: ${mainTint};
	color: ${secondaryColor};
	font-size: 1.4rem;

	${displayCenterSpaceBetween};
`;
