import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

function Login() {
  return (
    <div className="login">
      {/* <Link to=""></Link> */}
      <div>
        <img
          className="login__background"
          src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/everything-from-london-collage-of-typical-images-of-the-city-and-history-roger-vandeber.jpg"
        />
      </div>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input type="text" />

          <h5>Password</h5>
          <input type="password" />

          <Button type="submit">Sign-In</Button>
        </form>

        <p>
          By signing-in you agree to the Open-Labs Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <Button className="login__registerButton">
          Create your Open-Labs Account
        </Button>
      </div>
    </div>
  );
}

export default Login;
