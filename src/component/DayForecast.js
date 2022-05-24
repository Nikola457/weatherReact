import React from 'react';
class DayForecast  extends React.Component{
    render(){
        const tomorrow = this.props.tomorrow;
        console.log("Tomorrow " + tomorrow.maxtemp_c);
        const hours = this.props.locationData.localtime_epoch;
        const actualDate = new Date(hours*1000).getHours();
        return(
            <div className={(actualDate<17) ? "forecast-day" : "forecast-day-time"}><h2>Tomorrow Weather </h2><br/>
           <h1>{console.log(hours)}{tomorrow.avgtemp_c} <span>°C</span></h1> 
            Max. {tomorrow.maxtemp_c} °C | Min. {tomorrow.mintemp_c} °C  
            <br/><span className="details">Rain: {tomorrow.daily_chance_of_rain} %
            Snow: {tomorrow.daily_chance_of_snow} % 
            Humidity: {tomorrow.avghumidity} %
            Wind: {tomorrow.maxwind_kph} km/h
            UV Index: {tomorrow.uv}</span>
                </div>
        )
    }
}
export default DayForecast;