import { Outlet, Link, Navigate, useNavigate } from "react-router-dom";
import "./App.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

function App() {
  const { logout, token, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <main>
      <div className="sidebar d-flex flex-column flex-shrink-0 p-3 text-white bg-dark">
        <Link
          to="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <span className="fs-4">Spotify-like</span>
        </Link>

        <hr />

        <ul className="nav nav-pills flex-column mb-auto">
          <li>
            <Link to="/public-page" className="nav-link text-white">
              Public Page
            </Link>
          </li>
          <li>
            <Link to="/secret-page" className="nav-link text-white">
              Secret Page
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/login"
              className="nav-link  text-white"
              aria-current="page"
            >
              Login
            </Link>
          </li>
          {token && (
            <li>
              <a onClick={onLogout} href="#" className="nav-link text-white">
                Logout
              </a>
            </li>
          )}
        </ul>
      </div>

      <div className="main-content">
        <Outlet />
      </div>
    </main>
  );
}

export default App;
