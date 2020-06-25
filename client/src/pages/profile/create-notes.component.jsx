import React, { useState } from 'react';
import PropTypes from 'prop-types';

// styled components
import { Title } from './profile.styles';

// routers
// import { Link, withRouter } from 'react-router-dom';

// components
import { DashboardContainer } from 'components/dashboard-container/dashboard-container.component';
import { CustomButton } from 'components/custom-button/custom-button.component';
import { FormInput } from 'components/form-input/form-input.component';
import Alert from 'components/alert/alert.component';

// redux
import { connect } from 'react-redux';
import { addNote } from 'store/actions/profile.actions';

const CreateNotesPage = ({ addNote, history }) => {
	const [formData, setFormData] = useState({
		text: '',
		date: '',
	});

	const { text, date } = formData;

	const handleSubmit = (e) => {
    e.preventDefault();
    
    addNote(formData, history);
	};

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	return (
		<DashboardContainer>
			<Title>Notes</Title>
			<Alert />
			<form className='form' onSubmit={(e) => handleSubmit(e)} noValidate>
				<FormInput
					name='text'
					type='text'
					handleChange={(e) => handleChange(e)}
					value={text}
					label='text'
					id='text'
					required
				/>
				<FormInput
					name='date'
					type='date'
					handleChange={(e) => handleChange(e)}
					value={date}
					label='date'
					id='date'
					required
				/>
				<CustomButton type='submit'> Submit </CustomButton>
			</form>
		</DashboardContainer>
	);
};

CreateNotesPage.propTypes = {
	addNote: PropTypes.func.isRequired,
};

export default connect(null, { addNote })(CreateNotesPage);
