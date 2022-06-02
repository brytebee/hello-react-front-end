import React from "react";
import { useSelector } from "react-redux";

const Greetings = () => {
  const data = useSelector((store) => store.greetRed);
  console.log(data);
  return (
    <div>
      <h1>Greetings</h1>
    </div>
  );
};

export default Greetings;
