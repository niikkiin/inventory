import React from 'react';

// styled components
import { AlertContainer } from './alert.styles';

// proptypes
import PropTypes from 'prop-types';

// redux
import { connect } from 'react-redux';

const Alert = ({ alerts }) =>
	alerts !== null &&
	alerts.length > 0 &&
	alerts.map((alert) => {
		const { id, alertType, msg } = alert;
		return (
			<AlertContainer key={id} className={`alert alert-${alertType}`}>
				{msg}
			</AlertContainer>
		);
	});

Alert.propTypes = {
	alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
	alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
