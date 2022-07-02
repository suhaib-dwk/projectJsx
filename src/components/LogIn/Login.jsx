import React, { useState } from 'react';
import './Login.css';
import Logo from '../../imgs/Logo.ico';
import { useNavigate, Link } from 'react-router-dom';
// import Page2 from '../Page2/Page2.jsx';
import design from '../../imgs/design.png';

const Login = () => {
  const [emailVal, setEmailVal] = useState('');
  const [passVal, setPassVal] = useState('');

  const navigate = useNavigate();

  function handleClick() {
    navigate('/Page2 ');
  }
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="main-login">
      <div className="login-contain">
        <div className="left-side">
          <img src={Logo} id="img-id" alt="Logo" />
          <form onSubmit={handleSubmit}>
            <label for="emil1">Email</label>
            <input
              placeholder="Enter your Email"
              type="email"
              value={emailVal}
              onChange={(e) => {
                setEmailVal(e.target.value);
              }}
              id="emil1"
            />
            <label for="pwd1">Password</label>
            <input
              placeholder="Enter Password"
              type="password"
              value={passVal}
              onChange={(e) => {
                setPassVal(e.target.value);
              }}
              id="pwd1"
            />
            <button type="submit" id="sub-butt" onClick={handleClick}>
              Submit
            </button>
          </form>
          <div className="footer">
            <nav>
              <h4>
                Don't have an Account ?
                <Link to="/page2" className="link">
                  Page
                </Link>
              </h4>
            </nav>
          </div>
        </div>
        <div className="right-side">
          <div className="wlcomeNote">
            <h3 id="tx">Welcome</h3>
          </div>
          <div className="welcomeImg">
            <img src={design} id="desgin-img" alt="design" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
