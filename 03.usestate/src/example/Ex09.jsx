import {useState} from 'react'
// 회사에서 useRef 사용하면 혼남.. 되도록 useState 사용
const Ex09 = () => {
    // 1. input태그에 적은 내용이 계획추가 버튼 클릭시, 배열에 저장(state)
    // 2. 저장된 배열 state를 map를 통해서 ul에 출력
    // 3. li에 달려있는 삭제 버튼을 클릭했을 때, filter함수를 사용해서
    //    해당 요소만을 지우고, 새롭게 배열을 만들어서 저장(state)
    
    // state 배열에 값 추가하는 방법! ( 스프레드 연산자 사용 )
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const btnClick = () =>{
        // console.log(inputValue)
        setTodos([...todos, inputValue]); 
        setInputValue('');
    }

    // todoList 삭제 함수
    const deleteItem = (deleteindex) => {
        const newList = todos.filter((_, i) => i !== deleteindex);
        setTodos(newList);
    };


    // const [inputText, setInputText] = useState('');
    // setList([...list, "밥 먹기"])
//     const [list, setList] = useState([]);
//     const onChangeInput = (e) => {
//     setInputText(e.target.value);
//   };
//     const btnClick = () =>{
//         setList([...list, inputText]); 
//         setInputText('');
//     }
//     const deleteItem = (index) => {
//         const newList = list.filter((_, i) => i !== index);
//         setList(newList);
//     };
  return (
    <div>
        <h1>2025 올해는 꼭!! 할 수 있다!</h1>
        {/* controlled input으로 useState를  */}
        {/* <input type="text" value={inputText} onChange={onChangeInput}/>
        <button onClick={btnClick}>계획추가</button> */}

        <h1>TodoList</h1>
        <input type="text" 
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}         
            />
            <button onClick={btnClick}>계획추가</button>
        <ul>
            {/* 이곳에 todoList가 li의 형태로 들어간다!! */}
            {
                todos.map((item, index) => (
                <li key={index}>
                    {item}
                    <button onClick={() => deleteItem(index)}>삭제</button>
                </li>
                ))
            }
           
            {/* {list.map((item, index) => (
             <li key={index}>
                {item}
                <button onClick={() => deleteItem(index)}>삭제</button>
            </li>
            ))} */}
        </ul>
        
    </div>
  )
}

export default Ex09