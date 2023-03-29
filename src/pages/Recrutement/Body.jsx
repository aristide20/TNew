import { Typography, Box, useMediaQuery } from '@mui/material';
//import Carte from '../../components/carte';
//import {useState} from 'react';
import { useSelector } from "react-redux";
import MobileMenuBox from "../../components/MobileMenuBox";
import { color} from '../../theme';
import CssBaseline from '@mui/material/CssBaseline';
//import camion01 from "../../assets/camion01c.png";
//import ImagesBoxHome from '../../components/imagesBoxHome02';
//import NewsLetter from "../../components/NewsLetter";
//import SatisfiedClients from "../../components/SatisfiedClients";
//import fondImage from "../../assets/fond01b.jpg";
//import { useNavigate } from 'react-router-dom';
import logo from "../../assets/logo.png"

//  <img src={camion01} height={isSmallScreen ? "300px" : isSmallScreen2 ? "150px" : "0px"} />


const Body = () => {

//const [isCompact, setIsCompact] = useState(false)
 
    const isSmallScreen = useMediaQuery("(min-width: 1000px)");
    const isSmallScreen2 = useMediaQuery("(min-width: 600px)");
    const isMobileMenuToggledState = useSelector((state) => state.persistedReducer.isMobileMenuToggled);
    //const backgroundcolor = color.gray.niveau0;
    const color1 = color.blue.niveau100;
    const color2 = color.gray.niveau100;
    //const color4 = color.gray.niveau20;
    //const color0 = color.white.niveau0;
    //const color5 = color.white.niveau100;
   // const navigate = useNavigate();


//backgroundColor: color1

    return(
      <Box position="relative" marginTop="70px" sx={{ width:"100%", flexGrow:1, minWidth:"300px"}} >
           <CssBaseline />
           <Box sx={{backgroundColor:color.gray.niveau20, width:"100%"}}>
               <img src={logo} alt="logo" width="100%" height={isSmallScreen2 ? "100%" : "700px"} />
           </Box>
           <Box position="absolute" sx={{ zIndex:10, 
                                          backgroundColor:color1, 
                                          opacity:"0.5", 
                                          width: isSmallScreen2 ? "70%" : "88%",
                                          height: isSmallScreen2 ? "400px" : "500px",
                                          top: isSmallScreen2 ? "100px" : "100px",
                                          left: isSmallScreen2 ? "220px" : "25px",
                                          borderRadius: "15px" }} >
                
           </Box>
           <Box position="absolute" sx={{ zIndex:20, 
                                          width: isSmallScreen2 ? "50%" : "78%",
                                          height: isSmallScreen2 ? "450px" : "700px",
                                          top: isSmallScreen2 ? "200px" : "150px",
                                          left: isSmallScreen2 ? "350px" : "45px" }} >
                <Typography variant="h2" sx={{color:color2, fontWeight:"bold"}}>
                           Aucune Campagne de recrutement actuellement!!!
                </Typography>
           </Box>
               {!isSmallScreen && isMobileMenuToggledState && <MobileMenuBox />}
      </Box>
    )
}

export default Body;
