import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./login.style.scss";

export const Login = ({ setCurUserContacts, setCurrentUser }) => {
  const [err, setErr] = useState(false);
  const [users, setUsers] = useState([]);

  console.log(users);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/users")
      .then((response) => setUsers(response.data))
      .catch((err) => setErr(true));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    const logedUser = users.filter(
      (user) => (user.email === email) & (user.password === password)
    );

    axios
      .get(`http://localhost:5000/contacts/${logedUser[0].firstName}`)
      .then((response) => setCurUserContacts(response.data))
      .catch((err) => console.log(err));

    if (logedUser.length === 1) {
      setTimeout(() => {
        navigate("/home");
      }, 1000);
    }
    if (logedUser.length <= 0 || logedUser.length > 2) setErr(true);
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Log in</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>Sign in</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>
          You don't have an account? <Link to="register">Register</Link>
        </p>
      </div>
    </div>
  );
};
