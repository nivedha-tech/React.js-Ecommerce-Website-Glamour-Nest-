import React, { useState } from 'react';
import './Contact.css'; // Ensure to include your CSS file for styling

const Contact = () => {
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false); // Track if message is an error

  const submitDetails = (e) => {
    e.preventDefault();

    // Resetting the message state on each submission
    setMessage('');
    setIsError(false);

    // Email validation
    if (email === "") {
      setMessage("Please provide your email address");
      setIsError(true);
      return false;
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setMessage("Please enter a valid email address");
      setIsError(true);
      return false;
    }

    // Feedback validation
    if (feedback === "") {
      setMessage("Please give feedback");
      setIsError(true);
      return false;
    }

    // Success message
    setMessage("Thank you for your feedback!");
    setIsError(false); 
    console.log("Form submitted with:", { email, feedback });
    return true;
  };

  return (
    <section id="header">
      <div className="contact-image"></div>
      
      <div className="footer">
        <div className="col-1">
          <h3>COMPANY</h3>
          <p>
            Our BAGGY BUZZ is designed to help you stand out. From comfy basics to eye-catching accessories. Looking for an exclusive collection of stylish bags, do visit: www.BaggyBuzz.com
          </p>
        </div>

        <div className="col-2">
          <h3>NEWSLETTER</h3>

          <p 
            id="show-about" 
            className={isError ? "error-message" : "success-message"}
          >
            {message}
          </p>

          <br />
          <input
            className="about-input"
            type="text"
            id="em"
            name="mail"
            placeholder="your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <br />
          <textarea
            id="fe"
            name="feed"
            placeholder="customer can give their feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
          <br />
          <br />
          <button className="about-btn" type="submit" onClick={submitDetails}>
            Submit
          </button>
        </div>

        <div className="col-3">
          <h3>FOLLOW US</h3>
          <p>Baggy_buzz_shopping@gmail.com</p>
          <p>White Field, Bangalore</p>
          <p>Delhi, PIN 560066, India</p>
          <p>Office: +91 992357811</p>
          <div className="social-icons">
            <i className="fa-brands fa-square-facebook"></i>
            <i className="fa-brands fa-square-instagram"></i>
            <i className="fa-brands fa-square-twitter"></i>
            <i className="fa-brands fa-square-whatsapp"></i>
            <i className="fa-brands fa-square-threads"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
