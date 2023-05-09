import React, { useState } from "react";
import "./register.styles.scss";
import { Link, useNavigate } from "react-router-dom";

export const Register = () => {
  const [err, setErr] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      firstName: e.target[0].value,
      lastName: e.target[1].value,
      email: e.target[2].value,
      password: e.target[3].value,
      confirmPassword: e.target[4].value,
    };

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((res) => {
        navigate("/");
        setErr(false);
        console.log(res);
      })
      .catch((err) => setErr(true));
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Register</span>
        <form onSubmit={handleSubmit}>
          <input required type="text" placeholder="first name" />
          <input required type="text" placeholder="last name" />
          <input required type="email" placeholder="email" />
          <input required type="password" placeholder="password" />
          <input required type="password" placeholder="confirm password" />
          <button>Sign up</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>
          You do have an account? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
};
