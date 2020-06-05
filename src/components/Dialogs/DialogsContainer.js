import React from "react";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import connect from "react-redux";

const DialogsContainer = props => {

let state = props.store.getState();

  let addMessage = () => {
	props.store.dispatch(addMessageActionCreator());
  };

  let onMessageChange = text => {
	let action = updateNewMessageTextActionCreator(text)
    props.store.dispatch(action);
  };

  return (
	  <Dialogs  addMessage={addMessage}
	  			updateNewMessageText={onMessageChange}
				dialogs={state.dialogsPage.dialogs}
				messages={state.dialogsPage.messages}
				newMessageText={state.dialogsPage.newMessageText}
	   />
  );
};

const mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		updateNewMessageText: () => {

		},
		addMessage: () => {
			dispatch(addMessageActionCreator());
		}
	}
}



const DialogsContainer = connect(mapStateToProps, mapDispatchToProps )(Dialogs);

export default DialogsContainer;
