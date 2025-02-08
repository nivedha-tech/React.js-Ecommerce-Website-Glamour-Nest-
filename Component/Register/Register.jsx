import React, { useState } from 'react';
import './Register.css';
import { useNavigate } from 'react-router-dom'; 

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form submission

        // Validate fields
        if (!username || !email || !password || !confirmPassword) {
            setMessage("Please fill the form!!");
            return;
        }

        if (password !== confirmPassword) {
            setMessage("Password did not match!!");
            return;
        }

        // If validation passes, clear message and navigate to Shopping page
        setMessage(""); 
        console.log('Form submitted:', { username, email, password });

        // Navigate to the Shopping page only after validation success
        navigate('/Shopping');
    };

    const validateUsername = (e) => {
        const name = e.target.value;
        if (!/^[A-Za-z]{3,10}$/.test(name)) {
            setMessage("Username must be alphabet");
        } else {
            setMessage("");
        }
        setUsername(name);
    };

    const validateEmail = (e) => {
        const emailValue = e.target.value;
        if (!/\S+@\S+\.\S+/.test(emailValue)) {
            setMessage("Mail must match the pattern");
        } else {
            setMessage("");
        }
        setEmail(emailValue);
    };
    const handleRegClick = () => {
        navigate('/Login');
      };
    return (
        <section id="header">
            <div className="reg-image"></div>

            <div className="reg-box">
                <form onSubmit={handleSubmit} className="reg">
                    <label>
                        Username<br />
                        <input className='reg-input'
                            type="text"
                            value={username}
                            onChange={validateUsername}
                            placeholder="Enter your Username"
                            pattern="[A-Za-z]{3,10}"
                        />
                    </label>
                    <br /><br />
                    <label>
                        Email<br />
                        <input className='reg-input'
                            type="email"
                            value={email}
                            onChange={validateEmail}
                            placeholder="Enter your Email"
                        />
                    </label>
                    <br /><br />
                    <label>
                        Password<br />
                        <input className='reg-input'
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your Password"
                        />
                    </label>
                    <br /><br />
                    <label>
                        Confirm Password<br />
                        <input className='reg-input'
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Confirm Password"
                        />
                    </label>
                    <br /><br />
                    <center>
                        <button className="reg-submit" type='submit' onClick={handleRegClick}>REGISTER</button>
                        <br /><br />
                        <p id="show" style={{ color: 'red' }}>{message}</p>
                    </center>
                </form>
            </div>
        </section>
    );
};

export default Register;
