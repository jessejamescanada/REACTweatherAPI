import React, { Component } from 'react'

export default class SearchBar extends Component {
  state = {
    city: ''
  }

  onFormSubmit = e => {
    e.preventDefault();
    if(this.state.city === ''){
      return false;
    }
    if(e.key === 'Enter'){
      e.target.blur()
    }
    localStorage.setItem('city', this.state.city)
    this.props.newSubmit(this.state.city)
    console.log(this.state.city);
    this.setState({city: ''})
  }


  render() {
    return (
      <div className='formContainer'>
        <form className='form' onSubmit={this.onFormSubmit}>
          <div>
            <input type="text"
            value={this.state.city}
            onChange={e => this.setState({city: e.target.value})}
            placeholder="Enter a city..."/>
          </div>
        </form>
      </div>
    )
  }
}
