import React, { useState } from 'react';

// styled components
import { AuthLink, Title, AuthWithSocialMedia, OrLine } from './auth-pages.styles';

// proptypes
import PropTypes from 'prop-types'

// components
import { SignInAndSignUpContainer } from 'components/sign-in-and-sign-up-container/sign-in-and-sign-up-container.component';
import { CustomButton } from 'components/custom-button/custom-button.component';
import { FormInput } from 'components/form-input/form-input.component';

// router
import { Link, Redirect } from 'react-router-dom';

// redux
import { connect } from 'react-redux';
import { login } from 'store/actions/auth.actions';


const SignInPage = ({ login, isAuthenticated }) => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const { email, password } = formData;

	const handleSubmit = (e) => {
		e.preventDefault();
		login(email, password);
	};

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	// redirect if logged in
	if(isAuthenticated) {
		return <Redirect to='/dashboard' />
	}

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

SignInPage.propTypes = {
	login: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(SignInPage);
