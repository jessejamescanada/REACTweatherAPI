import React, { Component } from 'react'

export default class Forecast extends Component {
  render() {
    return (
      <div className='forecastContainer'>
        <div className="day1Container">
          <h2 className='date'>{this.props.date}</h2>
          <h2 className='desc'>{this.props.description}</h2>
          <img src={`http://openweathermap.org/img/wn/${this.props.icon}@2x.png`} alt={this.props.description}/>
          <h2 className='temp'>Temp: {this.props.temp} °F</h2>
          <h2 className='wind'>Wind: {this.props.wind} MPH</h2>
        </div>
        <div className="day2Container">
        <h2 className='date'>{this.props.date2}</h2>
          <h2 className='desc'>{this.props.description2}</h2>
          <img src={`http://openweathermap.org/img/wn/${this.props.icon2}@2x.png`} alt={this.props.description2}/>
          <h2 className='temp'>Temp: {this.props.temp2} °F</h2>
          <h2 className='wind'>Wind: {this.props.wind2} MPH</h2>
        </div>
        <div className="day3Container">
        <h2 className='date'>{this.props.date3}</h2>
          <h2 className='desc'>{this.props.description3}</h2>
          <img src={`http://openweathermap.org/img/wn/${this.props.icon3}@2x.png`} alt={this.props.description}/>
          <h2 className='temp'>Temp: {this.props.temp3} °F</h2>
          <h2 className='wind'>Wind: {this.props.wind3} MPH</h2>
        </div>
      </div>
    )
  }
}
