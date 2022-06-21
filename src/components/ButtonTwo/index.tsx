import React from 'react'
import { IButtonProps } from '../../types'

/* The reason that ButtonTwo component exists in this mini-project is to show that it's another instance of ButtonWrapper; therefore,
ButtonOne and Button two have their own state independnt of each other. */

const ButtonTwo = (props: IButtonProps) => {
  return (
        <button onClick={props.incrementCount}>
            {props?.count}
        </button>
  )
}

export default ButtonTwo
