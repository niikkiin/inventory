import React, { useState } from 'react';

import { AuthLink, Title, AuthWithSocialMedia, OrLine } from './auth-pages.styles';

// components
import { SignInAndSignUpContainer } from 'components/sign-in-and-sign-up-container/sign-in-and-sign-up-container.component';
import { CustomButton } from 'components/custom-button/custom-button.component';
import { FormInput } from 'components/form-input/form-input.component';

// router
import { Link } from 'react-router-dom';

const SignInPage = () => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const { email, password } = formData;

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log('Successfully Logged In');
	};

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	return (
		<SignInAndSignUpContainer welcomeText='Welcome Back To Our' storeName='STORE'>
			<AuthLink>
				Not yet a member?{' '}
				<Link className='link' to='/register'>
					Create an account
				</Link>
			</AuthLink>
			<Title>Sign In</Title>
			<AuthWithSocialMedia>
				<CustomButton>Sign In with Google</CustomButton>
				<OrLine>
					<div className='line'> </div>
					<div className='or'>Or</div>
					<div className='line'> </div>
				</OrLine>
			</AuthWithSocialMedia>

			<form className='form' onSubmit={(e) => handleSubmit(e)} noValidate>
				<FormInput
					name='email'
					type='email'
					handleChange={(e) => handleChange(e)}
					value={email}
					label='email'
					id='email'
					required
				/>
				<FormInput
					name='password'
					type='password'
					handleChange={(e) => handleChange(e)}
					value={password}
					label='password'
					id='password'
					required
					minLength='6'
				/>
				<CustomButton type='submit'> Log In </CustomButton>
			</form>
		</SignInAndSignUpContainer>
	);
};

export default SignInPage;
