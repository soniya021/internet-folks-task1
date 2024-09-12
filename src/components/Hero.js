import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Discover the{" "}
          <h2>
            Best <b>Food</b>
          </h2>{" "}
          <h3>and Drinks</h3>
        </h1>
        <p>Nuturally made HealthCare products for the</p>
        <span>better Care & support of your body.</span>
        <button>Explore Now!</button>
        <button class="btn1">Get In Touch</button>
      </div>
      
      {/* <img src="images/pizza.jpg" alt="Pizza" className="hero-image" /> */}
      <img src="/images/layout1.svg" alt="Pizza" className="hero-image1" />
      <img src="/images/rectangle.svg" alt="Pizza" className="hero-image" />
      <img src="/images/logoo.svg" alt="Pizza" className="hero-image2" />
    </section>
  );
};

export default Hero;
