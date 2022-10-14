import styled from "@emotion/styled";
import { Box } from "@mui/material";

//for all pages
export const StyledPageCover = styled(Box)(({ theme }) => ({
  minHeight: "500px",
  width: "100%",
  backgroundColor: "#E7F8EE",
  position: "relative",
  [theme.breakpoints.down("md")]: {
    minHeight: "500px",
  },[theme.breakpoints.down("sm")]: {
   minHeight: "300px",
 },
}));

export const StyledCircularBorder = styled(Box)(({ theme }) => ({
  width: "10%",
  height: "20%",
  // textAlign: 'center',
  border: "1px solid rgba(48,146,85,0.2)",
  borderRadius: "50%",
  padding: "10px",
  position: "absolute",
  bottom: "20%",
  right: "30%",
  alignContent: "center",
  alignItems: "center",
  [theme.breakpoints.down('md')]: {
   // width: "8%",
  height: "15%",
 }, [theme.breakpoints.down('md')]: {
   // width: "8%",
  height: "12%",
 },
}));

export const StyledCircularBox = styled(Box)(({ theme }) => ({
  width: "70%",
  height: "100%",
  //  textAlign: 'center',
  borderRadius: "50%",
  padding: "10px",
  backgroundColor: "#309255",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  [theme.breakpoints.down('md')]: {
   width: "60%",
  height: "60%",
 },[theme.breakpoints.down('md')]: {
   width: "50%",
   height: "50%",
 },
}));

export const CoverTxtBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  display: "inline-block",
  bottom: "30%",
  
}));

//Footer
export const StyledFooterImage = styled(Box)(({ theme }) => ({
  width: "100px",
  // left: "0px",
  padding:"30px",
  top: "50px",
  position: "absolute",
  animation: "down 0.8s infinite alternate",
  "  @keyframes down": {
    "0%": {
      transform: "translateY(0)",
    },

    " 100% ": {
      transform: "translateY(-10px);",
    },
  },
}));

export const StyledFooterSocailMedai = styled(Box)(({ theme }) => ({
  display: "flex",
                  aligns: "center",
                  justifyContent: "space-between",
                  width: "40%",
                  marginTop: "12px",
}));
//Courses
export const StyledBoxSearch = styled(Box)(({ theme }) => ({
  backgroundColor:`${theme.palette.primary.main}`,
  padding:"8px",
  borderRadius:"5px",
  color:`${theme.palette.secondary.light}`

}));


//signup page
export const StyledRegesterPhotoBox = styled(Box)(({ theme }) => ({
  backgroundColor:'#E7F8EE',
  borderRadius:'10px',
  position:'relative',
  paddingTop:'50px',
  textAlign:'center',
 
}));

export const StyledRegesterCircularBox = styled(Box)(({ theme }) => ({
  width: "30%",
  height: "27%",
  //  textAlign: 'center',
  borderRadius: "50%",
  padding: "40px",
  backgroundColor: "#309255",
  position: "absolute",
  top: "10%",
  left: "25%",
  textAlign: "left",
  [theme.breakpoints.down('md')]: {
    // left: "25%",
  // height: "23%",
  padding: "20px",


  },
  
}));

export const StyledFormBox = styled(Box)(({ theme }) => ({
 
  textAlign: "center",
  padding:'20px 70px 0px 70px',
  // [theme.breakpoints.down('md')]: {
  //   width: "60%",
  //  height: "60%",
  // },
  [theme.breakpoints.down('md')]: {
    padding:'0px',

  },
  
}));

//
export const StyledBoxNotFound = styled(Box)(({ theme }) => ({
  color: `${theme.palette.primary.main}`,"&:before":{
    position:" absolute",
    content: `''`,
    backgroundImage:"url(https://htmldemo.net/edule/eduLe/assets/images/shape/shape-4.png)",
    backgroundPosition:" center center",
    backgroundSize:" cover",
    backgroundRepeat:" no-repeat",
    width:"260px",
    height:" 21px",
    
    transform:" translateY(300%)",

}
 
}));
