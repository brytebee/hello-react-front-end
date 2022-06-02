import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataFromAPI } from "../react/greetings/greetingsReducer";

const Greetings = () => {
  const allGreetings = useSelector((state) => state.greetRed);
  const dispatch = useDispatch();

  const handleRand = () => {};

  useEffect(() => {
    dispatch(getDataFromAPI());
  }, []);

  return (
    <div>
      <h1>Greetings</h1>
      {/* {allGreetings.map((greeting) => {
        return (
          <div key={greeting.id}>
            <h4>{greeting.title}</h4>
            <p>{greeting.message}</p>
          </div>
        );
      })} */}
      <button type="button" onClick="handleRand">
        Say Hi
      </button>
    </div>
  );
};

export default Greetings;
