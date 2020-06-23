import styled from 'styled-components';

import { helpers } from 'utilities/styles/helpers.styles';

const { mainTint, accentColor } = helpers;

export const AuthLink = styled.div`
	float: right;
	clear: both;

	font-size: 1.5rem;
	color: ${mainTint};

	.link,
	&:visited {
    cursor: pointer;
    text-decoration: underline;
		color: ${accentColor};
	}
`;

export const Title = styled.div`
  font-size: 3rem;
  color: ${mainTint};
  font-weighT: bold;
  padding-top: 2rem;
`;

export const AuthWithSocialMedia = styled.div`
	// width: 80%;
`;

export const OrLine = styled.div`
	display: flex;
	justify-content: center;

	.line {
		background-color: ${mainTint};
		width:90%;
		height: 1px;
		border-radius: 5rem;
		margin: 1rem 0;
	}
	.or {
		font-size: 1.5rem;
		margin: 0 2rem;
	}
`;