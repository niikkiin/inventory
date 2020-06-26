import React, { useState } from 'react';
import PropTypes from 'prop-types';

// redux
import { connect } from 'react-redux';
import { addItem } from 'store/actions/items.actions';

// components
import { FormInput } from 'components/form-input/form-input.component';
import { CustomButton } from 'components/custom-button/custom-button.component';
import { DashboardContainer } from 'components/dashboard-container/dashboard-container.component';
import Alert from 'components/alert/alert.component';

const AddItemPage = ({ addItem }) => {
	const [formData, setFormData] = useState({
		name: '',
		category: '',
		quantity: 0,
		unit: '',
		purchasePricePerUnit: 0,
		sellingPricePerUnit: 0,
		barcode: '',
		lowStockReminder: 0,
		description: '',
		image: '',
		quantityLeft: 0,
		status: '',
	});

	const {
		name,
		category,
		quantity,
		unit,
		purchasePricePerUnit,
		sellingPricePerUnit,
		barcode,
		lowStockReminder,
		description,
		image,
		quantityLeft,
		status,
	} = formData;

	const handleSubmit = (e) => {
		e.preventDefault();
		addItem(formData);
	};

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	return (
		<DashboardContainer title='Adding Item'>
			<Alert />
			<form className='form' onSubmit={(e) => handleSubmit(e)} noValidate>
				<FormInput
					name='name'
					type='text'
					handleChange={(e) => handleChange(e)}
					value={name}
					label='name'
					id='name'
					required
				/>
				<FormInput
					name='category'
					type='text'
					handleChange={(e) => handleChange(e)}
					value={category}
					label='category'
					id='category'
					required
				/>
				<FormInput
					name='quantity'
					type='number'
					handleChange={(e) => handleChange(e)}
					value={quantity}
					label='quantity'
					id='quantity'
					required
				/>
				<FormInput
					name='unit'
					type='text'
					handleChange={(e) => handleChange(e)}
					value={unit}
					label='unit'
					id='unit'
					required
				/>
				<FormInput
					name='purchasePricePerUnit'
					type='number'
					handleChange={(e) => handleChange(e)}
					value={purchasePricePerUnit}
					label='purchasePricePerUnit'
					id='purchasePricePerUnit'
					required
				/>
				<FormInput
					name='sellingPricePerUnit'
					type='number'
					handleChange={(e) => handleChange(e)}
					value={sellingPricePerUnit}
					label='sellingPricePerUnit'
					id='sellingPricePerUnit'
					required
				/>
				<FormInput
					name='barcode'
					type='text'
					handleChange={(e) => handleChange(e)}
					value={barcode}
					label='barcode'
					id='barcode'
					required
				/>
				<FormInput
					name='lowStockReminder'
					type='number'
					handleChange={(e) => handleChange(e)}
					value={lowStockReminder}
					label='lowStockReminder'
					id='lowStockReminder'
					required
				/>
				<FormInput
					name='description'
					type='text'
					handleChange={(e) => handleChange(e)}
					value={description}
					label='description'
					id='description'
					required
				/>
				<FormInput
					name='image'
					type='text'
					handleChange={(e) => handleChange(e)}
					value={image}
					label='image'
					id='image'
					required
				/>
				<FormInput
					name='quantityLeft'
					type='number'
					handleChange={(e) => handleChange(e)}
					value={quantityLeft}
					label='quantityLeft'
					id='quantityLeft'
					required
				/>
				<FormInput
					name='status'
					type='text'
					handleChange={(e) => handleChange(e)}
					value={status}
					label='status'
					id='item-status'
					required
				/>
				<CustomButton type='submit'> Submit </CustomButton>
			</form>
		</DashboardContainer>
	);
};

AddItemPage.propTypes = {
	addItem: PropTypes.func.isRequired,
};

export default connect(null, { addItem })(AddItemPage);
