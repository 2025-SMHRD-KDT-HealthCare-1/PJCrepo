import React from 'react'

const Member = (props) => {
  console.log(props)

    let boxStyle = {
        backgroundColor : 'whitesmoke',
        border : '1px solid black',
        padding : '30px',
        borderRadius : '10px',
        textAlign : 'center',
        marginTop : '10px',
        color : 'black',
        width : '500px'
    }

  return (
    <div>
        <div style={boxStyle}>
        {props.temp}{" "}{props.men} 
        </div>
    </div>
  )
}

export default Member