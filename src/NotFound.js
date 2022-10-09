import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h2>Sorry, the URL is not correct</h2>
      <p>
        <Link to="/">Go back to the Homepage</Link>
      </p>
    </div>
  );
};

export default NotFound;
