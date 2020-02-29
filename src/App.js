import React, { Component } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import Weather from "./components/Weather";
import Forecast from './components/Forecast'

export default class App extends Component {
  state = {
    apiKey: "f54198238601ec13dd56118f61a7a39b",
    everything: "",
    location: "",
    description: "",
    temp: "",
    feelsLike: "",
    humidity: "",
    wind: "",
    icon: "",
    forecastDate: '',
    forecastDesc: '',
    forecastTemp: '',
    forecastIcon: '',
    forecastWind: '',
    forecastDate2: '',
    forecastDesc2: '',
    forecastTemp2: '',
    forecastIcon2: '',
    forecastWind2: '',
    forecastDate3: '',
    forecastDesc3: '',
    forecastTemp3: '',
    forecastIcon3: '',
    forecastWind3: '',
  };

   componentDidMount = (city=localStorage.getItem('city')) => {
     fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.state.apiKey}&units=imperial`
    )
      .then(response => response.json())
      .then(data =>
        this.setState({
          everything: data,
          location: data.name,
          description: data.weather[0].description,
          humidity: data.main.humidity,
          feelsLike: Math.round(data.main.feels_like),
          temp: Math.round(data.main.temp),
          wind: Math.round(data.wind.speed),
          icon: data.weather[0].icon
        })
      )
      .catch(err => this.setState({  everything: "",
      location: "",
      description: "",
      temp: "",
      feelsLike: "",
      humidity: "",
      wind: "",
      icon: "" }))

      fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${this.state.apiKey}&cnt=25&units=imperial`
      ).then(response => response.json())
      .then(data =>
        
        this.setState({
          forecastDate: new Date(data.list[4].dt*1000).toDateString(),
          forecastDesc: data.list[4].weather[0].description,
          forecastTemp: Math.round(data.list[4].main.temp),
          forecastWind: Math.round(data.list[4].wind.speed),
          forecastIcon: data.list[4].weather[0].icon,
          forecastDate2: new Date(data.list[12].dt*1000).toDateString(),
          forecastDesc2: data.list[4].weather[0].description,
          forecastTemp2: Math.round(data.list[12].main.temp),
          forecastWind2: Math.round(data.list[12].wind.speed),
          forecastIcon2: data.list[12].weather[0].icon,
          forecastDate3: new Date(data.list[20].dt*1000).toDateString(),
          forecastDesc3: data.list[20].weather[0].description,
          forecastTemp3: Math.round(data.list[20].main.temp),
          forecastWind3: Math.round(data.list[20].wind.speed),
          forecastIcon3: data.list[20].weather[0].icon
        })
        )
        .catch(err => console.log(err))
  }

  
  render() {
    return (
      <div className="container">
        <SearchBar newSubmit={this.componentDidMount} />
        <Weather
          everything={this.state.everything}
          description={this.state.description}
          feelsLike={this.state.feelsLike}
          temp={this.state.temp}
          humidity={this.state.humidity}
          wind={this.state.wind}
          icon={this.state.icon}
        />
        <Forecast 
        date={this.state.forecastDate}
        description={this.state.forecastDesc}
        icon={this.state.forecastIcon}
        temp={this.state.forecastTemp}
        wind={this.state.forecastWind}
        date2={this.state.forecastDate2}
        description2={this.state.forecastDesc2}
        icon2={this.state.forecastIcon2}
        temp2={this.state.forecastTemp2}
        wind2={this.state.forecastWind2}
        date3={this.state.forecastDate3}
        description3={this.state.forecastDesc3}
        icon3={this.state.forecastIcon3}
        temp3={this.state.forecastTemp3}
        wind3={this.state.forecastWind3}
        />
      </div>
    );
  }
}
