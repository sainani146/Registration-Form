// Write your JS code here
import './index.css'
import {Component} from 'react'

export default class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    firstnameError: false,
    lastnameError: false,
    isform: true,
  }

  onChangeFirstname = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastname = event => {
    this.setState({lastName: event.target.value})
  }

  blurFirstname = () => {
    const {firstName} = this.state

    if (firstName === '') {
      this.setState({firstnameError: true})
    } else {
      this.setState({firstnameError: false})
    }
  }

  blurLastname = () => {
    const {lastName} = this.state

    if (lastName === '') {
      this.setState({lastnameError: true})
    } else {
      this.setState({lastnameError: false})
    }
  }

  renderFirstname = () => {
    const {firstnameError} = this.state
    const fieldstyle = firstnameError ? 'input error-field' : 'input'

    return (
      <div className="inputfield">
        <label className="title" htmlFor="firstname">
          FIRST NAME
        </label>
        <input
          type="text"
          id="firstname"
          className={fieldstyle}
          placeholder="First name"
          onChange={this.onChangeFirstname}
          onBlur={this.blurFirstname}
        />
      </div>
    )
  }

  renderLastname = () => {
    const {lastnameError} = this.state
    const fieldstyle = lastnameError ? 'input error-field' : 'input'

    return (
      <div className="inputfield">
        <label className="title" htmlFor="lastname">
          LAST NAME
        </label>
        <input
          type="text"
          id="lastname"
          className={fieldstyle}
          placeholder="Last name"
          onChange={this.onChangeLastname}
          onBlur={this.blurLastname}
        />
      </div>
    )
  }

  renderForm = () => {
    const {firstnameError, lastnameError} = this.state

    return (
      <form className="card-container" onSubmit={this.onSubmitForm}>
        {this.renderFirstname()}
        {firstnameError && <p className="error-message">Required</p>}
        {this.renderLastname()}
        {lastnameError && <p className="error-message">Required</p>}
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    )
  }

  onSubmitAnotherResponse = () => {
    this.setState({isform: true, firstName: '', lastName: ''})
  }

  successView = () => (
    <div className="successView">
      <img
        className="success-img"
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
      />
      <p>Submitted Successfully</p>
      <button
        type="button"
        className="success-btn"
        onClick={this.onSubmitAnotherResponse}
      >
        Submit Another Response
      </button>
    </div>
  )

  onSubmitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state

    if (firstName !== '' && lastName !== '') {
      console.log('success')
      this.setState({isform: false})
    } else {
      console.log('not success')
      if (firstName === '') {
        this.setState({firstnameError: true})
      }
      if (lastName === '') {
        this.setState({lastnameError: true})
      }
    }
  }

  render() {
    const {isform} = this.state

    return (
      <div className="main-container">
        <h1>Registration</h1>
        <div>{isform ? this.renderForm() : this.successView()}</div>
      </div>
    )
  }
}
