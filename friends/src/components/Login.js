import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { login } from "../actions/actions";

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  inputHandler = event => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [event.target.name]: event.target.value
      }
    });
  };

  submitHandler = event => {
    event.preventDefault();
    this.props
      .login(this.state.credentials)
      .then(() => this.props.history.push("/protected"));
    this.setState({
      credentials: {
        ...this.state.credentials,
        username: "",
        password: ""
      }
    });
  };

  render() {
    return (
      <FormStyle>
        <form onSubmit={this.submitHandler}>
          <h2>Username</h2>
          <input
            type="text"
            placeholder="Enter your username..."
            name="username"
            value={this.state.credentials.username}
            onChange={this.inputHandler}
          />
          <h2>Password</h2>
          <input
            type="password"
            placeholder="Enter your password..."
            name="password"
            value={this.state.credentials.password}
            onChange={this.inputHandler}
          />
          <br />
          <button type="submit">Login</button>
        </form>
      </FormStyle>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggingIn: state.loggingIn,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { login }
)(Login);

const FormStyle = styled.div`
  border: 1px solid black;
  width: 400px;
  margin: 10% auto;
  padding-bottom: 30px;
  background-image: linear-gradient(
    to right,
    rgba(255, 0, 0, 0),
    rgba(255, 0, 0, 1)
  );
  button {
    margin-top: 15px;
    height: 40px;
    width: 100px;
  }
`;
