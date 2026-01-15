import React from "react";
import { useRouteError, Link } from "react-router-dom";
import "./Error.css"; 

const Error = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="error-wrapper">
      <h1 className="error-code">404</h1>
      <h2 className="error-title">Oops! Something went wrong.</h2>

      <p className="error-message">
        {error?.statusText || error?.message || "Unexpected error occurred."}
      </p>

      <Link to="/" className="error-btn">
        Go Back Home 
      </Link>
    </div>
  );
};

export default Error;