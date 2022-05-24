import React from 'react';
import axios from 'axios';
import getWeatherLocation from './FetchData';
class SearchBar extends React.Component{
    constructor(props){
        super(props)
    } 
    onInputChange(e){
    this.props.inputChange(e);
}
    searchCity(e){
        if(e.key == "Enter"){
        e.preventDefault(); 
        this.props.searchCitySubmit();
            console.log("enter");
    }
    }
    render(){
        const location = this.props.location;
         return(
        <div className="search">
            <input type="text"
            placeholder={location} 
            onChange={(e) => this.onInputChange(e)}
            onKeyPress={(e) => this.searchCity(e)}>
            </input>
      </div> 

        )}
}
export default SearchBar;