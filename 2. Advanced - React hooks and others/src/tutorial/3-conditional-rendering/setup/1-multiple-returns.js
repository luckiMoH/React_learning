import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
  const [isloading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState('default user');

  useEffect(() => {
      fetch(url)
          .then((resp) => {
              if(resp.status >=200 && resp.status < 300) {
                  return resp.json()
              } else {
                  setIsLoading(false);
                  setIsError(true);
                  throw new Error(resp.statusText);
              }
          })
          .then((user) => {
              const {login} = user;
              setUser(login);
              setIsLoading(false);
          })
          .catch((error) => console.log(error));
  },[])


  if (isloading) {
    return (
        <div>
            <h2>Multiple returns</h2>
            <h2>Loading...</h2>
        </div>
    )
  }
  if (isError) {
      return (
          <div>
              <h2>Multiple returns</h2>
              <h2>Error...</h2>
          </div>
        )
  }
  else {
    return (
        <div>
            <h2>Multiple returns</h2>
            <h2>{user}</h2>
        </div>
    );
  }

};

export default MultipleReturns;
