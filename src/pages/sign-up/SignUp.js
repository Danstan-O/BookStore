import React, { useState } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";

function SignUp() {
  const [inputValue, setInputValue] = useState("");
  const file = React.useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };
  return (
    <div className="SignUp">
      {/* <div className="row"> */}
      <section className="details">
        <div className="title">Create Your Account</div>
        <br></br>
        <form>
          <input
            type="text"
            name="name"
            value={inputValue.name}
            onChange={handleChange}
            placeholder="Name"
          ></input>
          <br></br>
          <br></br>
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
          <input
            type="password"
            name="confirm"
            value={inputValue.confirm}
            onChange={handleChange}
            placeholder="Confirm Password"
          ></input>
          <br></br>
          <br></br>
          <h4 style={{ fontWeight: "400px" }}>Upload a photo</h4>
          <br></br>
          <input type="file" ref={file}></input>
          <br></br>
          <br></br>
          <h6>Already have an account?</h6>
          <Link>Log In</Link>
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
}

export default SignUp;
