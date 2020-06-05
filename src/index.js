import React from "react";
import App from "./App";
import "./index.css";
import "./App.css";
import store from "./redux/redux-store";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import {Provider} from "react-redux"; 
// чтобы роуты работали, необходимо все обернуть в тег BrowserRouter

let rerendorEntireTree = state => {
  // раньше мы импортировали state, а теперь передаем его через параметры, чтобы не было цикличность(полнейшая плохая практика)
  ReactDOM.render(
    <BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
    </BrowserRouter>,
    document.getElementById("root")
  );
};

rerendorEntireTree();

store.subscribe(() => {
  rerendorEntireTree();
});

serviceWorker.unregister();
