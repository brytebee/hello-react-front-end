import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDataFromAPI,
  getGreetingsFromDatabase,
} from "../react/greetings/greetingsReducer";

const Greetings = () => {
  const data = useSelector((state) => state.greetRed);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataFromAPI());
  }, []);

  return (
    <div>
      <h1>Greetings</h1>
    </div>
  );
};

export default Greetings;
