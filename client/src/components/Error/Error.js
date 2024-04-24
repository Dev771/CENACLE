import React from 'react'

import "./style.css";

const Error = ({ message, is_Success }) => {
  return (
    <div className='errorMessage' style={{ background: is_Success ? 'Green' : 'red' }} >{message}</div>
  )
}

export default Error