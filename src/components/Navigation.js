import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {  useNavigate } from "react-router-dom";

// Define the Navigation component
const Navigation = () => {
  // Get the token from local storage
  const token = localStorage.getItem('token');

  // Check if the user is logged in
  const isLoggedIn = token !== null;

   // Get the navigate function from react-router-dom
   const navigate = useNavigate();

   // Function to handle logout
   const handleLogout = () => {
     // Clear the token from local storage
     localStorage.removeItem('token');
 
     // Redirect to login page
     navigate('/login');
   };

  return (
    <div>
      {/* Create a responsive navbar with a dark theme and primary background color */}
      <Navbar collapseOnSelect expand="lg" bg="primary" data-bs-theme="dark">
        {/* Wrap the navbar content in a container to center it */}
        <Container>
          {/* Add a brand name and link it to the /addSales page */}
          <Navbar.Brand href="/addSales">Sales App</Navbar.Brand>
          {/* Add a toggle button for smaller screens */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          {/* Add collapsible navbar content */}
          <Navbar.Collapse id="responsive-navbar-nav">
            {/* Add navigation links */}
            <Nav className="me-auto">
              
              

            {
  isLoggedIn ? (
    <>
      <Nav.Link href="/addSales">Add Sales</Nav.Link>
      <Nav.Link href="/topSales">Top 5 Sales</Nav.Link>
      <Nav.Link href="/revenue">Total Revenue</Nav.Link>
      <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
    </>
  ) : (
    <>
      <Nav.Link href="/register">Register</Nav.Link>
      <Nav.Link href="/login">Login</Nav.Link>
    </>
  )
}

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

// Export the Navigation component
export default Navigation;
