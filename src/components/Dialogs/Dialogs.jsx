import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = props => {
  // let newMessageElement = React.createRef();

  let onAddMessage = () => {
	  props.addMessage();
  };

  let onMessageChange = e => {
	let text = e.target.value;
	props.updateNewMessageText(text);

  };

  let dialogsElements = props.dialogs.map(dialog => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messagesElements = props.messages.map(message => (
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
          value={props.newMessageText}
        />

        <div>
          <button onClick={onAddMessage} className={s.button}>
            add message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
