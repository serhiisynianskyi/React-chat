export const ADD_MESSAGE = 'ADD_MESSAGE';
export const GET_CHAT_HISTORY = 'GET_CHAT_HISTORY';
export const MESSAGE_RECEIVED = 'MESSAGE_RECEIVED';

export const addMessage = (message, author, companion) => ({
	type: ADD_MESSAGE,
	message,
	author,
	companion
});

export const messageReceived = (message, author, companion) => ({
	type: MESSAGE_RECEIVED,
	message,
	author,
	companion
});