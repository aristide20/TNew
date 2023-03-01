import MobileMenuBox from "../../components/MobileMenuBox";
import CssBaseline from '@mui/material/CssBaseline';
import { color } from '../../theme';
import { Box,  useMediaQuery } from '@mui/material';
import { useSelector } from "react-redux";
//import {useState } from 'react';
//import { useDispatch } from "react-redux";
//import { setLogout } from "../../state/UserSlice";
import Form from "../../components/Form2";


const Body = () => {

    const color2 = color.gray.niveau20;
    //const [isCompact, setIsCompact] = useState(false);
    //const [hasAccount, setHasAccount] = useState(false);
    const isSmallScreen = useMediaQuery("(min-width: 1000px)");
    //const isSmallScreen2 = useMediaQuery("(min-width: 600px)");
    //const isMobileMenuToggledState = useSelector((state) => state.UserReducer.isMobileMenuToggled);
    const isMobileMenuToggledState = useSelector((state) => state.persistedReducer.isMobileMenuToggled);
   // const color1 = color.blue.niveau100;

  // const dispatch = useDispatch();
   // On commence par vider le state global user avant de login
  // dispatch(setLogout());
        
    return(
          <Box position="static" sx={{backgroundColor: color2,
                                      marginTop:"90px", 
                                      width:"100%", 
                                      paddingTop:"60px",
                                      paddingBottom:"100px", 
                                      display: "flex",
                                      flexDirection:"column",
                                      justifyContent: "center",
                                      alignItems:"center"}} >
                   <CssBaseline />
                   <Box sx={{padding:"10px"}}>
                        <Form />
                    </Box>
                  
                   {!isSmallScreen && isMobileMenuToggledState && <MobileMenuBox />}
          </Box>
        )
    }
    
    export default Body;
