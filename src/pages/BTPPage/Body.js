import MobileMenuBox from "../../components/MobileMenuBox";
import CssBaseline from '@mui/material/CssBaseline';
import { color} from '../../theme';
import { Typography, Box, Container, useMediaQuery, Grid } from '@mui/material';
import {  useSelector } from "react-redux";
import fondBTP from "../../assets/btp01.png";
import SatisfiedClients02 from "../../components/SatisfiedClients02";
import BTPEngineList from "../../components/BTPEnginesList";
import CommandEnginsBox from "../../components/CommandEnginsBox";
import NosProjets from "../../components/NosProjets";
import ContactBox1 from "../../components/ContactBox1";
import image1 from "../../assets/Truck01.png";



const Body = () => {

    const color2 = color.gray.niveau100;
    const isSmallScreen = useMediaQuery("(min-width: 1000px)");
    const isSmallScreen2 = useMediaQuery("(min-width: 600px)");
    //const isMobileMenuToggledState = useSelector((state) => state.UserReducer.isMobileMenuToggled);
    const isMobileMenuToggledState = useSelector((state) => state.persistedReducer.isMobileMenuToggled);
    const hauteur = isSmallScreen2 ? "350px" : "700px";
    const haut1 = isSmallScreen2 ? "700px" : "1000px";
    const haut2 = isSmallScreen2 ? "200px" : "130px";
    const haut3 = isSmallScreen2 ? "200px" : "25px";
    const large = isSmallScreen2 ? "70%" : "90%";
    const haut4 = isSmallScreen2 ? "220px" : "150px";
    const haut5 = isSmallScreen2 ? "250px" : "35px";
        
        return(
          <Box position="relative" sx={{ width:"100%"}} >
              <CssBaseline />
              <Box position="relative">
                   <img src={fondBTP} width="100%" height={haut1} alt="fond" />
                   <Box position="absolute" sx={{ width:large, 
                         backgroundColor:color2, 
                         opacity:0.5 , 
                         height:hauteur,
                         borderRadius:"15px",
                         zIndex:5,
                         top:haut2,
                         left:haut3 }}>
              </Box>
              <Box position="absolute" sx={{ width:large, 
                         zIndex:10,
                         top:haut4,
                         left:haut5}}>
                   <Container>
                             <Grid container justifyContent="center" alignItems="center" spacin={4}>
                                   <Grid item xs={isSmallScreen2 ? 6 : 10} >
                                         <Typography variant="h4" sx={{color:"white", fontWeight:"bold"}}>
                                                  Optimiser les couts du matériel est le défi majeur de tous entrepreneur 
                                                  dans le BTP. 
                                         </Typography>
                                         <Typography variant="paragraph" sx={{color:"white"}}>
                                                Choisissez nos solutions sur mesures 
                                                pour tous vos travaux (Terrassement,VRD, assainissement, levage... )!!
                                         </Typography>
                                   </Grid>
                                   <Grid item xs={isSmallScreen2 ? 6 : 10} >
                                        <ContactBox1 />
                                   </Grid>
                             </Grid>
                   </Container>
              </Box>
              </Box>
              <Box>
                   <SatisfiedClients02 />
              </Box>
              <Box>
                   <BTPEngineList />
              </Box>
              <Box >
                   <CommandEnginsBox />
              </Box>
              
              <Box position="absolute" sx={{width:isSmallScreen2 ? "20%" : "60%", 
                                            top:isSmallScreen2 ? "620px" : "920px", 
                                             left:isSmallScreen2 ? "100px" : "100px"}}>
                    <img src={image1} alt="" width="60%" />
                </Box>
                <Box position="absolute" sx={{width:isSmallScreen2 ? "20%" : "60%", 
                                              top:isSmallScreen2 ? "2500px" : "73.6%", 
                                              left:isSmallScreen2 ? "100px" : "30%"}}>
                    <img src={image1} alt="" width="50%" />
                </Box>
                <Box position="absolute" sx={{width:isSmallScreen2 ? "20%" : "60%", 
                                              top:isSmallScreen2 ? "1050px" : "1650px", 
                                              left:isSmallScreen2 ? "1050px" : "150px"}}>
                    <img src={image1} alt="" width="60%" />
                </Box>
                   {!isSmallScreen && isMobileMenuToggledState && <MobileMenuBox />}
          </Box>
        )
    }
    
    export default Body;

    /**
     * 
     * <Box>
                   <NosProjets />
              </Box>

              
     */