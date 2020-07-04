import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// redux
import { connect } from 'react-redux';
import { getItem, updateItem } from 'store/actions/items.actions';

// components
import { FormInput } from 'components/form-input/form-input.component';
import { CustomButton } from 'components/custom-button/custom-button.component';
import { DashboardContainer } from 'components/dashboard-container/dashboard-container.component';
import Spinner from 'components/spinner/spinner.component';
import Alert from 'components/alert/alert.component';

const UpdateItemPage = ({ updateItem, getItem, item: { item, loading }, match }) => {
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
	} = formData;

	useEffect(() => {
		getItem(match.params.id);

		setFormData({
			name: loading || !item.name ? '' : item.name,
			category: loading || !item.category ? '' : item.category,
			quantity: loading || !item.quantity ? '' : item.quantity,
			unit: loading || !item.unit ? '' : item.unit,
			purchasePricePerUnit: loading || !item.purchasePricePerUnit ? '' : item.purchasePricePerUnit,
			sellingPricePerUnit: loading || !item.sellingPricePerUnit ? '' : item.sellingPricePerUnit,
			barcode: loading || !item.barcode ? '' : item.barcode,
			lowStockReminder: loading || !item.lowStockReminder ? '' : item.lowStockReminder,
			description: loading || !item.description ? '' : item.description,
			image: loading || !item.image ? '' : item.image,
			quantityLeft: loading || !item.quantityLeft ? '' : item.quantityLeft,
		});
		// eslint-disable-next-line
	}, [loading, getItem]);

	

	const handleSubmit = (e) => {
		e.preventDefault();
		updateItem(formData, match.params.id);
	};

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	return loading && item ? <Spinner /> : (
		<DashboardContainer title='Updating Item'>
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
				<CustomButton type='submit'> Submit </CustomButton>
			</form>
		</DashboardContainer>
	);
};

UpdateItemPage.propTypes = {
	item: PropTypes.object.isRequired,
  getItem: PropTypes.func.isRequired,
  updateItem: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
	item: state.item,
});

export default connect(mapStateToProps, { getItem, updateItem })(UpdateItemPage);
