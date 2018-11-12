import {takeEvery} from 'redux-saga/effects'
import {ADD_MESSAGE} from '../actions'

const handleNewMessage = function* handleNewMessage(params) {
	yield takeEvery(ADD_MESSAGE, (action) => {
		action.companion = true;
		params.socket.send(JSON.stringify(action))
	})
};

export default handleNewMessage
