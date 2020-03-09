import React from 'react';

const Alert = (props) => {
	return (
		props.alert !== null && (
			// here we display the props sent from the alert state
			<div className={`alert alert-${props.alert.type}`}>
				<i className="fas fa-info-circle" /> {props.alert.msg}
			</div>
		)
	);
};

export default Alert;
