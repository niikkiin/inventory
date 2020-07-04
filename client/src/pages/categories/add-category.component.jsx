import React, { useState } from 'react';
import PropTypes from 'prop-types';

// redux
import { connect } from 'react-redux';
import { addCategory } from 'store/actions/category.actions';

// components
import { FormInput } from 'components/form-input/form-input.component';
import { CustomButton } from 'components/custom-button/custom-button.component';
import { DashboardContainer } from 'components/dashboard-container/dashboard-container.component';
import Alert from 'components/alert/alert.component';

const AddCategoryPage = ({ addCategory }) => {
	const [formData, setFormData] = useState({
		item_type: '',
		color: ''
	});

	const {
		item_type,
		color
	} = formData;

	const handleSubmit = (e) => {
		e.preventDefault();
		addCategory(formData);
	};

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	return (
		<DashboardContainer title='Adding Category'>
			<Alert />
			<form className='form' onSubmit={(e) => handleSubmit(e)} noValidate>
				<FormInput
					name='item_type'
					type='text'
					handleChange={(e) => handleChange(e)}
					value={item_type}
					label='Name'
					id='item_type'
					required
				/>
				<FormInput
					name='color'
					type='text'
					handleChange={(e) => handleChange(e)}
					value={color}
					label='color'
					id='color'
					required
				/>
				<CustomButton type='submit'> Submit </CustomButton>
			</form>
		</DashboardContainer>
	);
};

AddCategoryPage.propTypes = {
	addCategory: PropTypes.func.isRequired,
};

export default connect(null, { addCategory })(AddCategoryPage);
