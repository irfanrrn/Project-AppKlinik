import React, { useState } from "react";
import axios from "axios";
import dokterImg from "../assets/img/doctor-masuk.jpg";
import { Link, useNavigate } from "react-router-dom";
import { login, selectUser } from "../configs/userSlice";
import { useDispatch, useSelector } from "react-redux";

const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const submitHandle = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/login", {
        email: email,
        password: password,
      });

      const { user, message } = res.data;

      if (user) {
        dispatch(login(user));
        if(user.role == 'user'){
          navigate("/");
        }else if(user.role == 'admin'){
          navigate('/dashboard-admin');
        }
      } else {
        setError(message || "Login failed");
      }
    } catch (e) {
      setError(e.response.data.message || "Login failed");
    }
  };

  return (
    <div>
      <div className="container1">
        <div className="login-form">
          <h1>Login to Account</h1>
          <p>Welcome back, Please log in to your Account.</p>
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}
          <form onSubmit={submitHandle}>
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

            <div className="buttons">
              <button type="submit" className="login-btn">
                LOGIN ACCOUNT
              </button>
              <Link to="/register" className="register-btn">
                REGISTER ACCOUNT
              </Link>
            </div>
          </form>
        </div>
        <div className="login-image">
          <img src={dokterImg} alt="Doctor" />
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
