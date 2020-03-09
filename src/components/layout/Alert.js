import React from 'react';

const Alert = ({ alert }) => {
	return (
		alert !== null && (
			// here we display the props sent from the alert state
			<div className={`alert alert-${alert.type}`}>
				<i className="fas fa-info-circle" /> {alert.msg}
			</div>
		)
	);
};

export default Alert;
