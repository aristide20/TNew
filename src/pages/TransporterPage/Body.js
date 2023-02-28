import MobileMenuBox from "../../components/MobileMenuBox";
import CssBaseline from '@mui/material/CssBaseline';
import { color } from '../../theme';
import { Button, Typography, 
  Box, Paper,
  Stack, 
  useMediaQuery, 
  Grid , 
  List, 
  ListItemButton, 
  ListItemText, 
  ListItemIcon} from '@mui/material';
import { useSelector } from "react-redux";
//import {useState} from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useNavigate } from "react-router-dom";
import SatisfiedClients from "../../components/SatisfiedClients";
import ImagesBoxHome from "../../components/imagesBoxHome03";
import fond from "../../assets/fondT02.png";
import Form from "../../components/Form4";
import image1 from "../../assets/Truck01.png";


const Body = () => {

  const color2 = color.white.niveau0;
  const color1 = color.blue.niveau100;
  const navigate = useNavigate();
 
    const isSmallScreen = useMediaQuery("(min-width: 1000px)");
    const isSmallScreen2 = useMediaQuery("(min-width: 600px)");
    const isMobileMenuToggledState = useSelector((state) => state.persistedReducer.isMobileMenuToggled);
    const color3 = color.gray.niveau100;
    const color4 = color.gray.niveau20;
        
        return(
          <Box position="relative" sx={{backgroundColor: "white", width:"100%", marginTop:"90px"}} >
                   <CssBaseline />
                   <Box>
                        <img src={fond} alt="fond" width="100%" zindex={-10} />
                   </Box>
                   <Box position="absolute" sx={{marginTop:"-10px", top:"80px", right:"50px"}}>
                        <Grid container spacing={4} justifyContent="center" alignItems="center">
                              <Grid item xs={isSmallScreen ? 4 : isSmallScreen2 ? 6 : 0}></Grid>
                              <Grid item xs={isSmallScreen ? 4 : isSmallScreen2 ? 6 : 12}>
                                    <Typography variant={isSmallScreen ? "h4" : "h5"} sx={{fontWeight:"bold", 
                                                                  color:color2, 
                                                                  textAlign:"center", 
                                                                  paddingBottom:"30px"}}>
                                               Vous êtes transporteur? <br />
                                               Inscrivez votre camion en un clic et commencez a gagner de l'argent!!
                                    </Typography>
                              </Grid>
                              <Grid item xs={isSmallScreen ? 4 : 0}> 
                                  <Box sx={{ display:"flex", 
                                                   justifyContent:"center", 
                                                   alignItems:"center",
                                                   paddingTop:"50px",
                                                   paddingBottom:"100px",
                                                   width:"100%",
                                                   height:"500px"}}> 
                                              <Form />
                                  </Box>
                              </Grid>
                        </Grid>
                    </Box>
                    <Box position="relative" sx={{ width:"100%", display:"flex", flexDirection:"coloumn", 
                                                   justifyContent:"center", alignItems:"center" }}>
                         <Paper elevation={10} sx={{padding:"20px", textAlign:"justify", bgcolor:color3, borderRadius:"15px"}}>
                                <Typography variant="paragraph" sx={{ color:color2, textAlign:"justify", 
                                            fontSize:isSmallScreen2 ?"20px" : "16px"}}>
                                             Nous mettons un accent particulier sur la sécurité des biens et personnes, 
                                             c'est pourquoi vous bénéficié automatiquement de toutes nos formations en 
                                             logistique et transport une fois inscrit à notre réseau. Toutefois, nous 
                                             n'acceptons que des véhicules à jours sur le plan technique et 
                                             administratif <br />
                                             Pour faire partie de notre flotte et bénéficier de notre marché, 
                                             Inscrivez votre camion et faites partie de nos partenaires.
                                    </Typography>
                         </Paper>
                    </Box>
                  
                   <Box sx={{ marginTop:isSmallScreen ? "-10px" : "10px", paddingTop:"100px", bgcolor:color4 }}>
                      <SatisfiedClients />
                </Box>
                <Box sx={{paddingTop:"80px"}}>
                      <ImagesBoxHome />
                </Box>
                <Box sx={{paddingTop: isSmallScreen2 ? "100px" : "40px", paddingBottom:"60px"}}>
                    <Grid container spacing={3}>
                          <Grid item xs={isSmallScreen2 ? 3 : 0} >
                                <Box sx={{paddingTop:"200px", paddingLeft:"80px"}}> 
                                     <img src={image1} alt="" width="80%" />
                                </Box>
                          </Grid>
                          <Grid item xs={isSmallScreen2 ? 6 : 12}>
                          
                          <Stack direction="column" spacing={4} justifyContent="center" alignItems="center">
                                 <Typography variant="h5" textAlign="center" sx={{color:"black", fontWeight:"bold"}}>
                                          06 bonnes raisons de choir TRANSAF:
                                 </Typography>
                                 <Box >
                                     <List sx={{ width: '100%', maxWidth: 360, bgcolor:'background.paper' }}
                                                        component="nav"
                                                        aria-labelledby="nested-list-subheader" >
                                                        <ListItemButton>
                                                                       <ListItemIcon>
                                                                                    <CheckCircleIcon sx={{color: color1}}/>
                                                                       </ListItemIcon>
                                                                       <ListItemText primary="Plus de 200 Camions de tous types" />
                                                        </ListItemButton>
                                                        <ListItemButton>
                                                                       <ListItemIcon>
                                                                                    <CheckCircleIcon sx={{color: color1}} />
                                                                       </ListItemIcon>
                                                                       <ListItemText primary="Des prix très compétitifs" />
                                                        </ListItemButton>
                                                        <ListItemButton>
                                                                       <ListItemIcon>
                                                                                    <CheckCircleIcon sx={{color: color1}} />
                                                                       </ListItemIcon>
                                                                       <ListItemText primary="Des chauffeurs professionnels et des camions de qualité" />
                                                        </ListItemButton>
                                                        <ListItemButton>
                                                                       <ListItemIcon>
                                                                                    <CheckCircleIcon sx={{color: color1}} />
                                                                       </ListItemIcon>
                                                                       <ListItemText primary="La ponctualité garantie" />
                                                        </ListItemButton>
                                                        <ListItemButton>
                                                                       <ListItemIcon>
                                                                                    <CheckCircleIcon sx={{color: color1}} />
                                                                       </ListItemIcon>
                                                                       <ListItemText primary="Une logistique à tout épreuve" />
                                                        </ListItemButton>
                                                        <ListItemButton>
                                                                       <ListItemIcon>
                                                                                    <CheckCircleIcon sx={{color: color1}} />
                                                                       </ListItemIcon>
                                                                       <ListItemText primary="Assurance tous risques sur vos marchandises" />
                                                        </ListItemButton>
                                                 </List>
                            </Box>
                            <Box>
                                 <Button variant="contained" 
                                         size="large" 
                                         onClick={() => navigate('/connexion')}
                                         sx={{background:color1, color:"white"}}>
                                        DEMANDER Mon Devis
                                 </Button>
                            </Box>
                    </Stack>
                    </Grid>
                    <Grid item xs={isSmallScreen2 ? 3 : 0}>
                          <img src={image1} alt="" width="60%" />
                    </Grid>

                    </Grid>
                </Box>
                <Box position="absolute" sx={{width:"20%", top:isSmallScreen2 ? "620px" : "40px", 
                                                           left:isSmallScreen2 ? "1000px" : "300px"}}>
                    <img src={image1} alt="" width="50%" />
                </Box>
                <Box position="absolute" sx={{width:"20%", top: isSmallScreen2 ? "2750px": "1600px", 
                                                           left: isSmallScreen2 ? "1000px" : "300px"}}>
                    <img src={image1} alt="" width="50%" />
                </Box>
                   {!isSmallScreen && isMobileMenuToggledState && <MobileMenuBox />}
          </Box>
        )
    }
    
    export default Body;
