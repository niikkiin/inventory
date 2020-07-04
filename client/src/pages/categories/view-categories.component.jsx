import React, { useEffect } from 'react';

import PropTypes from 'prop-types';

// components
import { DashboardContainer } from 'components/dashboard-container/dashboard-container.component';
import { Table } from 'components/table/table.component';
import Spinner from 'components/spinner/spinner.component';
import Alert from 'components/alert/alert.component';

// redux
import { connect } from 'react-redux';
import { getCategories, deleteCategory } from 'store/actions/category.actions';
import { CustomButton } from 'components/custom-button/custom-button.component';
import { Link } from 'react-router-dom';
import { Badge } from 'components/badge/badge.component';
import { formatDate } from 'utilities/date/date.component';

// icons
import { Icon } from '@iconify/react';
import trashAlt from '@iconify/icons-fa-regular/trash-alt';
import editIcon from '@iconify/icons-fa-regular/edit';

const ViewCategoriesPage = ({ getCategories, deleteCategory, category: { categories, loading } }) => {
	useEffect(() => {
		getCategories();
	}, [getCategories]);

	const headings = ['Date Added', 'Categories', 'Actions'];

	const content = (
		<DashboardContainer title='Items'>
			<Link to='/categories/add'>
				<CustomButton>Add Category</CustomButton>
			</Link>
			<Alert />
			<Table headings={headings}>
				{categories.map((category) => {
					const { item_type, createdAt, color, _id } = category;

					return (
						<tr key={_id}>
							{/* <td>{formatDate(date)}</td> */}
							<td>{formatDate(createdAt)}</td>
							<td>
								<Link to={`category/${_id}`}>
									<Badge color={color}>{item_type}</Badge>
								</Link>
							</td>
							<td>
								<Link to={`category/update/${_id}`}>
									<Icon icon={editIcon} className='icon update-icon' />
								</Link>
								<Icon
									onClick={(e) => deleteCategory(_id)}
									icon={trashAlt}
									className='icon delete-icon'
								/>
							</td>
						</tr>
					);
				})}
			</Table>
		</DashboardContainer>
	);

	return loading ? <Spinner /> : <>{content}</>;
};

ViewCategoriesPage.propTypes = {
	getCategories: PropTypes.func.isRequired,
	category: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	category: state.category,
});

export default connect(mapStateToProps, { getCategories, deleteCategory })(ViewCategoriesPage);
