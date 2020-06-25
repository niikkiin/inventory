import React from 'react';

// proptypes
import PropTypes from 'prop-types';

// redux
import { connect } from 'react-redux';

// router
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, auth: { isAuthenticated, loading }, ...rest }) => (
	<Route
		{...rest}
		render={(props) => (!isAuthenticated && !loading ? <Redirect to='/' /> : <Component {...props} />)}
	/>
);

PrivateRoute.propTypes = {
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
