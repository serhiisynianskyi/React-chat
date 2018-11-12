import React, {Component} from 'react';
import './styles.scss';
// import HeaderContainer from './containers/HeaderContainer';
import MessagesListContainer from '../MessagesListContainer';
import FormContainer from '../FormContainer';

export default class Chat extends Component {
	render() {
		return (
			<div className='chat-wrapper'>
				<MessagesListContainer/>
				<FormContainer/>
			</div>
		)
	}
}