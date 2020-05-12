import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

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
    },
    sideBar: {}
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

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

    this._callSubscriber(this._state);
  }
};

export default store;
window.store = store;
