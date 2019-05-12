import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "../styles/Login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event){
    event.preventDefault();

    if( this.state.username === "shaadi" && this.state.password === "123" )
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
                value={this.state.username}
                onChange={this.handleChange} />
            </FormGroup>
            <br />
            <FormGroup>
            <ControlLabel>Password</ControlLabel>
              <FormControl
                name="password"
                type="password"
                value={this.state.password}
                onChange={this.handleChange} />
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