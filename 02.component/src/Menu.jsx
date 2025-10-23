import React from 'react'

const Menu = ({temp, menu, cost}) => {
  console.log(temp, menu, cost)
  return (
    <div>
        {/* <h1>{props.temp} {props.menu}</h1>
        <p>{props.cost}</p>         */}
        <h1>{temp}{menu}</h1>
        <p>{cost}</p>
    </div>

  )
}
export default Menu


