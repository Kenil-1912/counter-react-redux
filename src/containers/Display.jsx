import React from "react";
import { useSelector } from "react-redux";

const Display = () => {
  const counter = useSelector((store) => store.counter);

  return (
    <div>
      <p className="lead mb-4">value of counter is:{counter}</p>
    </div>
  );
};

export default Display;
