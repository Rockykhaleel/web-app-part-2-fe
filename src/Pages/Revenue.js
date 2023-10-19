import React from "react";
import { useState, useEffect } from "react";

// Define the Revenue component
const Revenue = () => {
const [revenue, setRevenue] = useState(null);
const totalRevenue = () => {
  fetch('http://localhost:8080/api/product/total')
    .then(response => response.json())
    .then(data => setRevenue(data))
    .catch(error => console.error('Error:', error));
}
useEffect(() => {
  totalRevenue()
}, []);
  return (
    <>
      {/* Add a heading to display today's revenue */}
      <h2 className="text-center mt-3">Today's Revenue is {revenue ? revenue[0].totalRevenue : 'Loading...'}</h2>
    </>
  );
};

// Export the Revenue component
export default Revenue;
