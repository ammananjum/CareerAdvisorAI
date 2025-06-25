// src/About.jsx
import React from 'react';
import './About.css'; // Optional

const About = () => {
  return (
    <div style={{ margin: 0, padding: 0, width: '100vw', overflowX: 'hidden' }}>
      
      {/* 🔷 Header Section */}
      <section className="w-100 py-5 text-white text-center" style={{ backgroundColor: '#004080' }}  >

        <div className="container">
          <h1 className="display-5 fw-bold">About CareerAdvisor AI</h1>
          <p className="lead">Empowering students to choose the right career using AI</p>
        </div>
      </section>

      {/* 🔷 Main Info Section */}
      <section className="container-fluid py-5 px-4 bg-light">
        <div className="row mb-5 align-items-center">
          <div className="col-md-6">
            <img src="/team.png" alt="Team working" className="img-fluid rounded shadow" />
          </div>
          <div className="col-md-6">
            <h1 className="mb-3">Our Mission</h1>
            <p>
              CareerAdvisor AI is dedicated to helping students and early professionals make
              confident, data-driven career decisions using artificial intelligence. We believe every
              individual deserves personalized guidance based on their strengths, interests, and goals.
            </p>
            <p>That’s why we aim to bridge the gap between education and employment by leveraging
  the power of artificial intelligence. Our goal is to help individuals identify their
  unique strengths, align their interests with real-world opportunities, and build
  confidence in their future.
</p>
<p>
  We are committed to making career planning accessible, insightful, and impactful — ensuring
  that every learner, regardless of their background, has the support they need to take
  the right step forward.
</p>
          </div>
        </div>

        <div className="row mb-5 align-items-center">
          <div className="col-md-6 order-md-2">
            <img src="/why_us.jpg" alt="Why us" className="img-fluid rounded shadow" />
          </div>
          <div className="col-md-6 order-md-1">
            <h1 className="mb-3">Why CareerAdvisor?</h1>
            <p>
  Career choices shouldn’t be made through guesswork or pressure — they should be
  informed by insights, data, and self-awareness. CareerAdvisor AI was created to solve
  the uncertainty many students face when deciding their future.
</p>
<p>
  Our platform uses artificial intelligence to analyze your skills, interests, academic performance,
  and preferences, generating personalized career recommendations that actually fit you.
</p>
<p>
  We don’t just offer suggestions — we provide direction. With our intelligent system,
  you’ll gain clarity, explore relevant opportunities, and move forward with confidence
  in a path that aligns with your unique strengths and goals.
</p>
            <p>
              We bridge the gap between education and employment. Our AI analyzes your profile
              — skills, interests, and academic performance — to suggest the most suitable career
              paths for you. No more confusion or guesswork.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col text-center">
            <h1 className="mb-3">Our Vision</h1>
            <p className="px-3 px-md-5">
              To become the go-to intelligent platform for students worldwide to explore careers,
              build skills, and plan a fulfilling future — with AI as their personal advisor.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
