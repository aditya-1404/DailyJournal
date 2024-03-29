import React from 'react';
function Alert(props) {
	return (
		<div
			role="alert"
			className={`alert alert-${props.type} alert-dismissible fade show`}
			style={{
				width: '100%',
				margin: '0 auto',
				marginTop: 1
			}}
		>
			{props.message}
			<button
				type="button"
				className="close"
				data-dismiss="alert"
        aria-label="Close"
        onClick={props.clearError}
			>
				<span aria-hidden="true">&times;</span>
			</button>
		</div>
	);
}

export default Alert;
