import React, { useState, useEffect } from "react";
import "../../CSS/Auth/profile.css";
import Navbar from "../Homepage/Navbar";

const Profile = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [workspaces, setWorkspaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const userEmail = localStorage.email;

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!userEmail) {
          setError("No user email found in localStorage");
          setLoading(false);
          return;
        }

        const response = await fetch(
          `http://localhost:5000/api/profile?email=${userEmail}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch profile data");
        }
        const data = await response.json();
        setUserDetails(data.user);
        setWorkspaces(data.workspaces);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userEmail]);

  if (loading) {
    return (
      <div className="profile-container">
        <div className="loading-state">
          <div className="loading-spinner"></div>
          <div className="loading-text">Loading your profile...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="profile-container">
        <div className="error-state">
          <div className="error-content">
            <div className="error-icon">!</div>
            <div className="error-message">Oops! Something went wrong</div>
            <div className="error-description">{error}</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
    <Navbar/>
    <div className="profile-container">
      <div className="profile-header">
        <h1 className="profile-title">{userDetails.firstName} {userDetails.lastName}</h1>
        <p className="profile-subtitle">
          Manage your account and workspace information
        </p>
      </div>

      <div className="profile-wrapper">
        <div className="profile-card">
          <div className="card-header">
            <div className="card-icon"></div>
            <h2 className="card-title">Personal Information</h2>
          </div>

          {userDetails ? (
            <div className="user-info">
              <div className="info-row">
                <span className="info-label">Name:</span>
                <span className="info-value">
                  {userDetails.firstName} {userDetails.lastName}
                </span>
              </div>
              <div className="info-row">
                <span className="info-label">Email:</span>
                <span className="info-value">{userDetails.email}</span>
              </div>
              <div className="info-row">
                <span className="info-label">Role:</span>
                <span className="info-value">
                  {userDetails.role || "Not specified"}
                </span>
              </div>
              
            </div>
          ) : (
            <div className="no-user-details">
              <p>User details not found.</p>
            </div>
          )}
        </div>

        <div className="workspaces-section">
          <div className="profile-card">
            <div className="card-header">
              <div className="card-icon"></div>
              <h2 className="card-title">Your Workspaces</h2>
            </div>

            {workspaces.length > 0 ? (
              <div className="workspace-grid">
                {workspaces.map((workspace, index) => (
                  <div key={index} className="workspace-card">
                    <h3 className="workspace-name">{workspace.name}</h3>
                    <p className="workspace-description">
                      {workspace.description}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="no-workspaces">
                <p>You have not created any workspaces yet.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Profile;
