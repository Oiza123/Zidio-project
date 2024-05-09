import React from "react";
import { Link } from "react-router-dom";
function ForgotPassword() {
  return (
    <h1>
      <p>
        Forgot Password
        <p>
          {" "}
          <Link to="/log-in">Back to Log In</Link>
        </p>
      </p>
    </h1>
  );
}

export default ForgotPassword;
