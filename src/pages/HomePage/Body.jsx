import { Button, Typography, Box, Stack, Container, useMediaQuery, Grid, Paper,
         Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import Carte from '../../components/carte';
import { useSelector } from "react-redux";
import MobileMenuBox from "../../components/MobileMenuBox";
import { color} from '../../theme';
import CssBaseline from '@mui/material/CssBaseline';
import ImagesBoxHome from '../../components/imagesBoxHome02';
import NewsLetter from "../../components/NewsLetter";
import SatisfiedClients from "../../components/SatisfiedClients";
import fondImage from "../../assets/fond01b.jpg";
import { useNavigate } from 'react-router-dom';
import MotDirection from "../../components/motDirection";
import image1 from "../../assets/Truck01.png";
import { useState } from 'react';
//import { loginStatut } from '../../state/UserSlice';
//import { useDispatch } from "react-redux";



const Body = () => {
 
    const isSmallScreen = useMediaQuery("(min-width: 1000px)");
    const isSmallScreen3 = useMediaQuery("(min-width: 800px)");
    const isSmallScreen2 = useMediaQuery("(min-width: 600px)");
    //const isMobileMenuToggledState = useSelector((state) => state.UserReducer.isMobileMenuToggled);
    const isMobileMenuToggledState = useSelector((state) => state.persistedReducer.isMobileMenuToggled);
    const color1 = color.blue.niveau100;
    const color2 = color.gray.niveau100;
    const color4 = color.gray.niveau20;
    const color0 = color.white.niveau0;
    const navigate = useNavigate();

    //const dispatch = useDispatch();
    //dispatch(loginStatut(false));


    /**
     gestion de la boite de dialog pour passer la commande
     */
    
     const [open, setOpen] = useState(false);

     const handleClickOpen = () => {
       setOpen(true);
     };
   
     const handleClose = () => {
       setOpen(false);
     };


    return(
      <Box position="relative" sx={{ width:"100%", flexGrow:1, marginTop:"70px"}} >
           <CssBaseline />
           <Box sx={{ width:"100%",  
                      color: "gray"}}>
                        <img src={fondImage} alt="fond" width="100%"  zindex={-10} />
                <Box position="absolute" sx={{zindex:10, top: isSmallScreen2 ? "4%" : "2%", 
                                                         left:isSmallScreen2 ? "12%" : "6%"}}>
                    <Grid container spacing={4} justifyContent="center" alignItems="center" >
                         <Grid item xs={isSmallScreen ? 4 : isSmallScreen2 ? 6 : 12}>
                                <Carte />
                        </Grid>
                        <Grid item xs={isSmallScreen2 ? 8 : 12}>
                             <Stack direction="column"
                                    display="flex"
                                    justifyContent= {isSmallScreen2 ? "center" : "flex-start"}
                                    alignItems={isSmallScreen2 ? "center" : "flex-start"}
                                    spacing={2}>
                                  <Typography variant={isSmallScreen2 ? "h1" : "h3"} sx={{ fontWeight:"bold", 
                                                                                           color:isSmallScreen2 ? color0 : color1,
                                                                                           textAlign: isSmallScreen2 ? "left" : "center" }}>
                                                TRANSAF SARL 
                                  </Typography>
                                  <Typography variant={isSmallScreen2 ? "h3" : "h5"} sx={{ fontWeight:"bold", color:isSmallScreen2 ? color0 : color1,
                                                                                              textAlign: "center" }}>
                                                Transport et Services D'Afrique SARL
                                  </Typography>
                                  <Container sx={{paddingTop:"30px"}}>
                                             <Grid container spacing={2} justifyContent="center" alignItems="center">
                                                   <Grid item xs={isSmallScreen ? 5 : 12}>
                                                         <Button variant="contained"
                                                                 onClick={() => {handleClickOpen} }
                                                                 sx={{backgroundColor:color0, color:color1,
                                                                      width:"250px", height:"40px", fontWeight:"bold"}}>
                                                                    Commander un Camion
                                                         </Button>
                                                         <Dialog open={open} onClose={handleClose}>
                                                                <DialogTitle>Commande</DialogTitle>
                                                                      <DialogContent>
                                                                     <DialogContentText>
                                                            Precisez nous vos besoins et un agent vous contactera dans 
                                                            l'heure pour finaliser votre commande!!
                                                                     </DialogContentText>
                                                                       <FormCommand />
                                                                </DialogContent>
                                                    <DialogActions>
                                                                   <Button onClick={handleClose}>Annuler</Button>
                                                                   <Button onClick={handleClose}>Confirmer</Button>
                                                    </DialogActions>
                                </Dialog>
                                                   </Grid> 
                                                   <Grid item xs={isSmallScreen ? 2 : 0}></Grid>
                                                   <Grid item xs={isSmallScreen ? 5 : 12}>
                                                        <Button variant="contained"
                                                                onClick={() => {navigate('/connexion')} }
                                                                 sx={{backgroundColor:color2, color:"white",
                                                                      width:"250px", height:"40px", fontWeight:"bold"}}>
                                                                  Inscrire un Camion
                                                         </Button>
                                                   </Grid>
                                             </Grid>
                                  </Container>
                             </Stack>
                        </Grid>
                        <Grid item xs={isSmallScreen ? 0 : 12}>
                             
                        </Grid> 
                    </Grid>
                    </Box>
               </Box> 
                  <Box position="absolute" sx={{zIndex:10, top: isSmallScreen ? "18%" : isSmallScreen2 ? "15%" : "17%", 
                                                        left:isSmallScreen2 ? "32%" : "6%", 
                                                        width: isSmallScreen2 ? "40%" : "90%", 
                                                        padding: isSmallScreen2 ? "40px" : "10px", 
                                                        borderRadius:"10px"}}>
                             <Paper elevation={10} sx={{backgroundColor:color1, width:isSmallScreen2 ? "100%" : "100%", borderRadius:"10px"}}> 
                                    <Typography variant={isSmallScreen2 ? "h4" : "h5"} 
                                                sx={{ color: color0, padding:"15px", textAlign:"center", fontWeight:"bold" }}>
                                               Sécurité, Délais et Services! <br />
                                               Restez Zen, on s'occupe de tout !
                                     </Typography>
                              </Paper>
                  </Box>
               <Box sx={{ width:"100%",  
                          paddingTop: "50px",
                          paddingBottom: "50px",
                          marginTop: isSmallScreen ? "-10px" : isSmallScreen3 ? "60%" : isSmallScreen2 ? "150%" : "255%",
                          backgroundColor: color4}}>
                          <SatisfiedClients />
               </Box>
               <Box sx={{ backgroundColor: "white", 
                          width:"100%",  
                          paddingTop: isSmallScreen2 ? "100px" : "0px",
                          paddingBottom: "100px",
                          color: "gray"}}>
                          <ImagesBoxHome />
                     <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                          <MotDirection />
                     </Box>
               </Box>
               <Box sx={{ width:"100%",  
                          color: "black"}}>
                          <NewsLetter />
               </Box>
               <Box position="absolute" sx={{width:"20%", top: isSmallScreen2 ? "20%" : "7%", 
                                                          left: isSmallScreen2 ? "80%" : "60%"}}>
                    <img src={image1} alt="" width= {isSmallScreen2 ? "60%" : "120%"} />
                </Box>
                <Box position="absolute" sx={{width:isSmallScreen2 ? "25%" : "70%", 
                                             top:isSmallScreen2 ? "34%" : "28.8%", 
                                             left:isSmallScreen2 ? "30%" : "25%"}}>
                    <img src={image1} alt="" width="60%" />
                </Box>
               {!isSmallScreen && isMobileMenuToggledState && <MobileMenuBox />}
      </Box>
    )
}

export default Body;
