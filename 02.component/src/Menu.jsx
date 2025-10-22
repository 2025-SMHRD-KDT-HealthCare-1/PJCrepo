import React from 'react'

const Menu = (props, b) => {
  console.log(props, b)
  return (
    <div>
        <h1>{props.menu}</h1>
        <p>{props.cost}</p>        
    </div>

  )
}

export default Menu