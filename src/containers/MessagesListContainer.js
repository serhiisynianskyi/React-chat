import {connect} from 'react-redux'
import MessagesList from '../components/MessagesList'

const mapStateToProps = state => ({
	messages: state.messages
});
const MessagesListContainer = connect(mapStateToProps, {})(MessagesList);

export default MessagesListContainer;