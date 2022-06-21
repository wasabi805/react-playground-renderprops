import React from 'react'
interface IButtonProps{
    incrementCount?: ()=>void
    count?: number
}
const ButtonOne = (props: IButtonProps) => {
  return (
        <button onClick={props.incrementCount}>
            {props?.count}
        </button>
  )
}

export default ButtonOne
