import React from 'react';
import{useNavigate} from 'react-router-dom'
import './Login.css';

function Login() {

  const navigate = useNavigate();

  function registerPage(){
    navigate('/register');
  }

  function ProtectedCmp()
    {
        localStorage.setItem('login' ,  true);
        navigate('/addpost');
    }


  return (
    <div className="login">
    <span className="loginTitle">Login</span>
    <form className="loginForm">
      <label>Email</label>
      <input className="loginInput" type="text" placeholder="Enter your email..." />
      <label>Password</label>
      <input className="loginInput" type="password" placeholder="Enter your password..." />
      <button className="loginButton" onClick={ProtectedCmp}>Login</button>
    </form>
      <button onClick={registerPage} className="loginRegisterButton">Register</button>
  </div>
  )}

export default Login;
