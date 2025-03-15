import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Sign in attempted with Email: " + email);
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow-lg text-center" style={{ width: "400px" }}>
        <h2 className="mb-4">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 text-start">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3 text-start">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Sign In</button>
        </form>
      </div>
    </div>
  );
}
