import React from "react";
import { Link } from "react-router-dom";

const notFound = () => {
  return (
    <div>
      <p> 404!</p>
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default notFound;
