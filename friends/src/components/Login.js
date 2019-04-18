import React from "react";
import styled from "styled-components";

export default class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  inputHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <FormStyle>
        <form>
          <h2>Username</h2>
          <input
            placeholder="Enter your username..."
            name="username"
            value={this.state.username}
          />
          <h2>Password</h2>
          <input
            placeholder="Enter your password..."
            name="password"
            value={this.state.password}
          />
        </form>
      </FormStyle>
    );
  }
}

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
`;
