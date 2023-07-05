import React from "react";
import Link from "next/link";

const LoginForm = () => {
  return (
    <>
      <div className="login-area ptb-100">
        <div className="container">
          <div className="login-form">
            <h2>Login Here</h2>
            <p>Welcome Back, Login To Your Account</p>

            <form>
              <div className="form-group">
                <label>User Name or Email Address *</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="User name or email address"
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="8-25 character password"
                />
              </div>

              <div className="row align-items-center">
                <div className="col-lg-6 col-md-6 col-sm-6 remember-me-wrap">
                  <p>
                    <input type="checkbox" id="test2" />
                    <label htmlFor="test2">Remember me</label>
                  </p>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-6 lost-your-password-wrap">
                  <Link href="/forgot-password">
                    <a className="lost-your-password">
                      Lost your password?
                    </a>
                  </Link>
                </div>
              </div>

              <button type="submit" className="default-btn">
                Login Now
              </button>

              <div className="account-text">
                <span>
                  Don’t have an account?{" "}
                  <Link href="/register"><a>Create Account</a></Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
