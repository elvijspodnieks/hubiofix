import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "./base.js";
import { AuthContext } from "./Auth.js";

import "./Login.css"

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100">

          <form className="login100-form validate-form" onSubmit={handleLogin}>

          <span className="login100-form-title p-b-26">
						Welcome
					</span>

          <span className="login100-form-title p-b-48">
						<i className="zmdi zmdi-font"></i>
					</span>
          

        <div class="wrap-input100 validate-input" data-validate = "Valid email is: a@b.c">
						<input className="input100" name="email" type="email" />
						<span class="focus-input100" data-placeholder="Email"></span>
					</div>

          <div class="wrap-input100 validate-input" data-validate="Enter password">
						<span class="btn-show-pass">
							<i class="zmdi zmdi-eye"></i>
						</span>
						<input className="input100"name="password" type="password"/>
						<span class="focus-input100" data-placeholder="Password"></span>
					</div>


          <div class="container-login100-form-btn">
						<div class="wrap-login100-form-btn">
							<div class="login100-form-bgbtn"></div>
							<button className="login100-form-btn" type="submit">Log in</button>
						</div>
					</div>



      
        
      </form>
        </div>

      
      </div>

      
    </div>

    
  );
};

export default withRouter(Login);

