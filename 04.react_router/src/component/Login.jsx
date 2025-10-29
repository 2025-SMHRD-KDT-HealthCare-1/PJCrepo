import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import {useRef, useState} from 'react'

const Login = () => {

  //사용자가 입력한 IDS : smhrd, PW : 123
  //일때만 Home으로 이동
  // 둘중 하나라도 다르다면 '잘못 입력했습니다' 알림 출력

  const nav = useNavigate();
  // const inputIdRef = useRef();
  // const inputPwRef = useRef();
  const [inputPw, setInputPw] = useState('')
  const [inputId, setInputId] = useState('')

  const btnJoin = () => {
    // 사용자가 입력한 ID, PW, NICK 값을 가져와주세요
    // const inputId = inputIdRef.current.value
    // const inputPw = inputPwRef.current.value


    if(inputId == 'smhrd' && inputPw == '123'){
      //Home 페이지 이동
      nav('/Home')
    }
    else{
      alert("아이디 혹은 비밀번호가 틀립니다")
    }
  }

  return (
    <div>
        <h1>절거운 React 수업</h1>

        <p>ID : <input onChange={(e) => setInputId(e.target.value)}/></p>
        <p>PW : <input onChange={(e) => setInputPw(e.target.value)}/></p>
        <br />
        <button onClick={btnJoin} variant="primary">로그인</button>
        {/* <Link to="/Home">
                <button onClick={btnJoin} variant="primary">로그인</button>
        </Link>        */}
    </div>
  )
}

export default Login