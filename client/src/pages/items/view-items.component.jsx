import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// styled components
import {} from './items.styles';

// components
import { DashboardContainer } from 'components/dashboard-container/dashboard-container.component';
import { Table } from 'components/table/table.component';
import Spinner from 'components/spinner/spinner.component';

// redux
import { connect } from 'react-redux';
import { getItems, deleteItem } from 'store/actions/items.actions';
import { CustomButton } from 'components/custom-button/custom-button.component';
import { Link } from 'react-router-dom';

const ViewItemsPage = ({ getItems, deleteItem, item: { items, loading } }) => {
	useEffect(() => {
		getItems();
	}, [getItems]);

	const headings = [
		'Purchased Date',
		'Item Name',
		'Category',
		'Quantity',
		'Unit',
		'Purchase Price per Unit',
		'Selling Price per Unit',
		'Barcode',
		'Low Stock Reminder',
		'Description',
		'Image',
		'Quantity Left',
    'Status',
    'Remove'
	];

	const content = (
		<DashboardContainer title='Items'>
			<Link to='/items/add'>
				<CustomButton>
					Add Item
				</CustomButton>
			</Link>
			<Table headings={headings}>
				{items.map((item) => {
					const {
						date,
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
						_id
					} = item;
					return (
						<tr key={_id}>
							<td>{date}</td>
							<td>{name}</td>
							<td>{category}</td>
							<td>{quantity}</td>
							<td>{unit}</td>
							<td>{purchasePricePerUnit}</td>
							<td>{sellingPricePerUnit}</td>
							<td>{barcode}</td>
							<td>{lowStockReminder}</td>
							<td>{description}</td>
							<td>{image}</td>
							<td>{quantityLeft}</td>
							<td>{status}</td>
              <td onClick={e => deleteItem(_id)}>remove</td>
						</tr>
					);
				})}
			</Table>
		</DashboardContainer>
	);

	return loading ? <Spinner /> : <>{content}</>;
};

ViewItemsPage.propTypes = {
	getItems: PropTypes.func.isRequired,
	item: PropTypes.object.isRequired,
	deleteItem: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
	item: state.item,
});

export default connect(mapStateToProps, { getItems, deleteItem })(ViewItemsPage);
