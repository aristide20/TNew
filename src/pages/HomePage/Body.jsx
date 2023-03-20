import { Button, Typography, Box, Stack, Container, useMediaQuery, Grid, Paper,
     Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { useSelector } from "react-redux";
import MobileMenuBox from "../../components/MobileMenuBox";
import { color} from '../../theme';
import CssBaseline from '@mui/material/CssBaseline';
import ImagesBoxHome from '../../components/imagesBoxHome02';
import NewsLetter from "../../components/NewsLetter";
import SatisfiedClients from "../../components/SatisfiedClients";
import { useNavigate } from 'react-router-dom';
import MotDirection from "../../components/motDirection";
import image1 from "../../assets/Truck01.png";
import image2 from "../../assets/Truck01b.png";
import { useState } from 'react';
import './body.css';
import FormCommand from '../../components/FormCommand02';
import phone from "../../assets/toph01b2.png";
//import { loginStatut } from '../../state/UserSlice';
//import { useDispatch } from "react-redux";



const Body = () => {

const isSmallScreen = useMediaQuery("(min-width: 1000px)");
//const isSmallScreen3 = useMediaQuery("(min-width: 800px)");
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
 <div className='hometop' >
 <Box position="static" sx={{ width:"100%", padding:isSmallScreen2 ? "3rem" : "0.5rem",
                              paddingLeft:isSmallScreen2 ? "2.5rem" : "0.5rem",
                              paddingTop:isSmallScreen2 ? "10rem" : "0.5rem" }}>
          <Grid container spacing={4} justifyContent="center" alignItems="center" >
               <Grid item xs={isSmallScreen ? 4 : isSmallScreen2 ? 6 : 12} >
                      <img src={phone} alt="phone" width={isSmallScreen ? "70%" : isSmallScreen2 ? "60%" : "40%"} />
              </Grid>
              <Grid item xs={isSmallScreen2 ? 7 : 12}>
                   <Stack direction="column"
                          display="flex"
                          justifyContent=  "center"
                          alignItems="center" 
                          spacing={2}
                          sx={{color:"black"}}>
                        <Typography variant={isSmallScreen2 ? "h1" : "h3"} sx={{ fontWeight:"bold", 
                                                                                 color:isSmallScreen2 ? color0 : color0,
                                                                                 textAlign: isSmallScreen2 ? "left" : "center" }}>
                                      TRANSAF SARL 
                        </Typography>
                        <Typography variant={isSmallScreen2 ? "h3" : "h5"} sx={{ fontWeight:"bold", color:isSmallScreen2 ? color0 : color0,
                                                                                    textAlign: "center" }}>
                                      Transport et Services D'Afrique SARL
                        </Typography>
                        <Container sx={{paddingTop:"30px"}}>
                                   <Grid container spacing={2} justifyContent="center" alignItems="center">
                                         <Grid item xs={isSmallScreen ? 5 : 12}>
                                               <Button variant="contained"
                                                       onClick={() => {handleClickOpen()} }
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
                                                         <Button onClick={handleClose}>Fermer</Button>
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
              <Grid item xs={isSmallScreen ? 1 : 12}>
                   
              </Grid> 
          </Grid>
          </Box>        
     
     </div> 
        <Box position="static" sx={{ padding: isSmallScreen2 ? "50px" : "20px", 
                                    display:"flex", flexDirection:"column", 
                                    justifyContent:"center", alignItems:"center"       }}>
                   <Paper elevation={10} sx={{backgroundColor:color1, borderRadius:"10px", width:isSmallScreen2 ? "70%" : "90%"}}> 
                          <Typography variant={isSmallScreen2 ? "h2" : "h4"} 
                                      sx={{ color: color0, padding:"15px", textAlign:"center", fontWeight:"bold" }}>
                                     Sécurité, Délais et Services! <br />
                                     Restez Zen, on s'occupe de tout !
                           </Typography>
                    </Paper>
        </Box>
     <Box sx={{ width:"100%",  
                paddingTop: "30px",
                paddingBottom: "30px",
                marginTop: "10px",
                backgroundColor: color4}}>
                <SatisfiedClients />
     </Box>
     <Box sx={{ backgroundColor: "white", 
                width:"100%",  
                paddingTop: "0px",
                paddingBottom: "100px",
                color: "gray"}}>
                <ImagesBoxHome />
           <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", paddingLeft:"10px"}}>
               <Grid container display="flex" justifyContent="center" alignItems="center" spacing={2} > 
                     <Grid item xs={isSmallScreen ? 1 : 0} ></Grid>
                     <Grid item xs={isSmallScreen ? 7 : 12} >
                            <MotDirection />
                     </Grid>
                     <Grid item xs={isSmallScreen ? 4 : 12} sx={{paddingLeft:"15px"}} >
                           <Box sx={{paddingTop:isSmallScreen ? "50px": "5px"}} > 
                                 <img src={image2} alt="" width="80%" />
                            </Box>
                     </Grid>
               </Grid>
           </Box>
     </Box>
     <Box sx={{ width:"100%",  
                color: "black"}}>
                <NewsLetter />
     </Box>
     <Box position="absolute" sx={{width:"20%", top: isSmallScreen2 ? "20%" : "4%", 
                                                left: isSmallScreen2 ? "80%" : "55%"}}>
          <img src={image1} alt="" width= {isSmallScreen2 ? "60%" : "120%"} />
      </Box>
      
     {!isSmallScreen && isMobileMenuToggledState && <MobileMenuBox />}
</Box>
)
}

export default Body;


