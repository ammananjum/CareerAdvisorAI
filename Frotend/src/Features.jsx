// src/Features.jsx
import React from 'react';
import './Features.css';

const featureList = [
  {
    icon: "/ai.png",
    title: "AI Career Guidance",
    desc: "Get personalized career suggestions powered by AI, analyzing your skills, interests, and academic background to recommend the best career fit for you."
  },
  {
    icon: "/skills.png",
    title: "Skills Matching",
    desc: "Match your technical and soft skills with top career options. Discover which paths truly fit your strengths and ambitions."
  },
  {
    icon: "/career.png",
    title: "Career Paths",
    desc: "Visualize real-world roles, understand requirements, and find opportunities based on your CGPA and preferences."
  },
  {
    icon: "/shield.png",
    title: "Privacy & Security",
    desc: "Your data is secure. We use modern encryption and never share your information—ensuring trust and transparency."
  }
];

const Features = () => {
  return (
    <div style={{ margin: 0, padding: 0, overflowX: 'hidden' }}>

      {/* 🔷 Hero Video Section */}
      <div style={{ width: '100vw', margin: 0, padding: 0 }}>
        <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
          <video
            autoPlay
            muted
            loop
            playsInline
            style={{
              width: '100vw',
              height: '100vh',
              objectFit: 'cover',
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: 1
            }}
          >
            <source src="/features_banner.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div
            style={{
              position: 'relative',
              zIndex: 2,
              height: '100%',
              width: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              textAlign: 'center',
              padding: '20px'
            }}
          >
            <h2 className="fw-bold display-4">Explore Our Features</h2>
            <p className="fs-5">Smart tools built to shape your career journey</p>
          </div>
        </div>
      </div>

      {/* 🔷 Feature Cards */}
      <div className="container py-5 feature-section">
        <div className="row justify-content-center">
          {featureList.map((feature, index) => (
            <div key={index} className="col-md-6 col-lg-3 d-flex mb-4">
              <div className="feature-card text-center p-4 w-100">
                <img src={feature.icon} alt={feature.title} className="mb-3" style={{ width: '60px' }} />
                <h5 className="fw-bold mb-2">{feature.title}</h5>
                <p className="text-muted small">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 🔶 Get Started Button */}
        <div className="text-center mt-4">
          <a href="/register" className="btn btn-primary btn-lg px-5 shadow-sm get-started-button">
            Get Started Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Features;
