import React from 'react'

const ErrorModel = (props) => {
  return (
    <div onClick={props.onConfirm}>
        <header>
            <h1>{props.title}</h1>
        </header>
        <div>
            <p>{props.message}</p>
        </div>
        <button onClick={props.onConfirm}>Okay</button>
    </div>
  )
}

export default ErrorModel