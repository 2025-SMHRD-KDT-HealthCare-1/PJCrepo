import React from 'react'

const ExNumber = () => {
    let num = 0

    const plus = () =>{
        num++
    }
  return (
    <div>
        <h1></h1>
        <button onClick={plus}>더하기</button>
    </div>
  )
}

export default ExNumber