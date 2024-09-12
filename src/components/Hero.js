import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Discover the Best Food and Drinks</h1>
        <p>Explore delicious recipes and culinary stories!</p>
        <button>Read More</button>
      </div>
      <img src="images/pizza.jpg" alt="Pizza" className="hero-image" />
    </section>
  );
};

export default Hero;
