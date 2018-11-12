import React from 'react';
import PropTypes from 'prop-types';
import MessageItem from './MessageItem';

const MessagesList = ({messages}) => (
	<div className="chat-content">
		{messages.length ?
			messages.map((message, index) => (
				<MessageItem
					key={index}
					{...message}
				/>
			)) : <p className='chat-default-text'>No messages</p>}
	</div>
);

MessagesList.propTypes = {
	messages: PropTypes.arrayOf(PropTypes.shape({
		message: PropTypes.string.isRequired,
		author: PropTypes.string.isRequired
	}).isRequired).isRequired
};

export default MessagesList