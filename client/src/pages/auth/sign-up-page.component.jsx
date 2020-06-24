import React, { useState } from 'react';

import { AuthLink, Title, AuthWithSocialMedia, OrLine } from './auth-pages.styles';

// components
import { SignInAndSignUpContainer } from 'components/sign-in-and-sign-up-container/sign-in-and-sign-up-container.component';
import { CustomButton } from 'components/custom-button/custom-button.component';
import { FormInput } from 'components/form-input/form-input.component';
import Alert from 'components/alert/alert.component';

// proptyps
import PropTypes from 'prop-types'

// redux
import { connect } from 'react-redux';
import { setAlert } from 'store/actions/alert.actions';
import { register } from 'store/actions/auth.actions';

// router
import { Link, Redirect } from 'react-router-dom';

const SignUpPage = ({ setAlert, register, isAuthenticated }) => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		password2: '',
	});

	const { name, email, password, password2 } = formData;

	const handleSubmit = (e) => {
		e.preventDefault();

		if (password !== password2) {
			setAlert('Passwords do not match', 'danger');
		} else {
			register({ name, email, password });
		}
	};

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	// redirect logged in
	if(isAuthenticated) {
		return <Redirect to='/dashboard' />
	}

	return (
		<SignInAndSignUpContainer welcomeText='Welcome To Our' storeName='STORE'>
			<AuthLink>
				Already a member?{' '}
				<Link className='link' to='/'>
					Sign in
				</Link>
			</AuthLink>
			<Title>Sign Up</Title>
			<AuthWithSocialMedia>
				<CustomButton>Sign Up with Google</CustomButton>
				<OrLine>
					<div className='line'> </div>
					<div className='or'>Or</div>
					<div className='line'> </div>
				</OrLine>
			</AuthWithSocialMedia>
			<Alert />
			<form className='form' onSubmit={(e) => handleSubmit(e)} noValidate>
				<FormInput
					name='name'
					type='text'
					handleChange={(e) => handleChange(e)}
					value={name}
					label='full name'
					id='name'
					required
				/>
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
				<FormInput
					name='password2'
					type='password'
					handleChange={(e) => handleChange(e)}
					value={password2}
					label='password2'
					id='password2'
					required
					minLength='6'
				/>
				<CustomButton type='submit'> Create Account </CustomButton>
			</form>
		</SignInAndSignUpContainer>
	);
};

SignUpPage.propTypes = {
	setAlert: PropTypes.func.isRequired,
	register: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(SignUpPage);
