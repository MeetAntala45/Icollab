import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../CSS/Homepage/navbar.css";
import logo from "../../Images/logo.png";
import { FaUserCircle } from "react-icons/fa";
import { FiPlusCircle, FiSearch, FiUser, FiLogOut } from "react-icons/fi";

const IcollabNavbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const storedUser = localStorage.getItem("email");

    if (token) {
      setIsAuthenticated(true);
      setUserName(storedUser || "User");
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userName");
    setIsAuthenticated(false);
    navigate("/login");
  };

  const truncateEmail = (email) => {
    return email.length > 15 ? `${email.substring(0, 15)}...` : email;
  };

  return (
    <header className="icollab-navbar">
      <div className="icollab-container">
        <Link to="/" className="icollab-logo-link">
          <span className="icollab-logo-text">Icollab</span>
        </Link>
        <nav className="icollab-nav-links">
          <ul>
            {isAuthenticated && (
              <li>
                <Link to="/dashboard">Workspaces</Link>
              </li>
            )}
            {isAuthenticated && (
              <li>
                <Link to="/task">Taskboard</Link>
              </li>
            )}
            {isAuthenticated && (
              <li>
                <Link to="/about">About</Link>
              </li>
            )}
          </ul>
        </nav>
        <div className="icollab-action-buttons">
          <div className="icollab-search-bar">
            <input type="text" placeholder="Search..." />
          </div>
          <button className="icollab-workspace-btn" title="Create Workspace">
            <FiPlusCircle />
            {isAuthenticated ? (
              <Link to="/workspace/create">Create Workspace</Link>
            ) : (
              <Link to="/login">Create Workspace</Link>
            )}
          </button>
          {isAuthenticated ? (
            <>
            <div className="icollab-user-menu">
              <button className="icollab-user-menu-btn">
                <FaUserCircle className="icollab-avatar" onClick={() => navigate("/profile")}/>
                <span onClick={() => navigate("/profile")}>{truncateEmail(userName)}</span>
              </button>
            </div>
            <div onClick={handleLogout}>
              <Link to="/" className="icollab-login-btn">
                <FiLogOut />Log out
              </Link>
            </div>
            </>
          ) : (
            <div className="icollab-auth-buttons">
              <Link to="/login" className="icollab-login-btn">
                Sign In
              </Link>
              <Link to="/signup" className="icollab-signup-btn">
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default IcollabNavbar;
