import React from 'react';

// styled components
import { CategoryType } from './category.styles';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { formatDate } from 'utilities/date/date.component';
import { CustomButton } from 'components/custom-button/custom-button.component';
import { Link } from 'react-router-dom';

const SingleCategoryPage = ({ category: { _id, item_type, color, createdAt } }) => {
	return (
		<>
			<Link to={`update/${_id}`}>
        <CustomButton>Update</CustomButton>
			</Link>
			<div className='date'>Date: {formatDate(createdAt)}</div>
			<CategoryType key={_id} color={color}>
				{item_type}
			</CategoryType>
		</>
	);
};

SingleCategoryPage.propTypes = {
	category: PropTypes.object.isRequired,
};

export default connect()(SingleCategoryPage);
