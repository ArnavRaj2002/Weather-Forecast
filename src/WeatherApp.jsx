import SearchBox from "./SearchBox"; 
import InfoBox from "./InfoBox";
import {useState} from "react";
 import "./WeatherApp.css"

export default function WeatherApp(){
   const [weatherInfo,setWeatherInfo]=useState({
    
        city:"Delhi",
        feelsLike:24.84,
        temp:25.05,
        tempMin:25.05,
        tempMax:25.05,
        humidity:47,
        weather:"haze",
      
    });

let updateInfo=(newInfo)=>{
    setWeatherInfo(newInfo);
};

    return(
        <div style={{textAlign:"center"}}>
           <h2 className="head">Weather App by  ARNAV</h2>
            <br></br>   <br></br>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}
