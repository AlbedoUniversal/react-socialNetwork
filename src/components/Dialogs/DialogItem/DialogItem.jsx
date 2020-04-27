import React from "react";
import s from "./DialogItem.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = props => {
  return (
    <div className={`${s.dialog}`} id={props.id}>
      <NavLink
        to={`/dialogs/${props.id}`}
        className={s.dialogLink}
        activeClassName={s.active}
      >
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
