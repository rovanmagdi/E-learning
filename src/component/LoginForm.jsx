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
import { FormControl } from "@mui/material";
import { StyledFormInput } from "../styled/TextFiled.jsx";
import { StyledGreenButton, StyledLightGreenButton } from "../styled/Button";
import { useState, useCallback, useRef, useContext } from "react";
import axios from "axios";
import { AppContext } from "../context";

export default function LoginForm() {
  const [user, setUser] = useState({
    userNameOrEmail: "",
    inputPassword: "",
  });
  const BASE_URL = "http://localhost:4200/users";
  const [errorState, setErrorState] = useState(false);
  const isValid = useRef(false);
  const { userNameOrEmail, inputPassword } = user;
  const users = useRef([]);
  
  const { currentUser, setCurrentUser } = useContext(AppContext);

  const handleChange = useCallback((event) => {
    const { name, value } = event.target;
    setUser((user) => ({ ...user, [name]: value }));
  }, []);

  const handleLogin = async () => {
    setErrorState(false);
    //  setCurrentUser( {});

    await axios.get(`${BASE_URL}`).then((resp) => {
      users.current = resp.data;
    });

    isValid.current = await users.current.find(
      (el) =>
        (el.name === userNameOrEmail || el.email === userNameOrEmail) &&
        el.password === inputPassword
    );
    if (isValid.current) {
      setErrorState(false);
      
      await setCurrentUser(
        users.current.find(
          (el) =>
          (el.name === userNameOrEmail || el.email === userNameOrEmail) &&
          el.password === inputPassword
          )
          );
          // console.log(await currentUser);
          localStorage.setItem("user", JSON.stringify(currentUser));

      console.log("logged in");
    } else {
      setErrorState(true);
    }
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
          <StyledLightGreenButton variant="contained" fullWidth>
            Login with google
          </StyledLightGreenButton>
        </FormControl>
      </StyledFormBox>
    </>
  );
}
