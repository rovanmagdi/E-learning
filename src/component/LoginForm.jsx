import React from "react";
import TxtUnderline from "../assets/shape-6.webp";
import { Box, Avatar, Typography } from "@mui/material";
import {
  StyledSectionTitle,
  StyledBlackTxt,
  StyledGreenTxt,
  StyledError,
} from "../styled/Typography";

import { StyledFormBox } from "../styled/Box";
import { FormControl, TextField, Button } from "@mui/material";
import { StyledFormInput } from "../styled/TextFiled.jsx";
import { StyledGreenButton, StyledLightGreenButton } from "../styled/Button";
import { useState, useCallback } from "react";
import Joi from "joi";

export default function LoginForm() {
  const [user, setUser] = useState({
    userNameOrEmail:'',
    inputPassword: "",
   
  });
  const [errorState, setErrorState] = useState(true);
  const [isNotValid, setIsNotValid] = useState(true);
  const { userNameOrEmail,inputPassword } = user;
  const userInfoObj = JSON.parse(`${localStorage.getItem("user")}`);
  const {name,email,password} = userInfoObj;

  const handleChange = useCallback((event) => {
    // setErrorState(true);
    const { name, value } = event.target;
    setUser((user) => ({ ...user, [name]: value }));
    // console.log(user);
  }, []);

  const validations = (state) => {
    const schema = Joi.object({
      name: Joi.string()
        .required()
        .regex(/^[a-zA-Z\s]*$/),

      email: Joi.string()
        .required()
        .regex(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/),
      password: Joi.string()
        .required()
        .regex(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
        ),
      confirmPassword: Joi.any().valid(Joi.ref("password")).required(),
    });

    return schema.validate({ ...state }, { abortEarly: false });
  };

  const handleLogin = () => {
    // let errors = [];

    // validations(user).error?.details.forEach((element) => {
    //   errors.push(element.path[0]);
    // });
    // setErrorState(errors);
    // errors.length===0?setIsValid(true):setIsValid(false);

    // if(isValid){
    //   localStorage.setItem('user',JSON.stringify(user));
    // }

    if(userNameOrEmail===name || userNameOrEmail===email){
        if(inputPassword===password){
            setErrorState(false)
            setIsNotValid(false)
        } else{
            setErrorState(true);
        } 
            
        
    }

    if (!errorState){
        console.log('logged in');
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
         {
            isNotValid?(
                <StyledError>Incorrect email or password</StyledError>
              ) : (
                <StyledError></StyledError>
              )
         }
        
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
