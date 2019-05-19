import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { connect } from 'react-redux';
import { setUsername, setPassword } from '../actions/loginActions.js';
import "../styles/Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateForm() {
    return this.props.username.length > 0 && this.props.password.length > 0;
  }

  handleUsernameChange(event){
    this.props.setUsername( event.target.value );
  }

  handlePasswordChange(event){
    this.props.setPassword( event.target.value );
  }

  handleSubmit(event){
    event.preventDefault();

    if( this.props.username === "shaadi" && this.props.password === "123" )
        this.props.history.push('/slides');
    else
        alert("Incorrect UserName/Password. Please try again.");
  }

  render() {
    return (
    <div className="Login">
        <h2>Please Login</h2>
        <br />
        <form onSubmit={this.handleSubmit}>
            <FormGroup>
            <ControlLabel>UserName</ControlLabel>
              <FormControl
                name="username"
                type="text"
                value={this.props.username}
                onChange={this.handleUsernameChange} />
            </FormGroup>
            <br />
            <FormGroup>
            <ControlLabel>Password</ControlLabel>
              <FormControl
                name="password"
                type="password"
                value={this.props.password}
                onChange={this.handlePasswordChange} />
            </FormGroup>
            <br />
            <FormGroup>
              <Button
                variant="primary"
                name="submit-form"
                type="submit"
                bsSize="lg"
                disabled={!this.validateForm()}
              >
              <b>Login</b>
              </Button>
            </FormGroup>
        </form>
    </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    username: state.loginDetails.username,
    password: state.loginDetails.password
  };
}

const mapDispatchToProps = {
  setUsername,
  setPassword
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);