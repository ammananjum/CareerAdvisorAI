// src/Register.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [skills, setSkills] = useState('');
  const [interests, setInterests] = useState('');
  const [cgpa, setCgpa] = useState('');

  const [message, setMessage] = useState('');
  const [showLogin, setShowLogin] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      // 1. Register User
      const userRes = await axios.post('https://localhost:7139/api/Users/register', {
        name,
        email,
        password,
      });

      const userId = userRes.data.userId;
      localStorage.setItem("userId", userId);
      localStorage.setItem("userName", name);

      // 2. Create Profile
      const profileData = {
        userId: parseInt(userId),
        skills,
        interests,
        cgpa: parseFloat(cgpa),
        mlOutput: ""
      };

      await axios.post("https://localhost:7139/api/Profiles/create", profileData);

      setMessage("✅ Registration & Profile saved successfully!");
      setShowLogin(true);
    } catch (error) {
      console.error(error);
      setMessage("❌ Failed: " + (error.response?.data || "Something went wrong"));
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', width: '100vw' }}>
      {/* Left Form */}
      <div className="d-flex flex-column justify-content-center align-items-center bg-white p-4" style={{ flex: 1 }}>
        <div className="card shadow p-4" style={{ width: '100%', maxWidth: '500px' }}>
          <h2 className="text-center mb-4">Register & Create Profile</h2>

          <form onSubmit={handleRegister}>
            {/* User Fields */}
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input className="form-control" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input className="form-control" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>

            {/* Profile Fields */}
            <div className="mb-3">
              <label className="form-label">Skills</label>
              <input className="form-control" value={skills} onChange={(e) => setSkills(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Interests</label>
              <input className="form-control" value={interests} onChange={(e) => setInterests(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label className="form-label">CGPA</label>
              <input className="form-control" type="number" step="0.01" value={cgpa} onChange={(e) => setCgpa(e.target.value)} required />
            </div>

            <button type="submit" className="btn btn-primary w-100">Register</button>
          </form>

          {/* Message & Login Button */}
          {message && (
            <div className="alert alert-info mt-3 text-center">
              {message}
              {showLogin && (
                <button className="btn btn-success mt-3 w-100" onClick={() => navigate('/login')}>
                  🔐 Login Now
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Right Image */}
      <div style={{ flex: 1 }}>
        <img
          src="/register_banner.jpg"
          alt="Register Visual"
          style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
        />
      </div>
    </div>
  );
}

export default Register;
