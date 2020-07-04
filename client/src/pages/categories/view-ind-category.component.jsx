import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// redux
import { connect } from 'react-redux';
import { getCategory } from 'store/actions/category.actions';

// components
import { DashboardContainer } from 'components/dashboard-container/dashboard-container.component';
import Spinner from 'components/spinner/spinner.component';
import SingleCategoryPage from 'pages/categories/display-individual-category';
import { CustomButton } from 'components/custom-button/custom-button.component';

const ViewIndividualCategoryPage = ({ getCategory, category: { category, loading }, match }) => {
	useEffect(() => {
		getCategory(match.params.id);
		// eslint-disable-next-line
	}, [getCategory]);

	const content = (
		<DashboardContainer title='Viewing Category'>
			<SingleCategoryPage category={category} />
		</DashboardContainer>
	);
	return loading || category === null ? <Spinner /> : <>{content}</>;
};

ViewIndividualCategoryPage.propTypes = {
	getCategory: PropTypes.func.isRequired,
	category: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	category: state.category,
});

export default connect(mapStateToProps, { getCategory })(ViewIndividualCategoryPage);
