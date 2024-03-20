import React from 'react'

function Button(props) {
    const { name, onClick ,className} = props;
  return (
    <>
    <button onClick={onClick} className={className} type="button">{name}</button>
    </>
  )
}

export default Button