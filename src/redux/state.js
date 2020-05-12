const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you", likesCount: 23 },
        { id: 2, message: "What are you doing", likesCount: 2 },
        { id: 3, message: "What are you doing", likesCount: 2 }
      ],
      newPostText: ""
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
      newMessageText: "",

      dialogs: [
        { id: 1, name: "Albert" },
        { id: 2, name: "Natasha" },
        { id: 3, name: "Roma" },
        { id: 4, name: "Eugene" },
        { id: 5, name: "Valera" },
        { id: 6, name: "Vova" }
      ]
    }
  },
  _callSubscriber() {
    console.log("State change"); // уведомить подпищика
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer; // observer паттерн наблюдатель
  },

  // addPost() {
  //   let newPost = {
  //     id: 7,
  //     message: this._state.profilePage.newPostText,
  //     likesCount: 0
  //   };
  //   this._state.profilePage.posts.push(newPost);
  //   this._state.profilePage.newPostText = "";
  //   this._callSubscriber(this._state);
  // },
  // updateNewPostText(newText) {
  //   // прикрпеплояем то значение, которое пришло извне
  //   this._state.profilePage.newPostText = newText;
  //   this._callSubscriber(this._state);
  // },
  // addMessage() {
  //   let newMessage = {
  //     id: 7,
  //     message: this._state.dialogsPage.newMessageText
  //   };
  //   this._state.dialogsPage.messages.push(newMessage);
  //   this._state.dialogsPage.newMessageText = "";
  //   this._callSubscriber(this._state);
  // },
  // updateNewMessageText(newMessageText) {
  //   this._state.dialogsPage.newMessageText = newMessageText;
  //   this._callSubscriber(this._state);
  // },
  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 7,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText; // у каждого экшена (объекта) есть свои свойства, в данном случае если мы оставим просто newText, то не понятно, а что это такое, поэтому мы написали action.newText, чтобы у него был такой метод
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let newMessage = {
        id: 7,
        message: this._state.dialogsPage.newMessageText
      };
      this._state.dialogsPage.messages.push(newMessage);
      this._state.dialogsPage.newMessageText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.dialogsPage.newMessageText = action.newMessageText;
      this._callSubscriber(this._state);
    }
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = text => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text
});
export const addMessageActionCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageTextActionCreator = text => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newMessageText: text
});

export default store;
window.store = store;
