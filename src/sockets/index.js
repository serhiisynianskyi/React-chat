import {messageReceived, GET_CHAT_HISTORY, ADD_MESSAGE} from '../actions'

const setupSocket = (dispatch) => {
	const socket = new WebSocket('ws://localhost:8000');

	socket.onopen = () => {
		socket.send(JSON.stringify({
			type: GET_CHAT_HISTORY
		}))
	};
	socket.onmessage = (event) => {
		const data = JSON.parse(event.data);
		switch (data.type) {
			case ADD_MESSAGE:
				dispatch(messageReceived(data.message, data.author, data.companion));
				break;
			case GET_CHAT_HISTORY:
				if (data.message && data.message.length > 0) {
					data.message.forEach(item => {
						let parsedItem = JSON.parse(item);
						dispatch(messageReceived(parsedItem.message, parsedItem.author, parsedItem.companion))
					})
				}
				break;
			default:
				break
		}
	};
	return socket
};

export default setupSocket
