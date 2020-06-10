import React from "react";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

// const DialogsContainer = props => {

// let state = props.store.getState();

//   let addMessage = () => {
// 	props.store.dispatch(addMessageActionCreator());
//   };

//   let onMessageChange = text => {
// 	let action = updateNewMessageTextActionCreator(text)
//     props.store.dispatch(action);
//   };

//   return (
// 	  <Dialogs  addMessage={addMessage}
// 	  			updateNewMessageText={onMessageChange}
// 				dialogs={state.dialogsPage.dialogs}
// 				messages={state.dialogsPage.messages}
// 				newMessageText={state.dialogsPage.newMessageText}
// 	   />
//   );
// };

const mapStateToProps = (state) => {
	return {
		dialogs: state.dialogsPage.dialogs,
		messages: state.dialogsPage.messages,
		newMessageText: state.dialogsPage.newMessageText
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addMessage: () => {
			dispatch(addMessageActionCreator());
		},

		updateNewMessageText: (text) => {
			let action = updateNewMessageTextActionCreator(text);
			dispatch(action);

		}
	}
}



const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
