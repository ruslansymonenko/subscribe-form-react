import React from 'react';
import './Form.css'

class Form extends React.Component {
  state = {
    firstName: ''
  }

  handleInput = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    const {firstName} = this.state

    return <div className='subscribeForm'>
      <input 
        className='input' 
        type="text" 
        placeholder='name'
        name='firstName'
        value={firstName}
        onChange={this.handleInput}
        />
      <input 
        className='input' 
        type="text" 
        placeholder='email'
        />
      <input 
        className='inputCheckbox' 
        type="checkbox" />
      <button 
        className='btn'>
          Send
      </button>
    </div>
  }
}

export {Form}