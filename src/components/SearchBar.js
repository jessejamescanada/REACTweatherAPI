import React, { Component } from 'react'

export default class SearchBar extends Component {
  state = {
    city: '',
    errormessage: ''
  }

  onFormSubmit = e => {
    let err = ''
    let city = ''
    e.preventDefault();
    if(this.state.city === ''){
      err = <strong>Error - Please try again</strong> 
      this.setState({errormessage: err})
      // return false;
    }
    
    city = localStorage.setItem('city', this.state.city)
    this.props.newSubmit(this.state.city)
    console.log(this.state.city);
    this.setState({city: ''})
    setTimeout(() => {
      this.setState({errormessage: ''})
      err = ''
    }, 3000);
    
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
          <h3 className='err'>{this.state.errormessage}</h3>
        </form>
      </div>
    )
  }
}
