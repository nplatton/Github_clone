import React from "react";

export default () => {
  const data = {
    name: "test_repo",
    url: "test_repo@test.com",
    isOriginalRepo: true,
    forks: 20,
    watchers: 10,
    stargazers: 3,
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
      <h3>{data.name}</h3>
      <div className="counts">
        <div className="forks">{data.forks}</div>
        <div className="watchers">{data.watchers}</div>
        <div className="stargazers">{data.stargazers}</div>
      </div>
      <div className="dates">
        <div className="created">
          <div className="date"></div>
          <div className="time"></div>
        </div>
        <div className="last-updated">
          <div className="date"></div>
          <div className="time"></div>
        </div>
      </div>
    </div>
  );
};
