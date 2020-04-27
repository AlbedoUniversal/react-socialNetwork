import React from "react";
import s from "./Post.module.css";
import robotAva from "./robot-ava.svg";

const Post = props => {
  return (
    <div className={s.item}>
      <img className={s.itemPhoto} src={robotAva} />
      {props.message}
      <div className={s.blockLike}>
        <span className={s.like}>like{props.likesCount}</span>
      </div>
    </div>
  );
};

export default Post;
