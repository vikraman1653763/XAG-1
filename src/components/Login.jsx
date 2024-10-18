import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/login.css';
<<<<<<< HEAD
import { serverUrl } from '../constant';
=======

>>>>>>> c761e88e9f6229914a1f012bc5bffa4867e74579
function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginData = { user, password };
    
<<<<<<< HEAD
    const response = await fetch(`${serverUrl}/api/login`, {
=======
    const response = await fetch('http://localhost:8080/api/login', {
>>>>>>> c761e88e9f6229914a1f012bc5bffa4867e74579
      method: "POST",
      body: JSON.stringify(loginData),
      headers: {
        "Content-Type": "application/json"
      }
    });
    
    const data = await response.json();
    
    if (response.ok) {
      // Store JWT token in local storage
      localStorage.setItem('token', data.token);
      console.log("Logged in successfully");
      setError(null)
      
<<<<<<< HEAD
      navigate('/admin'); 
=======
      navigate('/admin'); // Redirect to admin dashboard or other page
>>>>>>> c761e88e9f6229914a1f012bc5bffa4867e74579
    } else {
      console.log("Invalid username or password");
      setError(data.error)
      
    }
  };

  return (
    <section className="login-container">
      <div className="login-box">
        <form onSubmit={handleSubmit}>
          <div className="user-box">
            <input
              type="text"
              name=""
              required=""
              placeholder="Username"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              />
          </div>
          <div className="user-box">
            <input
              type="password"
              name=""
              required=""
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <center>
            <button className="login-button" type="submit">
              <span className="actual-text">&nbsp;LOGIN&nbsp;</span>
              <span aria-hidden="true" className="hover-text">&nbsp;LOGIN&nbsp;</span>
            </button>
          </center>

        </form>
        {error && (
          <div className="alert alert-danger">
            {error}
          </div>
        )}
      </div>
    </section>
  );
}

export default Login;
