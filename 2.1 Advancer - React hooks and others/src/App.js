import React from 'react'
import PropDrilling from "./tutorial/7-prop-drilling/setup/1-prop-drilling";
import ContextAPI from "./tutorial/8-useContext/setup/1-context-api";
import FetchExample from "./tutorial/9-custom-hooks/setup/1-fetch-example";
import PropTypes from "./tutorial/10-prop-types/setup";


function App() {
  return (
    <div className='container'>
      <PropDrilling />
      <hr />
      <br />
        <ContextAPI />
        <hr />
        <br />
        <FetchExample />
        <hr />
        <br />
        <PropTypes />
        <hr />
        <br />
    </div>
  )
}

export default App
