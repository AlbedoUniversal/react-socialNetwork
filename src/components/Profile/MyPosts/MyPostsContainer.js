import React from "react";
import {
  updateNewPostTextActionCreator,
  addPostActionCreator
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

// const MyPostsContainer = props => {
//   // в React мы используем virtual dom, поэтому мы не можем напрямую использовать все document.qetElem и так далее. Нам нужно создавать ссылку на элемент внутри компонента
//   // спец переменная которая будет содержать ссылку на элемеент(current ссылается на нативный html элемент)

//   let state = props.store.getState();

//   const addPost = () => {
//     props.store.dispatch(addPostActionCreator());
//   };

//   const onPostChange = text => {
//     let action = updateNewPostTextActionCreator(text);
//     props.store.dispatch(action);
//   };

//   return (
//     <MyPosts
//       updateNewPostText={onPostChange}
//       posts={state.profilePage.posts}
//       addPost={addPost}
//       newPostText={state.profilePage.newPostText}
//     />
//   );
// };

const mapStateToProps = (state) => {
	return {
		posts: state.profilePage.posts,
		newPostText: state.profilePage.newPostText
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		updateNewPostText: (text) => {
			let action = updateNewPostTextActionCreator(text);
    		dispatch(action);
		},

		addPost: () => {
			dispatch(addPostActionCreator());
		}
	}
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
