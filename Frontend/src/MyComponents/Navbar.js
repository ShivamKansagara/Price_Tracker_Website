import React from "react";
import "./Underlinecomp.css";
import { Route, Routes, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check the user's login status here (e.g., by verifying the token)
    const token = localStorage.getItem("token"); // Assuming the token is stored in localStorage
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    // Perform logout logic here (e.g., clearing the token and redirecting to the login page)
    localStorage.removeItem("token"); // Assuming the token is stored in localStorage
    setIsLoggedIn(false);
    // Redirect to the login page
    // navigate("/Login_SignUp"); // Uncomment this line if you are using react-router-dom's useNavigate hook
    window.location.href = "/"; // Use this line if you want to redirect without react-router-dom
  };

  let backnavcolor = {
    backgroundColor: "#c5d5cb",
  };

  const navigate = useNavigate();

  return (
    <>
      <div>
        <nav
          className="navbar fixed-top navbar-expand-lg "
          style={backnavcolor}
        >
          <div className="container-fluid">
            <Link
              className="navbar-brand text-light underline-on-hover text-dark font-weight-bold"
              to="/"
            >
              PriceHub
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse "
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active text-light underline-on-hover text-dark"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-light underline-on-hover text-dark"
                    to="/about"
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-light text-dark"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a
                        className="dropdown-item text-dark underline-on-hover"
                        href="#"
                      >
                        Action
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item text-dark underline-on-hover"
                        href="#"
                      >
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a
                        className="dropdown-item text-dark underline-on-hover"
                        href="#"
                      >
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <form className="d-flex mr-3" role="search">
                  {isLoggedIn ? (
                    <Link to="/ShowProducts">
                      <button className="btn btn-dark" type="submit">
                        Click here to Search
                      </button>
                    </Link>
                  ) : (
                    <Link to="/Login_SignUp">
                      <button
                        className="btn btn-dark"
                        onClick={() => {
                          window.alert("LOGIN to search");
                        }}
                      >
                        Click here to Search
                      </button>
                    </Link>
                  )}
                </form>
              </ul>

              <ul className="navbar-nav mr-3 mb-2 mb-lg-0">
                <li className="nav-item d-flex">
                  {isLoggedIn ? (
                    <button className="btn btn-primary" onClick={handleLogout}>
                      LogOut
                    </button>
                  ) : (
                    <Link
                      className="nav-link active text-dark"
                      aria-current="page"
                      to="/Login_SignUp"
                    >
                      <button className="btn btn-primary">Login/SignUp</button>
                    </Link>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
