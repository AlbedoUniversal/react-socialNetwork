import React from "react";
import s from "./ProfileInfo.module.css";
import robot from "../robot.svg";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img className={s.robot} src={robot} alt="robot"></img>
      </div>
      <div>ava + description</div>
    </div>
  );
};

export default ProfileInfo;
