import React, { useState } from "react";

import "./style.css";

export default ({ getUserInfo }) => {
  const [username, setUsername] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await getUserInfo(username);
      // Clear input box on submit
      e.target.childNodes[1].value = "";
    } catch (err) {
      console.warn(err);
    }
  };

  const handleInput = (e) => {
    const input = e.target.value;
    setUsername(input);
  };

  return (
    <form role="form" onSubmit={handleSubmit}>
      <label aria-label="username" htmlFor="username" />
      <input
        id="username"
        onChange={handleInput}
        name="username"
        type="text"
        value={username}
      />
      <input type="submit" value="Search" />
    </form>
  );
};
