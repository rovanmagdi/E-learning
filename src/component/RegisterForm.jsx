import React from "react";
import TxtUnderline from "../assets/shape-6.webp";
import { Box } from "@mui/material";
import {
  StyledSectionTitle,
  StyledBlackTxt,
  StyledGreenTxt,
  StyledError,
} from "../styled/Typography";
import axios from "axios";

import { StyledFormBox } from "../styled/Box";
import { FormControl, TextField, Button } from "@mui/material";
import { StyledFormInput } from "../styled/TextFiled.jsx";
import { StyledGreenButton, StyledLightGreenButton } from "../styled/Button";
import { useState, useCallback, useEffect } from "react";
import Joi from "joi";

export default function RegisterForm() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [users, setUsers] = useState([]);
  const [errorState, setErrorState] = useState([]);
  const [isValid, setIsValid] = useState(false);
  const { name, email, password, confirmPassword } = user;
  // const [uniqueUserName, setUniqueUserName] = useState(true);
  const BASE_URL = "http://localhost:4200/users";
  // const duplicateName='';
  const [duplicateName, setDuplicateName] = useState('');
  // let errors = [];
  // let users = [];

  useEffect(() => {
    // axios.get(`${BASE_URL}`).then((resp) => {
    //   users = resp.data;
      
    //   // console.log(users);
    // });
    // validations(user).error?.details.forEach((element) => {
    //   errors.push(element.path[0]);
    // });
  },[user,isValid,duplicateName]);

  const handleChange = useCallback((event) => {
    const { name, value } = event.target;
    setUser((user) => ({ ...user, [name]: value }));
    // console.log(user);
    // setDuplicateName(null);
  }, []);

  const validations = (state) => {
    const schema = Joi.object({
      name: Joi.string()
        .required()
        .regex(/^[A-Za-z0-9_-]*$/),

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

  const handleSubmit = () => {
    // setUniqueUserName(true);
    // setDuplicateName('');
    console.log('clicked');
    // let users=[]
    let errors = [];
    axios.get(`${BASE_URL}`).then((resp) => {
      setUsers(resp.data) ;
    });
    // console.log(users);
    validations(user).error?.details.forEach((element) => {
      errors.push(element.path[0]);
    });
    setErrorState(errors);
    errors.length === 0 ? setIsValid(true) : setIsValid(false);
    console.log(errors);
    console.log(isValid);

    if (isValid) {
      // console.log(uniqueUserName);
      // setUniqueUserName(true);
      // users.forEach((element) => {
      //   if(element.name === user.name){
      //     setUniqueUserName(false)
      //     // console.log('match');
      //   }
        
      // });
      setDuplicateName(users.find(el=>el.name===user.name)?.name);
      // console.log(users.find(el=>el.name===user.name)?.name);
      console.log(user);

      if (!duplicateName) {
       
        localStorage.setItem("user", JSON.stringify(user));

        axios.post(`${BASE_URL}`, {
          ...user,
          collection: [],
          archive: [],
          wishlist: [],
          cart: [],
        });
        
    
      }
    }
  };

  return (
    <>
      <StyledFormBox>
        <Box sx={{ position: "relative", display: "inline-block" }}>
          <StyledSectionTitle>
            <StyledBlackTxt>Regester</StyledBlackTxt>{" "}
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
            label="User Name"
            variant="outlined"
            name="name"
            value={name}
            onChange={handleChange}
            fullWidth
          />
          {errorState.find((el) => el === "name") ? (
            <StyledError>
              User name can contains only (letters numbers _ -)
            </StyledError>
          ) : (
            <StyledError></StyledError>
          )}
          {duplicateName ? (
            <StyledError>Duplicate user name</StyledError>
          ) : (
            <StyledError></StyledError>
          )}

          <StyledFormInput
            id="outlined-basic"
            label="Email"
            variant="outlined"
            name="email"
            value={email}
            onChange={handleChange}
            fullWidth
          />
          {errorState.find((el) => el === "email") ? (
            <StyledError> EX: "example@domain.com"</StyledError>
          ) : (
            <StyledError></StyledError>
          )}
          <StyledFormInput
            id="outlined-basic"
            label="Password"
            variant="outlined"
            name="password"
            value={password}
            onChange={handleChange}
            fullWidth
            type="password"
          />
          {errorState.find((el) => el === "password") ? (
            <StyledError>
              Minimum eight characters, at least one letter, one number and one
              special character
            </StyledError>
          ) : (
            <StyledError></StyledError>
          )}

          <StyledFormInput
            id="outlined-basic"
            label="Confirm password"
            variant="outlined"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
            fullWidth
            type="password"
          />
          {errorState.find((el) => el === "confirmPassword") ? (
            <StyledError>Doesn't match password</StyledError>
          ) : (
            <StyledError></StyledError>
          )}
          <StyledGreenButton
            variant="contained"
            fullWidth
            onClick={handleSubmit}
          >
            Create an account
          </StyledGreenButton>
          <StyledLightGreenButton variant="contained" fullWidth>
            Signup with google
          </StyledLightGreenButton>
        </FormControl>
      </StyledFormBox>
    </>
  );
}
