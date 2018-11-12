import React from 'react';
import PropTypes from 'prop-types';

const MessageItem = ({message, author, companion}) => (
	<div className={`chat-content-item ${companion ? 'companion': 'personal'}`}>
		<p className='author'>{author}</p>
		<p className='message'>{message}</p>
	</div>
);

MessageItem.propTypes = {
	message: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired
};

export default MessageItem