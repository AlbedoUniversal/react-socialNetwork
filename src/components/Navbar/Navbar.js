import React from "react";
import s from "../Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={s.navigation}>
      <div className={s.item}>
        <NavLink to="/profile" className={s.link} activeClassName={s.active}>
          Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/dialogs" className={s.link} activeClassName={s.active}>
          Messages
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/news" className={s.link} activeClassName={s.active}>
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/music" className={s.link} activeClassName={s.active}>
          Music
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/settings" className={s.link} activeClassName={s.active}>
          Settings
        </NavLink>
      </div>
      <div className={`${s.item} ${s.friends}`}>
        <NavLink to="/friends" className={s.link} activeClassName={s.active}>
          Friends
        </NavLink>
        <div className={s.friendsBox}>
          <div className={s.friendsItem}>
            <div className={s.friendsPhoto}>
              <img
                src="https://www.starfate.ru/assets/images/sonnik/paren.jpg"
                className={s.ava}
              ></img>
            </div>
            <div className={s.friendsName}>
              <p className={s.friendsNameText}>Виктор</p>
            </div>
          </div>
          <div className={s.friendsItem}>
            <div className={s.friendsPhoto}>
              <img
                src="https://www.starfate.ru/assets/images/sonnik/paren.jpg"
                className={s.ava}
              ></img>
            </div>
            <div className={s.friendsName}>
              <p className={s.friendsNameText}>Ибрагим</p>
            </div>
          </div>
          <div className={s.friendsItem}>
            <div className={s.friendsPhoto}>
              <img
                src="https://www.starfate.ru/assets/images/sonnik/paren.jpg"
                className={s.ava}
              ></img>
            </div>
            <div className={s.friendsName}>
              <p className={s.friendsNameText}>Андрей</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
