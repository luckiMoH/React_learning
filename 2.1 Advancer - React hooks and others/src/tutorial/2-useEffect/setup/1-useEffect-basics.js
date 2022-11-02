import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
     const [value,setValue] = useState(0);

     useEffect(() => {
      console.log('useeffect');
      if(value > 0) {
          document.title = `New messages(${value})`
      }
     }, [value])


  return (
      <div>
        <h2>useEffect Basics</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={() => setValue(value+1)}>Click me to change the page title</button>

      </div>
  );
};

export default UseEffectBasics;
