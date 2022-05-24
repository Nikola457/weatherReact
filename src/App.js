import './index.css';
import Navbar from './Navbar';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import SearchBar from './SearchBar';
import DisplayCurrentData from './component/DisplayCurrentData';
import Forecast from './component/Forecast';
import getWeatherLocation from './FetchData';
import DayForecast from './component/DayForecast';
import React from 'react';
class App extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
        location:"",
        current:"",
        time:0,
        description:"",
        hourly:[],
        day:{},
        tomorrow: {}
    }
} 
onInputChange(e){
  this.setState({
      location: e.target.value
  });
}
async searchCity(){
    const currentWeather = await getWeatherLocation(this.state.location);
    this.setState({
      current: currentWeather.data.current,
      description: currentWeather.data.current.condition,
      time: currentWeather.data.location,
      hourly: currentWeather.data.forecast.forecastday[0].hour,
      day: currentWeather.data.forecast.forecastday[0].day,
      tomorrow: currentWeather.data.forecast.forecastday[1].day
})
}
  
  render(){  
    const timeOfDay = new Date(1647649800* 1000).getHours();
    return (
      <div className="app">
   <div className="content">
    <SearchBar location={this.state.location} inputChange={(e) =>  this.onInputChange(e)} 
    searchCitySubmit = {() => this.searchCity()
    }
    />
    <DisplayCurrentData currentData = {this.state.current}
    locationData = {this.state.time}
    minMaxTemp = {this.state.hourly}
    currentDescription = {this.state.description}
    days = {this.state.day}
    />
    <Forecast hourly={this.state.hourly}/>
    <div className={(timeOfDay<17) ? "" : "background"}></div>

    <DayForecast tomorrow ={this.state.tomorrow} locationData ={this.state.time} />
   </div>
   </div>
  );
}
}

export default App;