import {useState, useEffect} from 'react'

const ExDiceGame = () => {
    // 1. 버튼 클릭시 주사위 이미지 랜덤하게 변경(둘다)
    // 2. 주사위의 숫자를 비교, 더 큰 Score 값을 +1 증가
    // 3. score 값이 먼저 10에 도달한 결과를 출력
    //    >>"USER 승리" or "Com 승리"
    const [ranNum, setRanNum] = useState(0);  // 랜덤 숫자
    const [randice, setRandice] = useState();  

    const [ranNum2, setRanNum2] = useState(0);  // 랜덤 숫자
    const [randice2, setRandice2] = useState(0);  

    const [result, setResult] = useState(0); // 결과 점수
    const [result2, setResult2] = useState(0); 

    const [done, setDone] = useState('');

    let dice_Array = [
        "./src/img/Dice_1.png",
        "./src/img/Dice_2.png",
        "./src/img/Dice_3.png",
        "./src/img/Dice_4.png",
        "./src/img/Dice_5.png",
        "./src/img/Dice_6.png",
    ]
    let user_score_a = 0
    useEffect(() => {
        if (result === 10) {
            setDone("🎲 User win 🎲")

        };
        if (result2 === 10) {
            setDone("🎲 Com win 🎲")

        };
        }, [result, result2]);
    const btnClick = () =>{
        const random = Math.floor(Math.random() * 3) + 1;
        setRanNum(random);
        console.log(ranNum+1)
        setRandice(ranNum); 

        const random2 = Math.floor(Math.random() * 3) + 1;
        setRanNum2(random2);
        console.log(ranNum2+1)
        setRandice2(ranNum2); 

        let user_score = 0
        

        let com_score = 0

        if(ranNum>ranNum2){
            
            setResult(user_score => user_score+1)
        }
        
        if(ranNum<ranNum2){

            setResult2(com_score => com_score+1)
        }

    }
  return (
    <div>
      <h1>DICE GAME</h1>
      <button onClick={btnClick}>Start</button>

      <div >
        <img src={dice_Array[randice]}></img>
        <h1>User Score : {result}</h1>
      </div>
      <div >
        <img src={dice_Array[randice2]}></img>
        <h1>Com Score : {result2}</h1>
      </div>

      <h1>결과 : {done}</h1>
    </div>
  )
}

export default ExDiceGame