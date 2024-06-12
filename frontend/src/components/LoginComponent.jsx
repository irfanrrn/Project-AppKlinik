import dokterImg from "../assets/img/doctor-masuk.jpg";

const LoginComponent = () => {
  return (
    <div>
      <div className="container1">
        <div className="login-form">
          <h1>Login to Account</h1>
          <p>Welcome back, Please log in to your Account.</p>
          <form>
            <label for="email">EMAIL</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email"
              required
            />

            <label for="password">PASSWORD</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
              required
            />

            <div className="buttons">
              <button type="submit" className="login-btn">
                LOGIN ACCOUNT
              </button>
              <button type="button" className="register-btn">
                REGISTER ACCOUNT
              </button>
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
