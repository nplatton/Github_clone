import React from "react";
import { useSelector } from "react-redux";

import "./style.css";

const Header = () => {
  const username = useSelector((store) => store.username);
  if (!!username) {
    return <h1 id="user-title">{username}'s Github Repositories</h1>;
  }
  return <h1 id="home-title">Welcome to Github &#128064;!</h1>;
};

export default Header;
