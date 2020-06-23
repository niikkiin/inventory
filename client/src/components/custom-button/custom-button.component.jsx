import React from 'react';

import { CustomButtonContainer } from './custom-button.styles';

export const CustomButton = ({ children, ...props }) => (
	<CustomButtonContainer className={props.type === 'submit' ? 'submit-btn' : ''} {...props}>{children}</CustomButtonContainer>
);
