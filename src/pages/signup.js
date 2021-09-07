import React, { useState, useContext } from "react";
import FooterContainer from "../containers/footer";
import HeaderContainer from "../containers/header";
import Form from "../components/form/index.js";
import { FirebaseContext } from "./../context/firebase";
import * as ROUTES from "../constants/routes";
import { useHistory } from "react-router";

const Signup = () => {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [error, setError] = useState("");

  const isInvalid = userName === "" || password === "" || emailAddress === "";

  const handleSignup = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((result) =>
        result.user
          .updateProfile({
            displayName: userName,
            photoUrl: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            history.push(ROUTES.BROWSE);
          })
      )
      .catch((error) => {
        setUserName("");
        setEmailAddress("");
        setPassword("");
        setError(error.message);
      });
  };
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignup} method="POST">
            <Form.Input
              placeholder="UserName"
              value={userName}
              onChange={({ target }) => setUserName(target.value)}
            />
            <Form.Input
              placeholder="Email Address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)} //destructuring
            />
            <Form.Input
              type="password"
              autoComplete="off"
              placeholder="Password "
              value={password}
              onChange={({ target }) => setPassword(target.value)} //destructuring
            />
            <Form.Submit disabled={isInvalid} type="submit">
              Sign Up
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            Already a user? <Form.Link to="/signin">Sign in</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
};

export default Signup;
