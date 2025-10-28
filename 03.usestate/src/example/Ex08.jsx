import React from 'react'
import pic from '../img/pika.jpg'
import { useState } from 'react'

const Ex08 = () => {
    let imgArray = ['./src/img/pika.jpg', './src/img/front_jang.jpg', './src/img/jangwonyoung.jpg']
    const [pos, setPos] = useState(0)

    const chImg = () =>{
        if(pos==2){
            setPos(0)
        }
        else{
            setPos(pos+1)
        }
    }
    const reImg = () =>{
        if(pos==1){
            setPos(0)
        }
        else if(pos==0){
            setPos(pos+2)
        }
        else if(pos==2){
            setPos(pos-1)
        }
    }
  return (
    <div>
        <img src={imgArray[pos]} height = '350px' width = '300px'></img>
        <button onClick={reImg}>이전</button>
        <button onClick={chImg}>다음</button>
    </div>
  )
}

export default Ex08

// import React from 'react'
// import pic from '../img/pika.jpg'
// import { useState } from 'react'

// const Ex08 = () => {
//     const [mySrc, setSrc] = useState('./src/img/pika.jpg')
//     const [myfrontSrc, setfrontSrc] = useState('./src/img/front_jang.jpg')
//     const [myjangSrc, setjangSrc] = useState('./src/img/jangwonyoung.jpg')

//     const chImg = () =>{
//         if(mySrc == './src/img/pika.jpg'){
//             console.log("1")
//             setSrc('./src/img/front_jang.jpg')
//         }
//         else if(mySrc == './src/img/front_jang.jpg'){
//             setSrc('./src/img/jangwonyoung.jpg')
//         }
//         else if(mySrc){
//             setSrc('./src/img/pika.jpg')
//         }
//     }
//     const reImg = () =>{
//         if(mySrc == './src/img/pika.jpg'){
//             console.log("1")
//             setSrc('./src/img/jangwonyoung.jpg')
//         }
//         else if(mySrc == './src/img/jangwonyoung.jpg'){
//             setSrc('./src/img/front_jang.jpg')
//         }
//         else if(mySrc){
//             setSrc('./src/img/pika.jpg')
//         }
//     }
//   return (
//     <div>
//         <img src={mySrc} height = '350px' width = '300px'></img>
//         <button onClick={reImg}>이전</button>
//         <button onClick={chImg}>다음</button>
//     </div>
//   )
// }

// export default Ex08

