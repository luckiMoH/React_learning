import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';

  return (
      <>
        <h2>short circuit</h2>
        {/*<h3>{firstValue}</h3>*/}
        {/*<h3>value : {secondValue}</h3>*/}
        <h3>{text || "john doe"}</h3>
        {text && <h3>hello world</h3>}
        {!text && <h3>hello world</h3>}
      </>
  );
};

export default ShortCircuit;
