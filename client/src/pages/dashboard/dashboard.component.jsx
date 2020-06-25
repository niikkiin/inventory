import React, { useEffect } from 'react';

// components
import { DashboardContent } from 'components/dashboard-content/dashboard-content.component';
import { DashboardContainer } from 'components/dashboard-container/dashboard-container.component';
import Spinner from 'components/spinner/spinner.component';

// proptypes
import PropTypes from 'prop-types';

// redux
import { connect } from 'react-redux';
import { getCurrentProfile } from 'store/actions/profile.actions';

const DashboardPage = ({ getCurrentProfile, auth: { user }, profile: { profile, loading } }) => {
	useEffect(() => {
		getCurrentProfile();
	}, []);

	const content = (
		<DashboardContainer>
			<DashboardContent profile={profile} user={user && user.name} />
		</DashboardContainer>
	);

	return loading && profile === null ? <Spinner /> : <>{content}</>;
};

DashboardPage.propTypes = {
	getCurrentProfile: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
	profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(DashboardPage);
