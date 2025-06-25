import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // ⬅️ Add this import

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // ⬅️ Add this hook

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("Logging in...");

    try {
      const response = await axios.post('https://localhost:7139/api/Users/login', {
        email,
        password,
      });

      const { userId, name, message: serverMsg } = response.data;

      // ✅ Save to localStorage
      localStorage.setItem("userId", userId);
      localStorage.setItem("userName", name);

      // ✅ Optional: Call parent if needed
      if (onLogin) {
        onLogin(userId, name);
      }

      // ✅ Redirect to profile page
      navigate("/profile");

    } catch (error) {
      console.error("❌ Login error:", error);
      setMessage(error.response?.data?.message || '❌ Login failed: No server response');
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', width: '100vw', margin: 0, padding: 0 }}>
      
      {/* Left Side - Form */}
      <div className="d-flex flex-column justify-content-center align-items-center bg-white p-4" style={{ flex: 1 }}>
        <div className="card shadow p-4" style={{ width: '100%', maxWidth: '500px' }}>
          <h2 className="text-center mb-4">🔐 Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                className="form-control"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                className="form-control"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-success w-100">Login</button>
          </form>

          {message && (
            <div className="alert alert-info mt-3" role="alert">
              {message}
            </div>
          )}
        </div>
      </div>

      {/* Right Side - Image */}
      <div style={{ flex: 1 }}>
        <img
          src="/register_banner.jpg"
          alt="Login Illustration"
          style={{
            width: '100%',
            height: '100vh',
            objectFit: 'cover',
            display: 'block'
          }}
        />
      </div>
    </div>
  );
}

export default Login;
