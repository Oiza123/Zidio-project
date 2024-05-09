import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import visibilty from "../img/visibility.png";
import "./LogIn.css";

function LogIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <>
      <div>
        <header>
          <p className="pageHeader">Welcome Back!</p>
        </header>
        <form className="pageContainer">
          <input
            type="email"
            className="emailInput"
            placeholder="Email"
            id="email"
            value={email}
            onChange={onChange}
          />
          <div className="passwordInputDiv">
            <input
              type={showPassword ? "text" : "password"}
              className="passwordInput"
              placeholder="Password"
              id="password"
              value={password}
              onChange={onChange}
            />

            <img
              src={visibilty}
              alt="visibility"
              className="showPassword"
              onClick={() => setShowPassword((prevState) => !prevState)}
            />
          </div>
          <Link to="/forgot-password" className="forgotPasswordLink">
            Forgot Password
          </Link>
        </form>
        {/*Google Oauth*/}
        New User?
        <Link to="/sign-up" className="registerLink">
          Create an Account
        </Link>
      </div>
    </>
  );
}

export default LogIn;
