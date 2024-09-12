import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (

    <section className="about-us">
      <img src="/images/pharma.svg" alt="About Us" className="about-image" width="420px" height="420px"/>
      <div className="about-text">
        <h2>About Us</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <button class="btn2">Read More</button>
        
      </div>
      
    </section>
  );
};

export default AboutUs;
