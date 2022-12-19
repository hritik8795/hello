import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value,
    });
  };
  const register = () => {
    const { name, email, password, confirmPassword } = user;
    if (name && email && password && password === confirmPassword) {
      axios.post("http://localhost:5000/user/signup", user).then((res) => {
        console.log(res.data.message);
        alert(res.data.message);
        navigate("/login");
      });
      // alert("mujhe mt dekh nhi dungi aayush ki maal hoon")
    } else {
      alert("invalid input");
    }
  };

  return (
    <div>
      <h1 className="registration">Signup Form</h1>
      <Form className="form">
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            name="name"
            value={user.name}
            type="text"
            placeholder="name"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            value={user.email}
            type="email"
            placeholder="Enter email"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            value={user.password}
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasiccPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            name="confirmPassword"
            value={user.confirmPassword}
            type="password"
            placeholder=" confirm Password"
            onChange={handleChange}
          />
        </Form.Group>
        <Button onClick={register} variant="primary" type="submit">
          Signup
        </Button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Button
          variant="primary"
          type="submit"
          onClick={() => navigate("/login")}
        >
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Signup;
