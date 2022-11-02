import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
  const [loading, setLoading] = useState(true);
  const clickHandler = () => {
      if (loading === true) {
          setLoading(false);
      } else {
          setLoading(true);
      }
  }


  if (loading) {
    return (
        <div>
          <h2>Loading...</h2>
          <button className="btn" onClick={clickHandler}>Click to proceed</button>
        </div>
    )
  } else {
    return (
        <div>
          <h2>multiple returns</h2>
          <button className="btn" onClick={clickHandler}>Click to proceed</button>
        </div>
    );
  }

};

export default MultipleReturns;
