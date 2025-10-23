import React, {useState} from 'react'
import Jang from '../img/img1.jpg'
const Ex02 = () => {
    // useState의 초기값은 다양한 데이터 자료형이 가능
    const [ likeEmoji, setLikeEmoji] = useState("♡")
    const [ likeNum, setLikeNum ] = useState(0)

    // 빈 하트 클릭 시, => 채워진 하트로 변경
    // 빈 하트 클릭 시, ==> 숫자 0을 1로 변경
    // 채워진 하트 클릭 시 => 빈 하트로 변경
    // 채워진 하트 클릭 시 => 숫자 1을 0으로 변경
    const handleLike = () =>{
        // 클릭했을 때 비어있는 하트라면 (조건)
        console.log("1")
        if(likeEmoji == '♡'){
            console.log("2")
            setLikeEmoji('♥')
            setLikeNum('1')
        }else{
            setLikeEmoji('♡')
            setLikeNum('0')
        }
    }

  return (
    <div>
        {/* src 폴더 내 접근 */}
        {/* import 이미지변수 form '경로' */}
        <img width='300px' src={Jang}></img>
        {/* 외부주소값 접근 */}
        <img width="300px" src='https://images.khan.co.kr/article/2025/07/15/news-p.v1.20250715.22659c75353043fdbcc4a50b525da268_P1.jpg'></img>
        <br></br>
        {/* public 폴더에 이미지가 있다면
            http://localhost:5173/
            public폴더는 서버와 통신 중 => 이곳에 저장하는 것만으로도 고유한 주소값이 생김 */}
        <img width="300px" src='/img/img2.jpg'></img>
        <br></br>
        <p>
            <span onClick={handleLike}>{likeEmoji}</span>
            <span>{" "} 좋아요 {likeNum}</span>
        </p>

    </div>
  )
}

export default Ex02