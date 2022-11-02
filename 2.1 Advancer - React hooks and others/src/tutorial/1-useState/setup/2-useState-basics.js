import React, { useState } from 'react';

const UseStateBasics = () => {
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler)

  const [title, setTitle] = useState("random title");
  const clickHandler = () => {
      if(title === "random title") {
          setTitle("new title");
      } else {
          setTitle("random title");
      }
  }
  return (
      <div>
          <h2>{title}</h2>
          <button type="button" className="btn" onClick={clickHandler}>Click me</button>
      </div>
  )
};

export default UseStateBasics;
