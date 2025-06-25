// src/Profile.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [profile, setProfile] = useState(null);
  const [careerSuggestion, setCareerSuggestion] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    if (!userId) {
      navigate("/login");
      return;
    }

    async function fetchProfile() {
      try {
        const response = await axios.get(`https://localhost:7139/api/Profiles/get/${userId}`);
        setProfile(response.data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    }

    fetchProfile();
  }, [userId, navigate]);

  const handleEdit = () => {
  navigate("/profile-form", { state: { profile: profile } });
};


  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("userName");
    navigate("/login");
  };

  const handleGetCareer = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://localhost:7139/api/Profiles/get/${userId}`);
      setCareerSuggestion(response.data.mlOutput);
    } catch (error) {
      console.error("Error getting career suggestion:", error);
    }
    setLoading(false);
  };

  if (!profile) return <p className="text-center mt-5">🔄 Loading profile...</p>;

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        backgroundColor: "white",
        padding: "4rem",
        paddingLeft: "23vw",
        paddingRight: "10vw"
      }}
    >
      <div className="card shadow-lg p-4" style={{ width: "100%", maxWidth: "1200px" }}>
        <div className="card-body p-4">
          <div className="text-center mb-4">
            <h2 className="fw-bold">Welcome, {profile.user?.name}</h2>
            <p className="text-muted">Here’s your profile summary</p>
          </div>

          {/* 🔹 Profile Fields (even & centered) */}
          {/* 🔹 Profile Fields (equal size using Bootstrap row/cols) */}
<div className="row row-cols-1 row-cols-md-2 g-4 mb-4">
  <div className="col">
    <div className="border rounded p-4 h-100">
      <strong>Email:</strong><br />{profile.user?.email}
    </div>
  </div>
  <div className="col">
    <div className="border rounded p-4 h-100">
      <strong>Skills:</strong><br />{profile.skills}
    </div>
  </div>
  <div className="col">
    <div className="border rounded p-4 h-100">
      <strong>Interests:</strong><br />{profile.interests}
    </div>
  </div>
  <div className="col">
    <div className="border rounded p-4 h-100">
      <strong>CGPA:</strong><br />{profile.cgpa}
    </div>
  </div>
</div>


          {/* 🔹 Career Suggestion */}
          {careerSuggestion && (
            <div className="alert alert-success text-center fs-5 fw-semibold mb-4">
              Career Suggestion: <strong>{careerSuggestion}</strong>
            </div>
          )}

          {/* 🔹 Action Buttons */}
          {/* 🔹 Action Buttons */}
<div className="d-flex flex-column gap-2">
  {!careerSuggestion && (
    <button className="btn btn-success w-100" onClick={handleGetCareer} disabled={loading}>
      {loading ? "Analyzing..." : " Get Career Suggestion"}
    </button>
  )}

  <button className="btn btn-outline-primary w-100" onClick={handleEdit}>
    Edit Profile
  </button>

  {careerSuggestion && (
    <button className="btn btn-outline-danger w-100" onClick={handleLogout}>
      Logout
    </button>
  )}
</div>

        </div>
      </div>
    </div>
  );
}

export default Profile;
