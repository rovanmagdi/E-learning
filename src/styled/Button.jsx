import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { GoogleLogin } from 'react-google-login';
//Navbar
export const StyledButton = styled(Button)(({ theme }) => ({
  textTransform: "capitalize",
  backgroundColor: ` ${theme.palette.secondary.light}`,
  color: `${theme.palette.secondary.main}`,
  border: `1px solid ${theme.palette.primary.main}`,
  margin: "10px 10px 10px 30px",
  borderRadius: "10px",
  padding: "10px 20px 10px 20px",
  "&:hover": {
    backgroundColor: ` ${theme.palette.primary.main}`,
    color: ` ${theme.palette.secondary.light}`,
  },
}));
//NavbarDrawer
export const StyledButtonDrawar = styled(Button)(({ theme }) => ({
  textTransform: "capitalize",
  border: `1px solid ${theme.palette.primary.main}`,
  height: "40px",
  margin: "10px",

  "&:hover": {
    backgroundColor: ` ${theme.palette.primary.main}`,
    color: ` ${theme.palette.secondary.light}`,
  },
}));
//Footer
export const StyledButtonFooter = styled(Button)(({ theme }) => ({
  backgroundColor: ` ${theme.palette.primary.main}`,
  padding: "16px 20px 16px 20px",
  textTransform: "capitalize",
  fontWeight: "bold",
  marginTop: "20px",
  color: ` ${theme.palette.secondary.light}`,
  borderRadius: "12px",
  "&:hover": {
    backgroundColor: ` ${theme.palette.secondary.main}`,
  },
}));



//regester
export const StyledGreenButton = styled(Button)(({ theme }) => ({
  // backgroundColor:'#309255',
  marginTop:'20px',
  borderRadius:'10px',
  padding:'10px',
  // color:'#309255',
  // border:'1px solid #309255',
  boxShadow:'none',
  textTransform:'capitalize',
  fontWeight:'bold',
  fontSize:'1.3em',
  // transition: 'backgroundColor .5s shutter-out-horizontal',
  backgroundImage:' linear-gradient(#212832, #212832), linear-gradient(#309255, #309255)',
  backgroundSize:' 0 100%, auto',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
  transition: 'all .3s ease-out',

  "&:hover": {
    // backgroundColor: `#000`,
    color:' #fff',
    backgroundSize:' 100% 100%, auto',
   
  }, [theme.breakpoints.down('md')]: {
    fontSize:'1em',
  },[theme.breakpoints.down('sm')]: {
    fontSize:'.7em',
  }
}));

export const StyledLightGreenButton = styled(Button)(({ theme }) => ({
  backgroundColor:'#E7F8EE',
  marginTop:'20px',
  marginBottom:'5px',
  borderRadius:'10px',
  padding:'10px',
  color:'#309255',
  border:'1px solid rgba(48,146,85,.2)',
  boxShadow:'none',
  textTransform:'capitalize',
  fontWeight:'bold',
  fontSize:'1.3em',
  transition: 'all .3s ease-out',
  "&:hover": {
    // backgroundColor: `#000`,
    color:' white',
    backgroundColor:'#309255',
   
  },
  [theme.breakpoints.down('md')]: {
    fontSize:'1em',
  },[theme.breakpoints.down('sm')]: {
    fontSize:'.7em',
  }

}));
//Not Found

export const StyledButtonNotFound = styled(Button)(({ theme }) => ({
  marginTop:'20px',
  borderRadius:'10px',
  padding:'15px 25px 15px 25px',
  boxShadow:'none',
  color:"white",
  textTransform:'capitalize',
  backgroundImage:' linear-gradient(#212832, #212832), linear-gradient(#309255, #309255)',
  backgroundSize:' 0 100%, auto',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
  transition: 'all .3s ease-out',
  fontWeight:'bold',

  "&:hover": {
    color:' #fff',
    backgroundSize:' 100% 100%, auto',
   
  }, [theme.breakpoints.down('md')]: {
    fontSize:'1em',
  },[theme.breakpoints.down('sm')]: {
    fontSize:'.7em',
  }
}));
