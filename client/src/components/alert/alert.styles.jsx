import styled from 'styled-components';

import { helpers } from 'utilities/styles/helpers.styles';

const { mainColor, dangerColor, accentColor, successColor, successHighlightColor } = helpers;

export const AlertContainer = styled.div`
	background-color: green;
	width: 50rem;
	font-size: 2rem;
	color: ${mainColor};
	padding: 2px;
	&.alert-danger {
		border-left: 3px solid ${dangerColor};
		background-color: ${accentColor};
	}
	&.alert-success {
		border-left: 3px solid ${successHighlightColor};
		background-color: ${successColor};
	}
`;
