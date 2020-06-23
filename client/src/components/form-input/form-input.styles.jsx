import styled from 'styled-components';

import { helpers, shrinkLabelStyles } from 'utilities/styles/helpers.styles';

const { accentColor, mainTint } = helpers;



export const FormInputContainer = styled.div`
	position: relative;
	margin: 3rem 0;
	input[type='password'] {
		letter-spacing: 0.3em;
	}
`;

export const Input = styled.input`
	background: none;
	color: ${mainTint};
	font-size: 2rem;
	padding: 1rem;
	display: block;
	width: 100%;
	border: none;
	border-radius: 1rem;
  margin: 1rem 0;
  border: 1px solid ${mainTint};
  
	&:focus {
    outline: none;
    border: 1px solid ${accentColor};
	}
	&:focus ~ label {
		${shrinkLabelStyles};
	}
`;

export const Label = styled.label`
	text-transform: capitalize;
	color: ${mainTint};
	font-size: 1.8rem;
	font-weight: normal;
	position: absolute;
	pointer-events: none;
	left: 5px;
	top: 1.2rem;
	transition: 300ms ease all;
	&.shrink {
		${shrinkLabelStyles};
	}
`;