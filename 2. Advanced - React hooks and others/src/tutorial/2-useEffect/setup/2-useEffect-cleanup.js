import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {

    const [size, setSize] = useState(window.innerWidth);

    const checkSize = () => {
        setSize(window.innerWidth);
    }

    useEffect(() => {
        console.log('useEffect123');
        window.addEventListener('resize',checkSize);
        return () => {
            console.log('cleanup123');
            window.removeEventListener('resize',checkSize);
        }
    }, []);
    console.log('render123');

  return (
      <div>
        <h2>useEffect cleanup</h2>
          <h3>window:</h3>
          <h4>{size} PX</h4>

      </div>
  );
};

export default UseEffectCleanup;
