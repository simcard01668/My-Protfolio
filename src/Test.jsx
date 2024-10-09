import React from "react";
import "./Test.scss";
const Test = () => {
  return import(
    <div className="course">
      <div className="box">Test</div>
    </div>
  );
};

export default Test;
