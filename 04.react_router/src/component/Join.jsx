import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
//useNavigate :  주소값을 바꿔서 다른 컴포넌트를 띄울 수 있는 기능

import {useRef, useState} from 'react'

const Join = () => {

  //nav : 주소값을 바꿀 수 있는 변수로 사용 가능
  const nav = useNavigate();

  const inputIdRef = useRef();
  const [inputPw, setInputPw] = useState('')
  const [inputNick, setInputNick] = useState('')

  // ID, PW, NIC 값을 전부 입력했을때만 페이지 이동 하고싶어요
  const btnJoin = () => {
    // 사용자가 입력한 ID, PW, NICK 값을 가져와주세요
    const inputId = inputIdRef.current.value


    if(inputId!='' && inputPw!='' && inputNick!=''){
      //Login 페이지 이동
      nav('/Login')
    }
    else{
      alert("빠진 값이 있습니다")
    }
  }
  return (
    <div>
        <h1>절거운 React 수업</h1>
        <h1>회원가입 페이지 입니다</h1>  
        <p>ID : <input ref={inputIdRef}/></p>
        {/* 
          e : 이벤트 객체
          --> 이벤트에 따른 모든 정보가 담겨있다(어떤태그로 발생됬는지?, 어떤 이벤트로 발생 됬는지?)
          e.target : 이벤트를 발생시킨 주체(태그)
        */}
        <p>PW : <input onChange={(e) => setInputPw(e.target.value)}/></p>
        <p>NICK : <input onChange={(e) => setInputNick(e.target.value)}/></p>   
        <br></br>
        <button onClick={btnJoin}>JOIN</button>
        {/* <Link to="/Login">
        <button>JOIN</button>
        </Link>  
        <button>초기화</button> */}
    </div>

  )
}

export default Join