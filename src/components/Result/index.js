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

  return (
    <div role="region" id="results">
      {username && renderResults()}
    </div>
  );
};
