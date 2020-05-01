import React from "react";
import s from "../Header.module.css";
import logo from "./Albedo.svg";

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.logo}>
        <img src={logo} alt="logo"></img>
      </div>
      <div className={s.naming}>
        <h3 className={s.text}>lbedo's Network</h3>
      </div>
    </header>
  );
};

export default Header;
