import React from "react";
import s from "../Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img
          className={s.profileImg}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ8kxo0nHRrrxZpiA8hmXDa-5vwjWA1x88eiOkE_eyXADDRCU2T&usqp=CAU"
        ></img>
      </div>
      <div>ava + description</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
