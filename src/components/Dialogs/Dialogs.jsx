import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator
} from "../../redux/dialogs-reducer";

const Dialogs = props => {
  // let newMessageElement = React.createRef();

  let addMessage = () => {
    props.dispatch(addMessageActionCreator());
  };

  let onMessageChange = e => {
    let text = e.target.value;
    props.dispatch(updateNewMessageTextActionCreator(text));
  };

  let dialogsElements = props.dialogsPage.dialogs.map(dialog => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messagesElements = props.dialogsPage.messages.map(message => (
    <Message message={message.message} key={message.id} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        {messagesElements}
        <textarea
          placeholder="Enter your message"
          // ref={newMessageElement}
          onChange={onMessageChange}
          value={props.dialogsPage.newMessageText}
        />

        <div>
          <button onClick={addMessage} className={s.button}>
            add message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
