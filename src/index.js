import React from "react";
import App from "./App";
import "./index.css";
import "./App.css";
import store from "./redux/redux-store";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
// чтобы роуты работали, необходимо все обернуть в тег BrowserRouter

let rerendorEntireTree = state => {
  // раньше мы импортировали state, а теперь передаем его через параметры, чтобы не было цикличность(полнейшая плохая практика)
  ReactDOM.render(
    <BrowserRouter>
      {/* раньше у нас в APP передавались атрибуты(функции) addPost, addMessage и так далее, а теперь мы просто передаем наш state и все остальное только одним методом... методом диспатч. В итоге у нас сократился код - и мы передали только один метод епта - крутяк */}
      {/*<App
        state={store.getState()}
        addPost={store.addPost.bind(store)}
        addMessage={store.addMessage.bind(store)}
        updateNewPostText={store.updateNewPostText.bind(store)}
        updateNewMessageText={store.updateNewMessageText.bind(store)} -- это так было, ниочемная гора, в которой легко запутаться
      />*/}
      <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
    </BrowserRouter>,
    document.getElementById("root")
  );
};

rerendorEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  rerendorEntireTree(state);
});

serviceWorker.unregister();
