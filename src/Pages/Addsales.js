import React, { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Swal from 'sweetalert2'

// Define the AddSales component
const AddSales = () => {
  // Add state variables for each input field
  const [pname, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setAmount] = useState("");

  // Define the function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create a new sale object
    const newSale = {
      pname,
      quantity,
      price,
    };

    if(newSale.pname===""){
      Swal.fire({
        icon:"warning",
        title:"Please enter Product Name"
      })
    }else if(newSale.quantity===""){
      Swal.fire({
        icon:"warning",
        title:"Please enter quantity"
      })
    }else if(newSale.price===""){
      Swal.fire({
        icon:"warning",
        title:"Please enter price"
      })
    }else{
      // Make a POST request to the API
    const response = await fetch("http://localhost:8080/api/product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSale),
    });

    if (response.status === 201) {
      Swal.fire({
        icon:"success",
        title:"Sale added successfully!"
      })
      window.location.reload();
    } else {
      Swal.fire({
        icon:"error",
        title:"Error adding sale."
      })
    }
    }
  };

  return (
    <>
      {/* Add a heading for the form */}
      <h2 className="text-center mt-3">Add Sale Entry</h2>
      <div className="mt-3">
        {/* Wrap the form in a container to center it */}
        <Container>
          {/* Add a form element and use the handleSubmit function for form submission */}
          <Form onSubmit={handleSubmit}>
            {/* Add a row for the product name input */}
            <Row>
              <Col>
                {/* Use a FloatingLabel component to display a label for the input */}
                <FloatingLabel controlId="floatingProductName" label="Product Name" className="mb-3">
                  {/* Add an input for the product name */}
                  <Form.Control type="text" placeholder="Shirt" value={pname} onChange={(e) => setProductName(e.target.value)} />
                </FloatingLabel>
              </Col>
            </Row>
            {/* Add a row for the quantity input */}
            <Row>
              <Col>
                {/* Use a FloatingLabel component to display a label for the input */}
                <FloatingLabel controlId="floatingQuantity" label="Quantity" className="mb-3">
                  {/* Add an input for the quantity */}
                  <Form.Control type="text" placeholder="5" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                </FloatingLabel>
              </Col>
            </Row>
            {/* Add a row for the amount input */}
            <Row>
              <Col>
                {/* Use a FloatingLabel component to display a label for the input */}
                <FloatingLabel controlId="floatingAmount" label="Amount" className="mb-3">
                  {/* Add an input for the amount */}
                  <Form.Control type="text" placeholder="50" value={price} onChange={(e) => setAmount(e.target.value)} />
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
          </Form>
        </Container>
      </div>
    </>
  );
};

// Export the AddSales component
export default AddSales;
