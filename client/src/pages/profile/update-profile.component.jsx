import React, { useState, useEffect } from 'react';

// proptypes
import PropTypes from 'prop-types';

// styled components
import { Title } from './profile.styles';

// redux
import { connect } from 'react-redux';
import { DashboardContainer } from 'components/dashboard-container/dashboard-container.component';
import { createProfile, getCurrentProfile } from 'store/actions/profile.actions';

// router
import { Link, withRouter } from 'react-router-dom';

// components
import { FormInput } from 'components/form-input/form-input.component';
import { CustomButton } from 'components/custom-button/custom-button.component';
import Alert from 'components/alert/alert.component';

const UpdateProfilePage = ({ profile: { profile, loading }, createProfile, getCurrentProfile, history }) => {
	const [formData, setFormData] = useState({
		status: '',
		location: '',
		bio: '',
	});

  useEffect(() => {
    getCurrentProfile();

    setFormData({
      status: loading || !profile.status ? '' : profile.status,
      location: loading || !profile.location ? '' : profile.location,
      bio: loading || !profile.bio ? '' : profile.bio
    });
  }, [loading]);

	const { status, location, bio } = formData;

	const handleSubmit = (e) => {
		e.preventDefault();
		createProfile(formData, history, true);
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

UpdateProfilePage.propTypes = {
	createProfile: PropTypes.func.isRequired,
	getCurrentProfile: PropTypes.func.isRequired,
	profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	profile: state.profile,
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(withRouter(UpdateProfilePage));
