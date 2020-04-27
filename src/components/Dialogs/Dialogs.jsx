import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = props => {
  let newMessage = React.createRef();

  let addMessage = () => {
    let text = newMessage.current.value;

    alert(text);
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
        <textarea ref={newMessage}></textarea>
        <button onClick={addMessage} className={s.button}>
          add message
        </button>
      </div>
    </div>
  );
};

export default Dialogs;
