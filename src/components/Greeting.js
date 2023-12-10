import React, { useState } from "react";

const Greeting = () => {
  const [name, setName] = useState("");
  return (
    <div>
      <label htmlFor="inputName">Enter your name:</label>
      <br />
      <input
        type="text"
        id="inputName"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <br />
      <p>{name ? `Hello ${name}!` : ""}</p>
    </div>
  );
};

export default Greeting;
