import styled from 'styled-components';

import { displayCenterSpaceBetween } from 'utilities/styles/helpers.styles';
import { helpers } from 'utilities/styles/helpers.styles';

const { secondaryColor, mainTint } = helpers;

export const HeaderContainer = styled.div`
	background-color: ${secondaryColor};
  grid-area: header;
  
  border-bottom: 1px solid ${mainTint};

  ${displayCenterSpaceBetween};
  
  font-size: 2rem;

	.date {

  }
`;
