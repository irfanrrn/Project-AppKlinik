import {useEffect, useState} from "react";
import dokterImg from "../assets/img/doctor-masuk.jpg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { login } from "../configs/userSlice";
import { useDispatch } from "react-redux";

const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const submitHandle = async (e) => {
    e.preventDefault();

    try{
      const res = await axios.post('http://localhost:3000/login', {
        email: email,
        password: password
      });
      dispatch(login(res.data.user));
      navigate('/');
    }catch(e){
      setError(e.response.data.message);
    }
  }

  return (
      <div>
        <div className="container1">
          <div className="login-form">
            <h1>Login to Account</h1>
            <p>Welcome back, Please log in to your Account.</p>
            {error && 
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            }
            <form onSubmit={submitHandle}>
              <label htmlFor="email">EMAIL</label>
              <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
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
                  onChange={e => setPassword(e.target.value)}
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