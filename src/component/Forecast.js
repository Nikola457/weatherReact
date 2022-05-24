import React from 'react';
class Forecast extends React.Component{
    render(){
        const currTime = new Date().getHours();
      const forecast =  this.props.hourly.map((data, i) => {
            const key = `forecast-item_${i}`;
            let hour = new Date(data.time_epoch* 1000).getHours();
            i = new Date().getHours();
            console.log(i); 
            if(hour > 24) {
                hour = 0;
            }
            if(hour > i) {    
        return ( 
             <div className="forecast-item" key={hour}> 
                 <p>{hour}:00h</p>            
                 <p>{data.temp_c}°C</p>
                 <p>{data.condition.text}</p>
                 <img src={data.condition.icon}></img>
            </div>
        )
    }
        })
        return <div className={(currTime>23) ? 'forecast' : 'forecastDayTime'}><h2>Hourly Forecast</h2>{forecast}</div>
    }
}
 
export default Forecast;