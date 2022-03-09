import React, { useEffect } from "react";

import { RepoBar } from "..";

import "./style.css";

export default ({ username, result }) => {
  const renderResults = () =>
    result.map((r) => (
      <div key={r.name}>
        <RepoBar data={r} />
      </div>
    ));

  return <div id="results">{username && renderResults()}</div>;
};
