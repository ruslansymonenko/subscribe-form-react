import React from 'react';
import './Form.css'

class Form extends React.Component {
  state = {
    firstName: '',
    email: '',
    isAgreeWithTerms: false
  }

  handleInput = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleCheckbox = (event) => {
    this.setState({isAgreeWithTerms: event.target.checked})
  }

  validateName = () => {
    if (this.state.firstName.length < 5) {
      alert('Please, enter longer name');
    }
  }

  validateMail = () => {
    if(!(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.email))
    ) {
      alert('Your email is not valid!');
    };
  }

  handleSubmit = () => {
    const isValidMail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.email);
    const isValidName = this.state.firstName.length < 5 ? false : true;
    const isValidCheckbox = this.state.isAgreeWithTerms;

    if (isValidMail && isValidName && isValidCheckbox) {
      alert('Your data has been sent');
    } else {
      alert('Please, put correct data');
    }
  }

  render() {
    const {firstName, email} = this.state

    return <div className='subscribeForm'>
      <input 
        className='input' 
        type="text" 
        placeholder='name'
        name='firstName'
        value={firstName}
        onChange={this.handleInput}
        onBlur={this.validateName}
        />
      <input 
        className='input' 
        type="text" 
        placeholder='email'
        name='email'
        value={email}
        onChange={this.handleInput}
        onBlur={this.validateMail}
        />
        <div className='ckeckBoxContainer'>
          <input 
          className='inputCheckbox' 
          type="checkbox" 
          onChange={this.handleCheckbox}
          />
          <label>I agree with terms and conditions</label>
        </div>
      <button 
        className='btn'
        onClick={this.handleSubmit}
        >
          Send
      </button>
    </div>
  }
}

export {Form}