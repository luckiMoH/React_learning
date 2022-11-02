import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false);
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return (
      <>
         <h2>short circuit</h2>
         {/*<h3>{firstValue}</h3>*/}
         {/*<h3>value : {secondValue}</h3>*/}
         <h3>{text || "john doe"}</h3>
          <button className="btn" onClick={() => setIsError(!isError)}>toggle error</button>
          <br />
          {isError && <h3>Error...</h3>}
          {isError ? <p>There is an error...</p> : <p>there is no error</p>}
      </>
  );
};

export default ShortCircuit;
