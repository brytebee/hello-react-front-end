import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataFromAPI } from "../react/greetings/greetingsReducer";

const Greetings = () => {
  const allGreetings = useSelector((state) => state.greetRed);
  const dispatch = useDispatch();
  const [message, setMessage] = useState([
    {
      id: 5,
      title: "English",
      message: "Good day",
    },
  ]);

  const handleRand = () => {
    const newMessage = allGreetings[~~(allGreetings.length * Math.random())];
    setMessage([newMessage]);
  };

  useEffect(() => {
    dispatch(getDataFromAPI());
  }, []);

  return (
    <div>
      <h1>Greetings</h1>
      {message.map((greeting) => {
        return (
          <div key={greeting.id}>
            <h4>{greeting.title}</h4>
            <p>{greeting.message}</p>
          </div>
        );
      })}
      <button type="button" onClick={handleRand}>
        Say Hi
      </button>
    </div>
  );
};

export default Greetings;
