import React, { useState } from "react";
import axios from "axios";
import dokterImg from "../assets/img/doctor-daftar.jpg";
import { Link, useNavigate } from "react-router-dom";

const RegisterComponent = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const submitHandle = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/register", {
        username: username,
        email: email,
        password: password,
      });

      if (res.status === 200) {
        alert("Registration successful!");
        navigate("/login"); // Redirect to login page after successful registration
      } else {
        alert("Registration failed!");
      }
    } catch (e) {
      if (e.response && e.response.data && e.response.data.message) {
        setErrors(e.response.data.message);
      } else {
        setErrors(["Failed to register. Please try again."]);
      }
    }
  };

  return (
    <div>
      <div className="container2">
        <div className="register-image2">
          <img src={dokterImg} alt="Doctors" />
        </div>
        <div className="register-form2">
          <h1>Register Account</h1>
          <p>Or use your email account to register an account</p>
          {errors.length > 0 && (
            <div className="alert alert-danger" role="alert">
              {errors.map((error, index) => (
                <p key={index}>{error}</p>
              ))}
            </div>
          )}
          <form onSubmit={submitHandle}>
            <label htmlFor="nama">FULL NAME</label>
            <input
              type="text"
              id="nama"
              name="nama"
              className="form-control"
              placeholder="full name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            <label htmlFor="email">EMAIL</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="password">PASSWORD</label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <div className="buttons2">
              <button type="submit" className="login-btn2">
                REGISTER ACCOUNT
              </button>
              <Link to="/login" className="register-btn2">
                LOGIN ACCOUNT
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterComponent;
