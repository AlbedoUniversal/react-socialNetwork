import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Friends from "./components/Friends/Friends";
import Settings from "./components/Settings/Settings";
import { Route } from "react-router-dom";

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper_content">
        <Route
          path="/dialogs"
          render={() => (
            <Dialogs
              // {/*сделал state и для этих тегов, для того, чтобы передавать туда все данные целиком*/}
              state={props.state.dialogsPage}
              addMessage={props.addMessage}
              updateNewMessageText={props.updateNewMessageText}
              newMessageText={props.state.dialogsPage.newMessageText}
            />
          )}
        />
        <Route
          path="/profile"
          render={() => (
            <Profile
              profilePage={props.state.profilePage}
              addPost={props.addPost}
              updateNewPostText={props.updateNewPostText}
            />
          )}
        />
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/settings" component={Settings} />
        <Route path="/friends" component={Friends} />
      </div>
    </div>
  );
}

export default App;
