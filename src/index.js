import React from "react";
import App from "./App";
import "./index.css";
import "./App.css";
import store from "./redux/state";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
// чтобы роуты работали, необходимо все обернуть в тег BrowserRouter

let rerendorEntireTree = state => {
  // раньше мы импортировали state, а теперь передаем его через параметры, чтобы не было цикличность(полнейшая плохая практика)
  ReactDOM.render(
    <BrowserRouter>
      <App
        state={store.getState()}
        addPost={store.addPost.bind(store)}
        addMessage={store.addMessage.bind(store)}
        updateNewPostText={store.updateNewPostText.bind(store)}
        updateNewMessageText={store.updateNewMessageText.bind(store)}
      />
    </BrowserRouter>,
    document.getElementById("root")
  );
};

rerendorEntireTree(store.getState());
store.subscribe(rerendorEntireTree);

serviceWorker.unregister();
