import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1>Home page 입니다.</h1>        
        <a href='/about'>about 이동</a>
        <br />
        {/* 리액트에서는 a태그보다 Link 컴포넌트 사용 권장 */}
        <Link to="/about">about 이동</Link>
        <Link to="/Join">Join 이동</Link>
        <Link to="/Login">Login 이동</Link>
    </div>
  )
}

export default Home