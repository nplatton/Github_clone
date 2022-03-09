import React from "react";
import { useHistory } from "react-router-dom";

export default () => {
  const history = useHistory();

  return (
    <p role="alert">
      Sorry, we can't find the page {history.location.pathname}!
    </p>
  );
};
