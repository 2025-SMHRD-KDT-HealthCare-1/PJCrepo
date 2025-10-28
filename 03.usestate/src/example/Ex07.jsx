import {useState, useRef, useEffect} from 'react'

const Ex07 = () => {

  const [ranNum, setRanNum] = useState(parseInt(Math.random()*50+1));  // 랜덤 숫자
  const [result, setResult] = useState(''); // 결과 문자열
  const [chance, setChance] = useState(10); // 결과 문자열
  const inputRef = useRef();
  
      
  const btnClick = () => {
      
      let text = inputRef.current.value 
      // 1~3 랜덤 숫자 생성

      setChance(chance => chance-1)
      console.log("랜덤"+ranNum)
      // 결과 비교
      if (text == ranNum) {
        setResult('정답입니다!');
      } else if(text < ranNum){
        setResult('업');
      } else if(text > ranNum){
        setResult('다운');
      }
    }

  useEffect(() => {          
    console.log(chance)
    if (chance === 0) {
      console.log(chance)
        alert("기회 다씀!")            
    };          
  }, [chance]);

  return (
    <div>
        <h1>1~50사이 랜덤수 맞추기</h1>
        <p>기회 : {chance} </p>
        <input ref={inputRef}></input>
        <button onClick={btnClick}>추측</button>
        <p>Hint : {result} </p>
    </div>
  )
}

export default Ex07