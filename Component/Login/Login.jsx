import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

function Login({ onLogin }) { 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault(); // Prevent form submission

    // Username validation
    if (username === "") {
      setErrorMessage("Enter your name");
      return false;
    } else if (!/^[a-zA-Z]*$/.test(username)) {
      setErrorMessage("Only alphabets are allowed");
      return false;
    }

    // Password validation
    if (password === "") {
      setErrorMessage("Enter password");
      return false;
    } else if (isNaN(password) || password.length !== 4) {
      setErrorMessage("Password must be a 4-digit number");
      return false;
    }

    setErrorMessage(""); 
    console.log("Login successful");

    // Call the onLogin function passed from App.js
    onLogin(); 
  };

  const handleRegisterClick = () => {
    navigate('/Register');
  };

  return (
    <section id="header">
      <div className="log-image"></div>

      <form className="login" onSubmit={login}>
        <label>Username</label><br />
        <input
          type="text"
          name="uname"
          id="username"
          value={username} placeholder="Enter your Username"
          onChange={(e) => setUsername(e.target.value)} // Update state
        />
        <br /><br />

        <label>Password</label><br />
        <input
          type="password"
          name="pwd"
          id="password"
          value={password}
          maxLength="4" placeholder="Enter your Password"
          onChange={(e) => setPassword(e.target.value)} // Update state
        />
        <br /><br />

        <center>
          <button className='signin-btn' type="submit" value="LOGIN">SIGN IN</button><br /><br />
          
          <h6 className='txt-align'>No account? Click here to register</h6>
          <button className='signup-btn' onClick={handleRegisterClick}>SIGN UP</button><br /><br />
          
          {/* Error message */}
          <p id="show" style={{ color: "red" }}>{errorMessage}</p>
        </center>
      </form>
    </section>
  );
}

export default Login;
