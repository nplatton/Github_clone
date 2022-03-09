import React from "react";

import "./style.css";

export default () => {
  const data = {
    name: "test_repository",
    url: "test_repo@test.com",
    isOriginalRepo: true,
    forks: 69,
    watchers: 6,
    stargazers: 9,
    createdAt: {
      date: "2022-01-23",
      time: "12:23:40",
    },
    lastUpdated: {
      date: "2022-01-25",
      time: "09:40:02",
    },
    language: "JavaScript",
  };

  return (
    <div className="repo-bar">
      <div className="left-side">
        <h3>{data.name}</h3>
        <div className="counts">
          <div className="forks">Forks: {data.forks}</div>
          <div className="watchers">Watchers: {data.watchers}</div>
          <div className="stargazers">Stargazers: {data.stargazers}</div>
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
