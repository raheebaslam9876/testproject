import React from "react";

function Child(props) {
  return (
    <div>
      <button onClick={props.greetHandler}> Greet Child</button>
    </div>
  );
}

export default Child;
