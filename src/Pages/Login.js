import React, { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useDispatch} from "react-redux"
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

// Define the Login component
const Login = () => {
  // Add state variables for each input field
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Define the function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create a new user object
    const user = {
      username,
      password,
    };

    if(user.username===""){
      Swal.fire({
        icon:"warning",
        title:"Please enter Username"
      })
    }else if(user.password===""){
      Swal.fire({
        icon:"warning",
        title:"Please enter password"
      })
    }else{
      // Make a POST request to the API
    const response = await fetch('http://localhost:8080/api/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    if (response.status===200) {
      const data = await response.json();
      // alert('Logged in successfully!');
      localStorage.setItem("token",data.result.token)
      localStorage.setItem("user",JSON.stringify(data.result.user))
      dispatch({type:"Login_Success",payload:data.result.user})
      Swal.fire({
        icon:"success",
        title:"Logged in successfully!"
      })
      navigate('/revenue')
    } else {
      Swal.fire({
        icon:"error",
        title:"Username or password is incorrect"
      })
    }
    }
  };

  return (
    <>
      {/* Add a heading for the form */}
      <h2 className="text-center mt-3">Login Form</h2>
      <div className="mt-3">
        {/* Wrap the form in a container to center it */}
        <Container>
          {/* Add a form element and use the handleSubmit function for form submission */}
          <Form onSubmit={handleSubmit}>
            {/* Add a row for the email input */}
            <Row>
              <Col>
                {/* Use a FloatingLabel component to display a label for the input */}
                <FloatingLabel controlId="floatingUsername" label="Username" className="mb-3">
                  {/* Add an input for the email */}
                  <Form.Control type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </FloatingLabel>
              </Col>
            </Row>
            {/* Add a row for the password input */}
            <Row>
              <Col>
                {/* Use a FloatingLabel component to display a label for the input */}
                <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
                  {/* Add an input for the password */}
                  <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </FloatingLabel>
              </Col>
            </Row>
            {/* Add a row for the login button */}
            <Row>
              <Col>
                {/* Add a login button with primary variant and full width */}
                <Button variant="primary" style={{ width: "100%" }} type="submit">
                  Login
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>
    </>
  );
};

// Export the Login component
export default Login;
