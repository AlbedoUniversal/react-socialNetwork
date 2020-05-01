import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = props => {
  let postsElements = props.posts.map(post => (
    <Post message={post.message} likesCount={post.likesCount} key={post.id} />
  ));

  // в React мы используем virtual dom, поэтому мы не можем напрямую использовать все document.qetElem и так далее. Нам нужно создавать ссылку на элемент внутри компонента

  // спец переменная которая будет содержать ссылку на элемеент(current ссылается на нативный html элемент)
  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text); // ф из мира бизнеса,
  };

  return (
    <div className={s.postsWrapper}>
      <h3 className={s.postsHeading}>My posts</h3>
      <div className={s.blocksAddPost}>
        <div className={s.blockTextarea}>
          <textarea
            className={s.blockTextarea_item}
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={addPost} className={s.blockAddBtn}>
            Add post
          </button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
