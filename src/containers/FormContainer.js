import {connect} from 'react-redux';
import Form from '../components/Form/index';
import {addMessage} from '../actions'

const mapDispatchToProps = dispatch => ({
	dispatch: (message, author) => {
		dispatch(addMessage(message, author, false))
	}
});

const FormContainer = connect(null, mapDispatchToProps)(Form);
export default FormContainer;