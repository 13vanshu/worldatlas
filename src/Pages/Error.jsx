import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const error = useRouteError()
    console.log(error);
    
  return (
    <div>
      <h1>Oops! An Error Occured.</h1>
      {error && <p>{error.data}</p>}
    </div>
  )
}

export default Error
