import React from 'react';

// styled components
import { FormInputContainer, Input, Label } from './form-input.styles';

export const FormInput = ({ handleChange, label, ...props }) => (
	<FormInputContainer className='desktop-breakpoint'>
		<Input autoComplete='off' onChange={handleChange} {...props} />
		{label ? (
			<Label htmlFor={label} className={props.value.length ? 'shrink' : ''}>
				{label}
			</Label>
		) : null}
	</FormInputContainer>
);