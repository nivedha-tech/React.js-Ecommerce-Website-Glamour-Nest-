import './About.css';
import React from 'react';
import aboutimg from '../images/aaa.jpg';

const About = () => {
  return (
    <div>
      <div className="about-section">
        <img className="about-image" src={aboutimg} alt="About Glamour Nest" />
        <div className="about-description">
          {/* Add a subheading above the paragraph */}
          <h2 className="about-subheading">About Me</h2>
          <p>
            Welcome to Glamour Nest, where beauty meets confidence! We believe that makeup is more than just a product—it's a form of self-expression, creativity, and empowerment.
            Our mission is to provide high-quality cosmetics that cater to every skin tone, style, and occasion. At Glamour Nest, we are passionate about creating makeup that enhances your natural beauty while encouraging you to explore bold and exciting new looks.
            From luxurious foundations to vibrant eyeshadows and must-have lipsticks, our collection is designed to suit every makeup enthusiast from beginners to pros.
            Our products are cruelty-free, ethically sourced, and carefully crafted to give you the best in quality and performance. Whether you're getting ready for a special occasion or simply experimenting with new trends, we’re here to make sure you feel beautiful, confident, and unapologetically you.
            Thank you for choosing Glamour Nest as your go-to for all things beauty. We can't wait to be part of your makeup journey.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
