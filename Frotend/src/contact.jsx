// src/Contact.jsx
import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [responseMsg, setResponseMsg] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponseMsg('');
    setError('');

    try {
      const res = await axios.post('https://localhost:7139/api/contact/send', formData);
      setResponseMsg(res.data.message || 'Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setError('Failed to send message. Please try again later.');
    }
  };

  return (
    <div style={{ width: '100vw', background: 'linear-gradient(to right, #f2f7ff, #e0ecff)', margin: 0, padding: 0 }}>
      <div className="container py-5">
        <h1 className="text-center fw-bold mb-2">Contact Us</h1>
        <p className="text-center text-muted mb-5">
          We'd love to hear from you. Whether it's feedback, questions, or ideas — send us a message.
        </p>

        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow-lg p-4 border-0 rounded-4">
              <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    name="name"
                    id="floatingName"
                    className="form-control"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="floatingName">Name</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="email"
                    name="email"
                    id="floatingEmail"
                    className="form-control"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="floatingEmail">Email</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="text"
                    name="subject"
                    id="floatingSubject"
                    className="form-control"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="floatingSubject">Subject</label>
                </div>

                <div className="form-floating mb-3">
                  <textarea
                    name="message"
                    id="floatingMessage"
                    className="form-control"
                    placeholder="Message"
                    style={{ height: '150px' }}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="floatingMessage">Message</label>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100"
                  style={{ transition: 'all 0.3s ease' }}
                >
                  Send Message
                </button>

                {/* ✅ Feedback Messages */}
                {responseMsg && <div className="alert alert-success mt-3">{responseMsg}</div>}
                {error && <div className="alert alert-danger mt-3">{error}</div>}
              </form>
            </div>

            {/* ✅ Optional Contact Info Section */}
            <div className="text-center mt-5">
              <h5>Email us: support@careeradvisor.ai</h5>
              <p>We typically respond within 24 hours on weekdays.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
