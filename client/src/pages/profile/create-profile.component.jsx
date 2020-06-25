import React, { useState } from 'react';

// proptypes
import PropTypes from 'prop-types';

// styled components
import {
  Title
} from './profile.styles';

// redux
import { connect } from 'react-redux';
import { DashboardContainer } from 'components/dashboard-container/dashboard-container.component';
import { createProfile } from 'store/actions/profile.actions';

// router
import { Link, withRouter } from 'react-router-dom';

// components
import { FormInput } from 'components/form-input/form-input.component';
import { CustomButton } from 'components/custom-button/custom-button.component';
import Alert from 'components/alert/alert.component';

const CreateProfilePage = ({ createProfile, history }) => {
	const [formData, setFormData] = useState({
		status: '',
		location: '',
		bio: '',
	});

  const { status, location, bio } = formData;
  
  const handleSubmit = (e) => {
		e.preventDefault();
		createProfile(formData, history);
	};

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  

	return (
		<DashboardContainer>
			<Title>Profile</Title>
			<Alert />
			<form className='form' onSubmit={(e) => handleSubmit(e)} noValidate>
				<FormInput
					name='status'
					type='text'
					handleChange={(e) => handleChange(e)}
					value={status}
					label='status'
					id='status'
					required
				/>
				<FormInput
					name='location'
					type='text'
					handleChange={(e) => handleChange(e)}
					value={location}
					label='location'
					id='location'
					required
				/>
				<FormInput
					name='bio'
					type='text'
					handleChange={(e) => handleChange(e)}
					value={bio}
					label='bio'
					id='bio'
					required
				/>
				<CustomButton type='submit'> Submit </CustomButton>
			</form>
		</DashboardContainer>
	);
};

CreateProfilePage.propTypes = {
	createProfile: PropTypes.func.isRequired
};

export default connect(null, { createProfile})(withRouter(CreateProfilePage));
