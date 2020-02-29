import React, { Component } from 'react'

export default class Weather extends Component {
  render() {
    return (
      <div className="weatherContainer">
        <h1 className='city'>{this.props.everything.name}</h1>
        <h3 className='conditions'>Current Conditions: {this.props.description}</h3>
        <img src={`http://openweathermap.org/img/wn/${this.props.icon}@2x.png`}alt={this.props.description}/>
        <h3 className="temp">Temperature: {this.props.temp} °F</h3>
        <div className="weatherConditions">
          <h4 className='weatherListItem'>Feels Like: {this.props.feelsLike} °F</h4>
          <h4 className='weatherListItem'>Humidity: {this.props.humidity} %</h4>
          <h4 className='weatherListItem'>Wind: {this.props.wind} MPH</h4>
        </div>
      </div>
    )
  }
}
