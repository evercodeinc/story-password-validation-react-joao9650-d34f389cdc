import React, { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import "./styles.css";

const initialState = {
  username: "",
  password: ""
};

export const validatePassword = (password) => {
  // TODO
  return false;
};

const Login = () => {
  const [state, setState] = useState(initialState);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => {
      return {
        ...prevState,
        [name]: value
      };
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");
    const allFieldsEntered = Object.keys(state).every(
      (key) => state[key].trim() !== ""
    );

    if (allFieldsEntered) {

      if (validatePassword(state["password"])) {
        setSuccessMsg("You have successfully logged in");
      } else {
        setErrorMsg("Your password must have 6 numerical characters.");
      }
    } else {
      setErrorMsg("All the fields are required.");
    }
  };

  return (
    <div className="registration">
      <div className="container">
        <h2 className="title">Evercode Login</h2>
        <Form onSubmit={handleFormSubmit}>
          {successMsg && <Alert variant="success">{successMsg}</Alert>}
          {errorMsg && <Alert variant="danger">{errorMsg}</Alert>}
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your username"
              name="username"
              value={state.username}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              name="password"
              value={state.password}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Button variant="secondary" type="submit">
              Login
            </Button>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default Login;
