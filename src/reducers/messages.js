export default function reducer (state = [], action){
	switch (action.type) {
		case 'ADD_MESSAGE':
		case 'MESSAGE_RECEIVED':
			return state.concat([
				{
					author: action.author,
					message: action.message,
					companion: action.companion
				}
			]);
		default:
			return state
	}
};
