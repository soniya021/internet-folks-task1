import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="about-text">
        <h2>About Us</h2>
        <p>
          We are passionate about sharing delicious recipes and food stories. Join us in our culinary journey!
        </p>
      </div>
      <img src="/images/pharma.svg" alt="About Us" className="about-image" />
    </section>
  );
};

export default AboutUs;
