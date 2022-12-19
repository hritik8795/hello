import Button from 'react-bootstrap/Button';
import {useNavigate} from "react-router-dom"
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {

    const navigate = useNavigate();
    return (
    <div>
    <h1 className='registration'>Login Form</h1>
    <Form className ="form">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Login
      </Button>
      &nbsp;&nbsp;&nbsp;
      <Button variant="primary" type="submit" onClick={()=>navigate("/register")}>
        Signup
      </Button>

    </Form>
    </div>
  );
}

export default Login;