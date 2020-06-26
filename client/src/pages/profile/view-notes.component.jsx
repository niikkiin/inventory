import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// routers
// import { Link, withRouter } from 'react-router-dom';

// components
import { DashboardContainer } from 'components/dashboard-container/dashboard-container.component';
import Spinner from 'components/spinner/spinner.component';

// redux
import { connect } from 'react-redux';
import { getCurrentProfile } from 'store/actions/profile.actions';

const ViewNotesPage = ({ getCurrentProfile, profile: { profile, loading } }) => {
	useEffect(() => {
		getCurrentProfile();
	// eslint-disable-next-line
	}, []);

	const content = (
		<DashboardContainer title='Notes'>
			{profile.notes.map((note) => {
				const { _id, text, date } = note;
				return (
					<div className='notes' key={_id}>
						<div className='text'>{text}</div>
						<div className='date'>{date}</div>
					</div>
				);
			})}
		</DashboardContainer>
	);

	return loading && profile === null ? <Spinner /> : <>{content}</>;
};

ViewNotesPage.propTypes = {
	getCurrentProfile: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(ViewNotesPage);
