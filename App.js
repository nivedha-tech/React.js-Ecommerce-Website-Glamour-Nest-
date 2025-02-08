// In App.js

import './App.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { assets } from '../src/Component/images/image';
import logimges from '../src/Component/images/mainimage.jpg'
import Shopping from './Component/Shopping/Shopping';
import Login from './Component/Login/Login';

import Contact from './Component/Contact/Contact';
import About from './Component/About/About';
import React, { useState } from 'react';
import Register from './Component/Register/Register';

function App() {
  const [isLog, setIsLog] = useState(false);
 
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLog(true);
    navigate('/shopping');
  };

  const handleRestrictedClick = (event) => {
    if (!isLog) {
      event.preventDefault();
      alert('Please log in to access the website');
      navigate('/Register');
    }
  };

  return (
    <div className="App">
      <nav className="navbar">
        <img src={assets.logo} alt="Logo" className="logo" />
        <ul className="navbar-menu">
          
          <li>
            <Link to="/shopping" className="nav-link" onClick={handleRestrictedClick}>Product</Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link" onClick={handleRestrictedClick}>Contact Us</Link>
          </li>
          <li>
            <Link to="/about" className="nav-link" onClick={handleRestrictedClick}>About me</Link>
          </li>
        </ul>
        <div className='navbar-right'>
          <img src={assets.searchicon} alt="search Icon" />
          <Link to="/cart" className='navbar-basket-icon' onClick={handleRestrictedClick}> {/* Add Link here */}
            <img src={assets.basketicon} alt="Basket Icon" />
            <div className='dot'></div>
          </Link>
          <Link to='/Login'>
            <button>Sign In</button>
          </Link>
        </div>
      </nav>

      <Routes>
        <Route path="/Login" element={<Login onLogin={handleLogin} />} />
        {isLog ? (
          <>
                        <Route path="/Register" element={<Register/>} />

            <Route path="/shopping" element={<Shopping />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </>
        ) : (
          <Route
            path="*"
            element={
              <div className='app-img' style={{ 
    backgroundImage: `url("C:/Users/Ramesh/fw/src/Component/images/cc.jpg")`, 
    backgroundSize: 'cover', 
    backgroundPosition: 'center', 
    height: '800px', 
    width: '100vw',
    display: 'flex',
    justifyContent: 'center', 
    alignItems: 'center', 
    
  }}
>
  
<div className='main-header-contents'>
          <h1>WE STYLE &
        YOU SMILE BRIGHT</h1><br/><br/><br/><br/><br/><br/><br/><br/>
  <h1>GLAMOUR NEST WELCOME YOU </h1></div>

 
</div>
            }
          />
        )}
      </Routes>
 </div>
  );
}

export default App;
