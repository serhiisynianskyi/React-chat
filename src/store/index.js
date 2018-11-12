import {createStore,applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import setupSocket from '../sockets';
import handleNewMessage from '../sagas'
import {composeWithDevTools} from 'redux-devtools-extension'

import reducer from '../reducers';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
	reducer,
	composeWithDevTools(applyMiddleware(sagaMiddleware))
);

const socket = setupSocket(store.dispatch);
sagaMiddleware.run(handleNewMessage, { socket });

export default store;