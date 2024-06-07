import dokterImg from "../assets/img/doctor-daftar.jpg";

const RegisterComponent = () => {
  return (
    <div>
      <div className="container2">
        <div className="register-image2">
          <img src={dokterImg} alt="Doctors" />
        </div>
        <div className="register-form2">
          <h1>Register Account</h1>
          <p>Or use your email account to register an account</p>
          <form>
            <label htmlFor="nama">FULL NAME</label>
            <input
              type="text"
              id="nama"
              name="nama"
              placeholder="full name"
              required
            />

            <label htmlFor="email">EMAIL</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email"
              required
            />

            <label htmlFor="password">PASSWORD</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
              required
            />

            <a href="#" className="forgot-password2">
              Forgot password?
            </a>

            <div className="buttons2">
              <button type="submit" className="login-btn2">
                LOGIN ACCOUNT
              </button>
              <button type="button" className="register-btn2">
                REGISTER ACCOUNT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterComponent;
