import axios from "axios";
const getWeatherLocation = (location) => {
  const api = axios.get(`http://api.weatherapi.com/v1/forecast.json?key=5d2a1201898f48528ee85516221503&q=${location}&days=14&aqi=yes&alerts=yes&lang=sr`)
  return api;
}
 
export default getWeatherLocation;
