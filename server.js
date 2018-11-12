const WebSocket = require('ws');

const wss = new WebSocket.Server({port: 8000});

let messages = [];
const maxHistoryQueue = 10;

const addMessage = (message) => {
	if (messages.length >= maxHistoryQueue) messages.shift();
	messages.push(message)
};

const broadcast = (data, ws, isSelf) => {
	wss.clients.forEach((client) => {
		let isSelfClient = isSelf ? (client === ws) : (client !== ws);
		if (client.readyState === WebSocket.OPEN && isSelfClient) {
			client.send(JSON.stringify(data))
		}
	})
};

wss.on('connection', (ws) => {
	ws.on('message', (message) => {
		const data = JSON.parse(message)
		switch (data.type) {
			case 'GET_CHAT_HISTORY':
				broadcast({
					type: 'GET_CHAT_HISTORY',
					message: messages
				}, ws, true);
				break;
			case 'ADD_MESSAGE':
				addMessage(message);
				broadcast({
					type: 'ADD_MESSAGE',
					message: data.message,
					author: data.author,
					companion: data.companion
				}, ws);
				break;
			default:
				break
		}
	});
});
