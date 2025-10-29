import React, { useEffect } from 'react'
import '../App.css'
import axios from 'axios'

const Ex13 = () => {
    const [weatherList, setMovieList] = useState([])
    /* 
        공공날씨 데이터를 가져와서 도시별로 날씨 정보를 화면에 띄워보자! 
        - 날씨정보 : openweathermap.org
        - 첫 화면에는 광주의 날씨를 띄운다!
        - 3개의 버튼에 도시를 지정해서 각 버튼을 클릭하면 각 도시의 날씨를 띄운다!  
        
        - handleCity : 도시를 변경해주는 함수(버튼 onClick)

        state 변수 : temp, weather, city

        1. 각각의 도시 버튼을 클릭했을 경우, 각 도시의 날씨 정보를 다시 불러와서
        화면에 temp(온도), weather(날씨)를 띄워준다
        2. temp는 main.temp로 접근, -273도를 해준다
        3. weather는 weather[0].main으로 접근해서 그대로 출력!
    */
    useEffect(() => {
        const url = 'https://api.openweathermap.org/data/2.5/weather';
        let city = "gwangju";
        const key = "6d603d4913e414f5bf54fb5882b0b7b9";

        const Osaka = buttonOsaka(() => {
            city = "osaka";
        });
        const Paris = buttonParis(() => {
            city = "paris";
        });
        const London = buttonLondon(() => {
            city = "london";
        });
        
        
        axios.get(url, {
            params : {
                q : city,
                appid : key
            }        
        }).then(res => {
            console.log(res.data)
            setMovieList(res.data.)
        }).catch((err) =>console.error(err));
        
    },[])
  return (
    <div className='weather-container'>
        <div className='weather-item'>
            <h1>날씨</h1>
            <div className='weather-data'></div>
            {weatherList.map((item, index) =>(
                <tr key={index}>
                    <h3>{item.city}</h3>
                    <h1>{item.temp}℃</h1>
                    <h4>{item.weather}</h4>
                </tr>
            ))}
            <div className='button-wrapper'>
                <button onClick={buttonOsaka}>Osaka</button>
                <button onClick={buttonParis}>Paris</button>
                <button onClick={buttonLondon}>London</button>

        </div>
        </div>

    </div>
  )
}

export default Ex13