import React, { useEffect } from "react";

import "./style.css";


export default function Result ({result}) {

  useEffect(()=> {
    
  }, [])

  return (
  <>
  <div>
    {result.map(r => (
      <div key={r.name}> 
        <RepoBar data={r}/>
      </div>
      ))
    }
  </div>
  </>
  );
};
