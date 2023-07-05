import React from "react";
import Link from "next/link";

const RegisterForm = () => {
  return (
    <>
      <div className="register-area ptb-100">
        <div className="container">
          <div className="register-form">
            <h2>Create Your Account</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod tempor incididunt ut labore.
            </p>

            <form>
              <div className="form-group">
                <label>User Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="User name"
                />
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email address"
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                />
              </div>

              <div className="form-group">
                <label>Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm Password"
                />
              </div>

              <p className="description">
                The password should be at least eight characters long. To make
                it stronger, use upper and lower case letters, numbers, and
                symbols like ! ? $ % ^ & )
              </p>

              <button type="submit" className="default-btn">
                Create Account
              </button>

              <div className="account-text">
                <span>
                  Already have an account? <Link href="/login"><a>Login</a></Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
