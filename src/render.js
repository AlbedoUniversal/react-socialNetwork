import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "./App.css";
import App from "./App";
import { addPost } from "./redux/state";
// чтобы роуты работали, необходимо все обернуть в тег BrowserRouter

export let rerendorEntireTree = state => {
  // раньше мы импортировали state, а теперь передаем его через параметры, чтобы не было цикличность(полнейшая плохая практика)
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} addPost={addPost} />
    </BrowserRouter>,
    document.getElementById("root")
  );
};
