import React, {useState} from 'react'

const Ex03 = () => {
    // 1. 버튼 클릭시 내가 선택 숫자를 출력
    // 2. 버튼 클릭시 1~3사이 랜덤수 출력
    // 3. 사용자가 클릭한 숫자와 랜덤수를 비교 후 결과 출력
    const [likeNum, setLikeNum] = useState(0); // 사용자가 선택한 숫자
    const [ranNum, setRanNum] = useState(0);  // 랜덤 숫자
    const [result, setResult] = useState(''); // 결과 문자열

    
    const handleClick = (num) => {
        setLikeNum(num); // 사용자가 누른 숫자 저장

        // 1~3 랜덤 숫자 생성
        const random = Math.floor(Math.random() * 3) + 1;
        setRanNum(random);

        // 결과 비교
        if (num === random) {
          setResult('정답입니다!');
        } else {
          setResult('틀렸어요');
        }
     };
  return (
    <div>
      <button onClick={() => handleClick(1)}>1</button>
      <button onClick={() => handleClick(2)}>2</button>
      <button onClick={() => handleClick(3)}>3</button>

      <div>
        <p>내가 입력한 숫자 : {likeNum}</p>
        <p>컴퓨터 랜덤 숫자 : {ranNum}</p>
        <p>결과 : {result}</p>
      </div>
    </div>
  )
}

export default Ex03