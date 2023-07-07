import React, { useState } from "react";
import "./LoginSignup.css";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState(""); // New state variable for login status

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Create an object with the form data
    const formData = {
      username: username,
      password: password,
    };

    // Send a POST request to the backend for login
    fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          // Handle login error
          setLoginStatus(data.message);
        } else {
          // Login successful, retrieve the token and redirect to the home page
          const token = data.token;
          localStorage.setItem("token", token);
          console.log("Login successful");
          // Use the token for further API requests or store it in localStorage
          window.location.href = "/"; // Redirect to the home page
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="login">
      {loginStatus && <p className="text-dark">{loginStatus}</p>}{" "}
      {/* Display login status message */}
      <form>
        <div className="group">
          <label htmlFor="user" className="label">
            Username
          </label>
          <input
            id="user"
            type="text"
            className="input"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="group">
          <label htmlFor="pass" className="label">
            Password
          </label>
          <input
            id="pass"
            type="password"
            className="input"
            data-type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="group">
          <input
            type="submit"
            className="button bg-dark text-light"
            value="Sign In"
            onClick={handleLogin}
          />
        </div>
      </form>
      <div className="hr"></div>
      <div className="foot">
        <a href="#">Forgot Password?</a>
      </div>
    </div>
  );
};

const SignupForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [email, setEmail] = useState("");
  const [registrationStatus, setRegistrationStatus] = useState(""); // New state variable for registration status

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (password !== repeatPassword) {
      setRegistrationStatus("Please enter the same password again.");
      return;
    }
    // Create an object with the form data
    const formData = {
      username: username,
      password: password,
      email: email,
    };

    // Send a POST request to the backend for registration
    fetch("http://localhost:5000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          // Handle registration error
          setRegistrationStatus(data.message);
        } else {
          // Registration successful, redirect to the login page
          console.log("Registration successful");
          setRegistrationStatus(
            "Registration successful proceed to login page"
          );
          navigate("/Login_SignUp"); // Redirect to the login page
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="sign-up-form">
      {registrationStatus && <p className="text-dark">{registrationStatus}</p>}{" "}
      {/* Display registration status message */}
      <form>
        <div className="group">
          <label htmlFor="user" className="label">
            Username
          </label>
          <input
            id="user"
            type="text"
            className="input"
            placeholder="Create your Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="group text-dark">
          <label htmlFor="pass" className="label">
            Password
          </label>
          <input
            id="pass"
            type="password"
            className="input"
            data-type="password"
            placeholder="Create your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="group">
          <label htmlFor="pass" className="label">
            Repeat Password
          </label>
          <input
            id="pass"
            type="password"
            className="input"
            data-type="password"
            placeholder="Repeat your password"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
        </div>
        <div className="group">
          <label htmlFor="pass" className="label">
            Email Address
          </label>
          <input
            id="pass"
            type="text"
            className="input"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <br />
        <div className="group">
          <input
            type="submit"
            className="button bg-dark text-light"
            value="Sign Up"
            onClick={handleRegister}
          />
        </div>
      </form>
      <div className="hr"></div>
      <div className="foot">
        <label className="foot" htmlFor="tab-1">
          Already a Member?
        </label>
      </div>
    </div>
  );
};

export default function LoginSignUp() {
  return (
    <>
      <br />
      <br />
      <br />
      <div className="Container m-3">
        <div className="row">
          <div className="col-md-6 mx-auto p-0">
            <div className="card">
              <div className="login-box">
                <div className="login-snip">
                  <input
                    id="tab-1"
                    type="radio"
                    name="tab"
                    className="sign-in"
                    checked
                  />
                  <label htmlFor="tab-1" className="tab">
                    Login
                  </label>
                  <input
                    id="tab-2"
                    type="radio"
                    name="tab"
                    className="sign-up"
                  />
                  <label htmlFor="tab-2" className="tab">
                    Sign Up
                  </label>
                  <div className="login-space">
                    <LoginForm />
                    <SignupForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
