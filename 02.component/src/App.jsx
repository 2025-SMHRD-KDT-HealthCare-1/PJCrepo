import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Menu from './Menu'
import Member from './Member'

function App() {
  const [count, setCount] = useState(0)

  let temp = 'ice'
  let mudo = '무한도전'

  // 객체 비구조화 할당
  let student = {
    name : '박종찬',
    age : '20',
    sub : 'web'
  }

  console.log(student)

  let {name, age, sub} = student
  console.log(name,age,sub)

  return (
    <>
      <Menu temp={temp} menu="아메리카노" cost="4100"></Menu>      
      <Menu temp={temp} menu="카페라떼" cost="4600"></Menu>
      <Menu temp={temp} menu="에이드" cost="5000"></Menu>

      <hr></hr>
      <Member temp={mudo} men="유재석"></Member>
      <Member temp={mudo} men="박명수"></Member>
      <Member temp={mudo} men="정준하"></Member>
      <Member temp={mudo} men="정형돈"></Member>
    </>
  )
}

export default App
