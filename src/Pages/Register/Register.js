import React from 'react';
import { useNavigate } from 'react-router-dom'
import './Register.css';

function Register() {

  const navigate = useNavigate();

  function loginPage() {
    navigate('/login');
  }

  return (
    <div className="Register">
      <span className="RegisterTitle">Register</span>
      <form className="RegisterForm">
        <label>Username</label>
        <input className="RegisterInput" type="text" placeholder="Enter your username..." />
        <label>Email</label>
        <input className="RegisterInput" type="text" placeholder="Enter your email..." />
        <label>Password</label>
        <input className="RegisterInput" type="password" placeholder="Enter your password..." />
        <button className="RegisterButton">Register</button>
      </form>
      <button onClick={loginPage} className="RegisterLoginButton">Login</button>
    </div>
  )
}

export default Register;
