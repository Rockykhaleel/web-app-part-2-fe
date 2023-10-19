import React from "react";
import { Container, Row } from "react-bootstrap";
import { useState, useEffect } from "react";

const Topsales = () => {
  const [data, setData] = useState(null);

  const topSales = () => {
    fetch('http://localhost:8080/api/product/top')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error:', error));
  }

  useEffect(() => {
    topSales()
  }, []);

  return (
    <>
      <h2 className="text-center mt-3">Top 5 sales</h2>
      <Container>
        <Row>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                {/* <th scope="col">Sales Id:</th> */}
                <th scope="col">Product Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Sale Amount</th>
              </tr>
            </thead>
            <tbody>
              {
                data && data.map((item,index)=>(
                  <tr key={index}>
                    <th scope="row">{index+1}</th>
                    {/* <td>{item._id}</td> */}
                    <td>{item.pname}</td>
                    <td>{item.quantity}</td>
                    <td>{item.price}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </Row>
      </Container>
    </>
  );
};

export default Topsales;
