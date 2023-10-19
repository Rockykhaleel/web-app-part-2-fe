import React, { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

// Define the Register component
const Register = () => {
  const navigate = useNavigate();
  // Define state variables for each input
  const [name, setName] = useState("");
  const [username, setUname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Define the function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Define the data to send in the request body
    const data = { name, username, email, password };

    if(data.name===""){
      Swal.fire({
        icon:"warning",
        title:"Please enter Name"
      })
    }else if(data.username===""){
      Swal.fire({
        icon:"warning",
        title:"Please enter Username"
      })
    }else if(data.password===""){
      Swal.fire({
        icon:"warning",
        title:"Please enter Password"
      })
    }else if(data.email===""){
      Swal.fire({
        icon:"warning",
        title:"Please enter Email"
      })
    }else{
      // Send a POST request to the API
    const response = await fetch("http://localhost:8080/api/user/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    // Check if the request was successful
    if (response.status===201) {
      Swal.fire({
        icon:"success",
        title:"Registration successful!"
      })
      navigate('/login')
    } else {
      Swal.fire({
        icon:"error",
        title:"Registration failed!"
      })
    }
    }
  };
  return (
    <>
      {/* Add a heading for the form */}
      <h2 className="text-center mt-3">Registration Form</h2>
      <div className="mt-3">
      <form onSubmit={handleSubmit}>
        {/* Wrap the form in a container to center it */}
        <Container>
          {/* Add a row for the first name input */}
          <Row>
            <Col>
              {/* Use a FloatingLabel component to display a label for the input */}
              <FloatingLabel
                controlId="floatingFirstName"
                label="Name"
                className="mb-3"
              >
                {/* Add an input for the first name */}
                <Form.Control type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)}  />
              </FloatingLabel>
            </Col>
          </Row>
          {/* Add a row for the last name input */}
          <Row>
            <Col>
              {/* Use a FloatingLabel component to display a label for the input */}
              <FloatingLabel
                controlId="floatingLastName"
                label="User Name"
                className="mb-3"
              >
                {/* Add an input for the last name */}
                <Form.Control type="text" placeholder="Uname" value={username} onChange={(e) => setUname(e.target.value)} />
              </FloatingLabel>
            </Col>
          </Row>
          {/* Add a row for the email input */}
          <Row>
            <Col>
              {/* Use a FloatingLabel component to display a label for the input */}
              <FloatingLabel
                controlId="floatingEmail"
                label="Email"
                className="mb-3"
              >
                {/* Add an input for the email */}
                <Form.Control type="email" placeholder="Email"  value={email} onChange={(e) => setEmail(e.target.value)} />
              </FloatingLabel>
            </Col>
          </Row>
          {/* Add a row for the password input */}
          <Row>
            <Col>
              {/* Use a FloatingLabel component to display a label for the input */}
              <FloatingLabel
                controlId="floatingPassword"
                label="Password"
                className="mb-3"
              >
                {/* Add an input for the password */}
                <Form.Control type="password" placeholder="Password"  value={password} onChange={(e) => setPassword(e.target.value)} />
              </FloatingLabel>
            </Col>
          </Row>
          {/* Add a row for the submit button */}
          <Row>
            <Col>
              {/* Add a submit button with primary variant and full width */}
              <Button variant="primary" style={{ width: "100%" }} type="submit">
                Submit
              </Button>
            </Col>
          </Row>
        </Container>
        </form>
      </div>
    </>
  );
};

// Export the Register component
export default Register;
