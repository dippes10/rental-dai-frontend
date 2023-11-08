import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to Rental Dai</h1>
        <p>Your trusted platform for renting houses.</p>
        <Link to="/properties" className="cta-button">
          Explore Properties
        </Link>
      </section>

      {/* Featured Properties */}
      <section className="featured-properties">
        <h2>Featured Properties</h2>
        <div className="property-list">
          {/* Example property card */}
          <div className="property-card">
            {/* <img src="/property1.jpg" alt="Property 1" /> */}
            <h3>Modern Apartment</h3>
            <p>Located in the heart of the city</p>
            <Link to="/property/1" className="view-details">
              View Details
            </Link>
          </div>

          {/* Additional property cards go here */}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <p>Search for your ideal property on our platform.</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <p>Contact the property owner or manager for more details.</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <p>Book and move into your new home hassle-free.</p>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="cta">
        <h2>Start Your Journey with Rental Dai</h2>
        <Link to="/join-club" className="cta-button">
          Join Rental Dai
        </Link>
      </section>
    </div>
  );
};

export default HomePage;
