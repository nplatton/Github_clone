import React from "react";

import "./style.css";


export default function Result ({result}) {


  const resultRender = result.forEach(repo => {
    <RepoBar data={repo} />
  });


  return (
  <>
  <div>
    {resultRender.map(r => (
      <div key={r.name}> 
        <RepoBar />
      </div>
      ))
    }
  </div>
  </>
  );
};
