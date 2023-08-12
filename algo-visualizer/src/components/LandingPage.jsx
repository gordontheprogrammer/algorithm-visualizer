import React from 'react';
import '../css/LandingPage.css'; // Import your CSS file for styling

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <h1 className="logo">Algorithm Visualizer</h1>
        {/* Navigation links */}
      </header>

      <section className="carousel">
        {/* Carousel content */}
      </section>

      <section className="welcome">
        <div className="welcome-text">
          <h2>Welcome to Algorithm Visualizer</h2>
          <p>Explore and learn about various algorithms through interactive visualizations.</p>
          <a href="#" className="cta-button">Get Started</a>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
