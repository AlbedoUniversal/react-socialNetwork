import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = props => {
  let newMessageElement = React.createRef();
  console.log("dialogs", props);

  let addMessage = () => {
    props.addMessage();
  };

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.updateNewMessageText(text);
  };

  let dialogsElements = props.state.dialogs.map(dialog => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messagesElements = props.state.messages.map(message => (
    <Message message={message.message} key={message.id} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        {messagesElements}
        <textarea
          ref={newMessageElement}
          onChange={onMessageChange}
          value={props.newMessageText}
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
