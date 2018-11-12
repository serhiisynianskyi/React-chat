import React from 'react';
import './styles.scss';
import Button from '../Button';

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			nickName: '',
			message: ''
		};

		this.store = this.props.store;

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
		const message = this.state.message;
		this.props.dispatch(this.state.message, this.state.nickName);
		if (message) {
			this.setState({message: ''});
		}
	}

	handleChange(event) {
		const eventObject = {};
		eventObject[event.target.name] = event.target.value;
		this.setState(eventObject);
	}

	render() {
		const disabled = !this.state.nickName || !this.state.message;

		return (
			<form className='chat-form' onSubmit={this.handleSubmit}>
				<input
					type='text'
					name='nickName'
					className='chat-form-input'
					onChange={this.handleChange}
					autoComplete='off'
					value={this.state.nickName}
					placeholder='Nickname'/>
				<input
					type='text'
					name='message'
					className='chat-form-input'
					onChange={this.handleChange}
					autoComplete='off'
					value={this.state.message}
					placeholder='Message'/>
				<Button
					type='submit'
					disabled={disabled}
					className='chat-form-submit'>
					Send
				</Button>
			</form>
		);
	}
}

// Form.propTypes = {
// 	onAdd: React.PropTypes.func.isRequired
// };

export default Form;