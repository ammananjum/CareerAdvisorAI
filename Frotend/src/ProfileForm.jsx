import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

function ProfileForm() {
  const location = useLocation();
  const navigate = useNavigate();

  const profileFromState = location.state?.profile;
  const userId = localStorage.getItem("userId");

  const [skills, setSkills] = useState("");
  const [interests, setInterests] = useState("");
  const [cgpa, setCgpa] = useState("");
  const [message, setMessage] = useState("");
  const [showLoginButton, setShowLoginButton] = useState(false);

  useEffect(() => {
    if (profileFromState) {
      setSkills(profileFromState.skills || "");
      setInterests(profileFromState.interests || "");
      setCgpa(profileFromState.cgpa ? profileFromState.cgpa.toString() : "");
    }
  }, [profileFromState]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const profileData = {
      userId: parseInt(userId),
      skills,
      interests,
      cgpa: parseFloat(cgpa),
      mlOutput: ""
    };

    try {
      let response;
      if (profileFromState && profileFromState.id) {
        response = await axios.put(
          `https://localhost:7139/api/profiles/update/${profileFromState.id}`,
          profileData
        );
      } else {
        response = await axios.post(
          "https://localhost:7139/api/profiles/create",
          profileData
        );
      }

      setMessage("✅ Profile saved successfully!");
      setShowLoginButton(true); // Only show button if success
    } catch (error) {
      setMessage(error.response?.data || "❌ Error saving profile");
      setShowLoginButton(false); // Hide login button if failed
    }
  };

  const handleLoginNow = () => {
    navigate("/login");
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        backgroundColor: "white",
        padding: "4rem",
        paddingLeft: "20vw",
        paddingRight: "10vw"
      }}
    >
      <div className="card shadow-lg p-4" style={{ width: "100%", maxWidth: "1200px" }}>
        <div className="card-body p-4">
          <div className="text-center mb-4">
            <h2 className="fw-bold">
              {profileFromState ? "✏️ Edit Profile" : "📝 Create Profile"}
            </h2>
            <p className="text-muted">Update your skills, interests, and CGPA</p>
          </div>

          {/* 🔹 Form */}
          <form onSubmit={handleSubmit}>
            <div className="row row-cols-1 row-cols-md-2 g-4 mb-4">
              <div className="col">
                <label className="form-label">Skills</label>
                <input
                  type="text"
                  className="form-control"
                  value={skills}
                  onChange={(e) => setSkills(e.target.value)}
                  required
                />
              </div>
              <div className="col">
                <label className="form-label">Interests</label>
                <input
                  type="text"
                  className="form-control"
                  value={interests}
                  onChange={(e) => setInterests(e.target.value)}
                  required
                />
              </div>
              <div className="col">
                <label className="form-label">CGPA</label>
                <input
                  type="number"
                  step="0.01"
                  className="form-control"
                  value={cgpa}
                  onChange={(e) => setCgpa(e.target.value)}
                  required
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-100">
              {profileFromState ? "Update Profile" : "Save Profile"}
            </button>
          </form>

          {/* 🔹 Message & Login Button */}
          {message && (
            <div className="alert alert-info text-center mt-4">
              {message}
              {showLoginButton && (
                <div className="mt-3">
                  <button className="btn btn-success w-100" onClick={handleLoginNow}>
                    🔐 Login Now
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfileForm;
