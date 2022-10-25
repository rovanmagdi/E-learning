import React from "react";
import TxtUnderline from "../assets/shape-6.webp";
import { Box } from "@mui/material";
import {
  StyledSectionTitle,
  StyledBlackTxt,
  StyledGreenTxt,
  StyledError,
} from "../styled/Typography";

import { StyledFormBox } from "../styled/Box";
import { FormControl, Button } from "@mui/material";
import { StyledFormInput } from "../styled/TextFiled.jsx";
import { StyledGreenButton, StyledLightGreenButton } from "../styled/Button";
import { useState, useCallback, useRef, useContext, useEffect } from "react";
import axios from "axios";
import { AppContext } from "../context";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "react-google-login";

export default function LoginForm() {
  const [user, setUser] = useState({
    userNameOrEmail: "",
    inputPassword: "",
  });
  const BASE_URL = "http://localhost:4200/users";
  const [errorState, setErrorState] = useState(false);
  const isValid = useRef(false);
  const { userNameOrEmail, inputPassword } = user;
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(AppContext);
  const clientId =
    "1007166584351-kk9dpm5hcrki1sbad0vuamgalgk1d1c1.apps.googleusercontent.com";

  useEffect(() => {
    axios.get(`${BASE_URL}`).then((resp) => {
      setUsers(resp.data);
    });
  }, [users]);

  const handleChange = useCallback((event) => {
    const { name, value } = event.target;
    setUser((user) => ({ ...user, [name]: value }));
  }, []);

  const handleLogin = () => {
    setErrorState(false);

    isValid.current = users.find(
      (el) =>
        (el.name === userNameOrEmail || el.email === userNameOrEmail) &&
        el.password === inputPassword
    );
    if (isValid.current) {
      setErrorState(false);
      setCurrentUser(
        users.find(
          (el) =>
            (el.name === userNameOrEmail || el.email === userNameOrEmail) &&
            el.password === inputPassword
        )
      );

      // console.log("logged in");
      navigate("/home");
    } else {
      setErrorState(true);
    }
  };
  const handleSignup = () => {
    navigate("/signup");
  };
  const onSuccess = (res) => {
    const { name, email } = res.profileObj;

    const googleUser = users.find(
      (el) => el.name === name || el.email === email
    );
    console.log(googleUser);
    if (googleUser) {
      localStorage.setItem("user", JSON.stringify({ name, email, collection: [],
        archive: [],
        wishlist: [],
        cart: [], }));
      setCurrentUser({
        ...googleUser,
      });
      navigate("/home");
    } else {
      localStorage.setItem("user", JSON.stringify({ name, email }));
      setCurrentUser({
        name: name,
        email: email,
        collection: [],
        archive: [],
        wishlist: [],
        cart: [],
      });
      axios.post(`${BASE_URL}`, {
        name: name,
        email: email,
        collection: [],
        archive: [],
        wishlist: [],
        cart: [],
      });
      navigate("/home");
    }
  };
  const onFailure = (err) => {
    console.log("failed:", err);
  };

  return (
    <>
      <StyledFormBox>
        <Box sx={{ position: "relative", display: "inline-block" }}>
          <StyledSectionTitle>
            <StyledBlackTxt>Login</StyledBlackTxt>{" "}
            <StyledGreenTxt>Now</StyledGreenTxt>
          </StyledSectionTitle>
          <Box
            component="img"
            src={TxtUnderline}
            sx={{
              position: "absolute",
              bottom: "-8px",
              right: "0",
              width: "40%",
            }}
          ></Box>
        </Box>

        <FormControl sx={{ display: "block", my: 4 }}>
          <StyledFormInput
            id="outlined-basic"
            label="Username or Email"
            variant="outlined"
            name="userNameOrEmail"
            value={userNameOrEmail}
            onChange={handleChange}
            fullWidth
          />
          <StyledFormInput
            id="outlined-basic"
            label="Password"
            variant="outlined"
            name="inputPassword"
            value={inputPassword}
            onChange={handleChange}
            fullWidth
            type="password"
          />
          {errorState ? (
            <StyledError>Incorrect email or password</StyledError>
          ) : (
            <StyledError></StyledError>
          )}
          <StyledGreenButton
            variant="contained"
            fullWidth
            onClick={handleLogin}
          >
            Login
          </StyledGreenButton>
          <GoogleLogin
            clientId={clientId}
            render={(renderProps) => (
              <StyledLightGreenButton
                variant="contained"
                fullWidth
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                Sign in with Google
              </StyledLightGreenButton>
            )}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={"single_host_origin"}
            isSignedIn={false}
          />
          <StyledBlackTxt>Don't have an account?</StyledBlackTxt>{" "}
          <Button onClick={handleSignup}>
            <StyledGreenTxt>Sign up</StyledGreenTxt>
          </Button>
        </FormControl>
      </StyledFormBox>
    </>
  );
}
