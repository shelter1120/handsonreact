import React from 'react'
import classes from './Button.css'


const Button = (props) => {
  return (
    <button 
    className={classes.button}
     type='button'
     onClick={props.onHit}>
    {props.children}
    </button>
  )
}

export default Button
