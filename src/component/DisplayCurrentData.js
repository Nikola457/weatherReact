import React from 'react';
import getWeatherLocation from '../FetchData';

class DisplayCurrentData extends React.Component{
    
        render(){
         
            const monthNames = ["January", "February", "March", "April", "May", "June",
                                "July", "August", "September", "October", "November", "December"];
            const dayNames = ["","Monday","Tuesday", "Wednesday", "Thursday","Friday","Saturday","Sunday"];
            let date = new Date();
            let currTime = date.getHours();
            let currMinutes = date.getMinutes();
            let currDay = dayNames[date.getDay()];
            let currYear = date.getFullYear();
            let currMonth = monthNames[date.getMonth()] + " " + date.getDate();
            if(currTime<10) {
                currTime = "0" + currTime; 
            }
            if(currMinutes<10){
                currMinutes = "0" + currMinutes;
            }
            return(  
                <div className={(currTime<17) ? 'currentWeather' : 'currentWeatherDay'}
                >
                     <div className="country">
                        <h5>{this.props.locationData.name}, {this.props.locationData.country}</h5>  
                        <h5>{currDay}, {currMonth}, {currYear}  {currTime}:{currMinutes} h</h5>
                   </div>
                    <div className={(currTime>-1) ? 'currentTemp' : 'currentTempDay'}>
                        <h1>{this.props.currentData.temp_c}<span>°C</span><br/><span>Max {this.props.days.maxtemp_c} °C| Min {this.props.days.mintemp_c}°C</span></h1> 
                        <img src={this.props.currentDescription.icon}></img>
                        <p className="description">{this.props.currentDescription.text}</p> 
                        
                    </div>
                    <h5 className="sunset"> Sunrise Sunset</h5>

                  <div className="currentInfo">
                  
                  <h5>Brzina vetra: {this.props.currentData.wind_kph} km/h</h5>
                  <h5>Pritisak: {this.props.currentData.pressure_mb}mbar</h5>
                  <h5>Padavina: {this.props.currentData.precip_mm} mm</h5>
                  <h5>Vlaznost: {this.props.currentData.humidity} %</h5>
                  <h5>Oblacnost: {this.props.currentData.cloud}%</h5>
                  <h5>Realfeel: {this.props.currentData.feelslike_c}°C</h5>
                  <h5>Vidljivost: {this.props.currentData.vis_km} km</h5>
                  <h5>UV Indeks: {this.props.currentData.uv} </h5>
                  <h5>Gust: {this.props.currentData.gust_kph} </h5>
                  </div>
                  </div>
              )
        }
}
export default DisplayCurrentData;