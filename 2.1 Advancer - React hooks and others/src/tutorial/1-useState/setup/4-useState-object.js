import React, { useState } from 'react';

const UseStateObject = () => {
    const [person, setPerson] = useState({
        name: 'peter',
        age: 24,
        message:'Random message'
    });

    const [name, setName] = useState('peter');
    const [age, setAge] = useState(24);
    const [message, setMessage] = useState('random message');

    console.log(person)
    const changeMessage = () => {
        //setPerson({...person, message: 'hello world'}) // zawsze używamy spread operator (...);
        setMessage('hello world')
    }
  return (
      <div>
          <h2>useState object example</h2>
          <h3>{name}</h3>
          <h3>{age}</h3>
          <h3>{message}</h3>
          <button type="button" className="btn" onClick={changeMessage}>change message</button>

      </div>
  );
};

export default UseStateObject;
