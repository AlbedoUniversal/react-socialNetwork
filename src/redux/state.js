import { rerendorEntireTree } from "../render";

let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi, how are you", likesCount: 23 },
      { id: 2, message: "What are you doing", likesCount: 2 },
      { id: 3, message: "What are you doing", likesCount: 2 }
    ]
  },
  dialogsPage: {
    messages: [
      { id: 1, message: "Hi" },
      { id: 2, message: "Hello" },
      { id: 3, message: "Hola" },
      { id: 4, message: "Ariva" },
      { id: 5, message: "Salam" },
      { id: 6, message: "Privki" }
    ],
    dialogs: [
      { id: 1, name: "Albert" },
      { id: 2, name: "Natasha" },
      { id: 3, name: "Roma" },
      { id: 4, name: "Eugene" },
      { id: 5, name: "Valera" },
      { id: 6, name: "Vova" }
    ]
  }
};

export let addPost = postMessage => {
  let newPost = {
    id: 5,
    message: postMessage,
    likesCount: 0
  };
  state.profilePage.posts.push(newPost);
  rerendorEntireTree(state);
};

export default state;
