import React, { Component } from "react";

export default class Modal extends Component {
  state = {
    city: "",
    errormessage: ""
  };

  onFormSubmit = e => {
    const modal = document.querySelector(".modal");
    let err = "";
    let city = "";
    e.preventDefault();
    if (this.state.city === "") {
      err = <strong>Error - Please try again</strong>;
      this.setState({ errormessage: err });
      localStorage.clear();
      setTimeout(() => {
        this.setState({ errormessage: "" });
        err = "";
      }, 3000);
      // return false;
    } else if (this.state.city !== null) {
      city = localStorage.setItem("city", this.state.city);
      this.props.newSubmit(this.state.city);
      modal.style.display = "none";
      this.setState({ city: "" });
    }
  };

  showModal = () => {
    const modal = document.querySelector(".modal");
    modal.style.display = "block";
  };

  closeModal = e => {
    const modal = document.querySelector('.modal')
    if(e.target === modal){
      modal.style.display = 'none'
    }
  }

  componentDidMount() {
    window.addEventListener('click', this.closeModal)
  }
  render() {
    return (
      <div>
        <div className="modal">
          <div className="modal-content">
            <div className="formContainer">
              <form className="form" onSubmit={this.onFormSubmit}>
                <div>
                  <input
                    type="text"
                    value={this.state.city}
                    onChange={e => this.setState({ city: e.target.value })}
                    placeholder="Enter a city..."
                  />
                </div>
                <h3 className="err">{this.state.errormessage}</h3>
                <button className="btnModal">Change City</button>
              </form>
            </div>
          </div>
        </div>
        <button onClick={this.showModal} className='btnShowModal'>Change City</button>
      </div>
    );
  }
}
