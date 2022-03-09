import React from "react";

import "./style.css";

export default ({ data }) => {
  return (
    <div data-testid="repo-bar" className="repo-bar">
      <div className="left-side">
        <h3>{data.name}</h3>
        <div className="counts">
          <div>Forks: {data.forks}</div>
          <div className="count">Watchers: {data.watchers}</div>
          <div className="count">Stargazers: {data.stargazers}</div>
        </div>
      </div>
      <div className="dates">
        <div className="created">
          <h4>Created on: </h4>
          <div className="date-time">
            {data.createdAt.date}, {data.createdAt.time}
          </div>
        </div>
        <div className="last-updated">
          <h4>Last updated: </h4>
          <div className="date-time">
            {data.lastUpdated.date}, {data.lastUpdated.time}
          </div>
        </div>
      </div>
    </div>
  );
};
