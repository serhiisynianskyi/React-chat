import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
	return (
		<button className={props.className} onClick={props.onClick} {...props}>
		</button>
	);
}

Button.propTypes = {
	disabled: PropTypes.bool,
	onClick: PropTypes.func
};

export default Button;