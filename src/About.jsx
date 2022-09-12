import React, { useState } from "react";
const About = () => {
  const [counter, setcounter] = useState(0);
  const inc = () => {
    setcounter(counter + 1);
  };
  return (
    <>
      <h1>Counter:{counter}</h1>
      <button onClick={inc}>Increment</button>
    </>
  );
};

export default About;
