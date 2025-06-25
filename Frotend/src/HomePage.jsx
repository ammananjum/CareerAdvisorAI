// src/HomePage.jsx
import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div style={{ margin: 0, padding: 0 }}>

      {/* 🔷 Hero Section with Full-Width Image BG */}
      <section
        style={{
          width: '100vw',
          height: '100vh',
          backgroundImage: 'url("/hero_ai.jpg")', // 🔁 Use your actual image path in /public
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* 🔶 Dark Overlay with Text */}
        <div
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            color: '#fff',
            padding: '3rem',
            borderRadius: '12px',
            maxWidth: '850px',
            textAlign: 'center',
          }}
        >
          <h1 className="display-4 fw-bold">Career Advisor AI</h1>
          <p className="fs-5 mb-4">
            Discover your future with the power of Artificial Intelligence.
            Our platform uses your <strong>skills</strong>, <strong>interests</strong>, and <strong>CGPA</strong> to suggest
            intelligent, personalized career paths tailored to your strengths.
          </p>
          <Link to="/register" className="btn btn-primary btn-lg px-4 py-2">
            Get Started
          </Link>
        </div>
      </section>

      {/* 🔷 Info Section */}
      <section className="bg-white text-center py-5 px-4">
        <div className="container">
          <h3 className="fw-bold mb-3">Why Choosing the Right Career Matters</h3>
          <p className="fs-6" style={{ maxWidth: '850px', margin: '0 auto' }}>
            Your career shapes your future — making the right decision early is key to long-term
            success and happiness. Our AI-driven platform analyzes your strengths, passions, and
            academic journey to recommend fulfilling career paths.
          </p>
        </div>
      </section>

      {/* 🔷 Footer */}
      <footer className="bg-dark text-white text-center py-3">
        Career Advisor AI © {new Date().getFullYear()}
      </footer>
    </div>
  );
};

export default HomePage;
