import "./LogIn.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../provider/authProvider";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const { setToken } = useAuth();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const file = React.useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };
  const handleLogin = () => {
    setToken("this is a test token");
    navigate("/", { replace: true });
  };

  setTimeout(() => {
    handleLogin();
  }, 3 * 1000);

  return (
    <div className="LogIn">
      <section className="details">
        <div className="title">Create Your Account</div>
        <br></br>
        <form>
          <input
            type="text"
            name="email"
            value={inputValue.email}
            onChange={handleChange}
            placeholder="Email Address"
          ></input>
          <br></br>
          <br></br>

          <input
            type="password"
            name="password"
            value={inputValue.password}
            onChange={handleChange}
            placeholder="Enter Password"
          ></input>
          <br></br>
          <br></br>
          <h4 style={{ fontWeight: "400px" }}>Upload a photo</h4>
          <br></br>
          {/* <input type="file" ref={file}></input> */}

          <h6>Not yet registered?</h6>
          <Link>Sign Up</Link>
          <br></br>
          <br></br>
          <input type="submit" value="Sign Up"></input>
        </form>
      </section>
      <section className="logo">
        <h2 className="bank-text">Book Store</h2>
      </section>
    </div>
  );
};

export default Login;
