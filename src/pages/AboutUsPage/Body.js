import MobileMenuBox from "../../components/MobileMenuBox";
import CssBaseline from '@mui/material/CssBaseline';
import { color } from '../../theme';
import { Typography, Box, Stack, useMediaQuery, Grid, Paper } from '@mui/material';
import { useSelector } from "react-redux";
//import {useState } from 'react';
import ContactBox1 from "../../components/ContactBox1";
import image1 from "../../assets/camion05c.PNG";
import image2 from "../../assets/btp01b.PNG";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import CamionList from "../../components/CamionList";
import image0 from "../../assets/Truck01.png";
import NewsLetter from "../../components/NewsLetter";


const Body = () => {

    const background = color.gray.niveau20;
    const background2 = color.blue.niveau100;
    const background3 = "white";
    const background4 = color.gray.niveau100;
    const isScreenToBig = useMediaQuery("(min-width:1200px)");
    const isScreenBig = useMediaQuery("(min-width:800px)");
    //const isMobileMenuToggledState = useSelector((state) => state.UserReducer.isMobileMenuToggled);
    const isMobileMenuToggledState = useSelector((state) => state.persistedReducer.isMobileMenuToggled);
    const top4 = isScreenToBig ? "0%" : isScreenBig ? "35%" : "5%";
    const top5 = isScreenToBig ? "25%" : isScreenBig ? "40%" : "10%";
    const top6 = isScreenToBig ? "65%" : isScreenBig ? "60%" : "90%";
    const top7 = isScreenBig ? "100px" : "50px";
    const top8 = isScreenToBig ? "100px" : isScreenBig ? "200px": "200px";
        
        return(
          <Box position="static" sx={{backgroundColor: background, width:"100%", flexGrow:1, marginTop:"90px"}}> 
               <CssBaseline />
               <Box sx={{backgroundColor: background2, width:"100%", minHeight:"300px", paddingLeft:top5}}>
                    <Box sx={{width:top6, paddingTop:top7, paddingBottom:isScreenBig ? "50px" : "150px" }}>
                               <Typography variant="h4" sx={{textAlign:"left", fontWeight:"bold", color:background3}}>
                                           Notre Objectif: <br />
                                           Devenir dans les 10 (dix) prochaines années le leader de la logistique 
                                           terrestre et maritime d'Afrique centrale.
                               </Typography>
                    </Box>
               </Box>
               <Box sx={{backgroundColor: background, width:"100%", minHeight:"700px", paddingLeft:top4,
                         paddingTop:isScreenToBig ? "8%" : isScreenBig ? "10%" : "40%",
                         paddingBottom:isScreenToBig ? "5%" : isScreenBig ? "10%" : "10%"}} >
                    <Box sx={{width:isScreenToBig ? "100%" : isScreenBig ? "100%" : "90%", paddingTop:"50px",
                              paddingBottom:isScreenToBig ? "8%" : isScreenBig ? "8%" : "8%"}}>
                         <Grid container spacing={2}>
                              <Grid item xs={isScreenToBig ? 3 : isScreenBig ? 6 : 12}>
                                    <Paper elevation={5} sx={{bgcolor:background3, width:"100%", height:"400px",
                                           display:"flex", flexDirection:"column", justifyContent:"center",
                                           alignItems:"center", padding:"20px"}} > 
                                          <Typography variant="h4" sx={{color: background2, fontWeight:"bold", paddingBottom:"50px"}}>
                                                     Origines
                                          </Typography>
                                          <Typography variant="paragraph" sx={{color: background2}}>
                                                     Crée en 2022 au Cameroun, Transport et Service d'Afrique (TRANSAF) 
                                                     SARL est une entreprise qui offre des solutions logistiques aux 
                                                     entreprises industrielles et commerciales en Afrique Centrale.
                                          </Typography>
                                    </Paper>
                              </Grid>
                              <Grid item xs={isScreenToBig ? 3 : isScreenBig ? 6 : 12}>
                                   <Paper elevation={5} sx={{bgcolor:background2, width:"100%", height:"400px", 
                                                             marginTop:isScreenBig ? "50px" : "0px",
                                                             display:"flex", flexDirection:"column", justifyContent:"center",
                                                           alignItems:"center", padding:"20px"}} > 
                                          <Typography variant="h4" sx={{color: background3, fontWeight:"bold", 
                                                                        paddingBottom:"50px"}}>
                                                      Notre mission:
                                          </Typography>
                                          <Typography variant="paragraph" sx={{color: background3}}>
                                                     offrir à nos clients un service de qualité élevé à travers les 
                                                     axes suivant :
                                                     <ol>
                                                        <li>La sécurisation des marchandises;</li>
                                                        <li>La maitrise du temps de livraisons;</li>
                                                        <li>La flexibilité et la personnalisation des prestations;</li>
                                                        <li>Réduire les couts de logistique de nos partenaires;</li>
                                                     </ol>
                                          </Typography>
                                    </Paper>
                              </Grid>
                              <Grid item xs={isScreenToBig ? 3 : isScreenBig ? 6 : 12}>
                                    <Paper elevation={5} sx={{bgcolor:background3, width:"100%", height:"400px", 
                                                             marginTop:isScreenBig ? "100px" : "0px",
                                                             display:"flex", flexDirection:"column", justifyContent:"center",
                                                           alignItems:"center", padding:"20px"}} > 
                                          <Typography variant="h4" sx={{color: background4, fontWeight:"bold", 
                                                                       paddingBottom:"30px"}}>
                                                      Nos valeurs:
                                          </Typography>
                                          <Typography variant="paragraph" sx={{color: background4}}>
                                                     <ul> 
                                                          <li> Sécurité </li>
                                                          <li>  Fiabilité </li>
                                                          <li> services </li>
                                                     </ul>
                                                     Ceci à travers des process qui répondent aux besoins des clients 
                                                     et qui garantissent leur satisfaction.
                                          </Typography>
                                    </Paper>
                              </Grid>
                              <Grid item xs={isScreenToBig ? 3 : isScreenBig ? 6 : 12}>
                                    <Paper elevation={5} sx={{bgcolor:background4, width:"100%", height:"400px", 
                                                             marginTop:isScreenBig ? "150px" : "0px",
                                                             display:"flex", flexDirection:"column", justifyContent:"center",
                                                             alignItems:"center", padding:"20px"}} > 
                                          <Typography variant="h4" sx={{color: background3, fontWeight:"bold"}}>
                                                      Chiffres clés: 
                                          </Typography>
                                          <Typography variant="paragraph" sx={{color: background3}}>
                                                     <ol>
                                                         <li>Plus de 100 camions (benne, porte container, plateau, 
                                                            porte charges…) pour répondre à vos besoins,</li>
                                                         <li>Un site et une application mobile pour un suivi efficace de 
                                                             votre commande</li>
                                                         <li> Des opérateurs pour vous accompagner tout au long de la 
                                                              procédure </li>
                                                         <li> Des solutions de paiements simplifiés </li>
                                                         <li> + 1000 livraisons effectués </li>
                                                     </ol>
                                         </Typography>
                                    </Paper>
                              </Grid>
                         </Grid>     
                    </Box>
                    <Box sx={{marginTop: top8, flexGrow:1, marginBottom:"80px"}}>
                         <Grid container>
                               <Grid item xs={isScreenToBig ? 3 : isScreenBig? 6 : 12}>
                                    <Box sx={{width:"100%", height:"100%"}}>
                                         <img src={image1} alt="image01" width="100%" height="100%" />
                                    </Box>
                               </Grid>
                               <Grid item xs={isScreenToBig ? 3 : isScreenBig? 6 : 12}>
                                     <Box sx={{backgroundColor:background4, width:"100%"}}>
                                          <Stack direction="column"
                                                 justifyContent="center"
                                                 alignItems="center"
                                                 spacing={2}>
                                                  <List sx={{ width: '100%', maxWidth: 360, bgcolor:'background.paper' }}
                                                        component="nav"
                                                        aria-labelledby="nested-list-subheader" >
                                                        <ListItemButton>
                                                                       <ListItemIcon>
                                                                                    <FactCheckIcon />
                                                                       </ListItemIcon>
                                                                       <ListItemText primary="Plus de 100 Camions de tous types" />
                                                        </ListItemButton>
                                                        <ListItemButton>
                                                                       <ListItemIcon>
                                                                                    <FactCheckIcon />
                                                                       </ListItemIcon>
                                                                       <ListItemText primary="Des prix très compétitifs" />
                                                        </ListItemButton>
                                                        <ListItemButton>
                                                                       <ListItemIcon>
                                                                                    <FactCheckIcon />
                                                                       </ListItemIcon>
                                                                       <ListItemText primary="Des chauffeurs professionnels et des camions de qualité" />
                                                        </ListItemButton>
                                                        <ListItemButton>
                                                                       <ListItemIcon>
                                                                                    <FactCheckIcon />
                                                                       </ListItemIcon>
                                                                       <ListItemText primary="La ponctualité garantie" />
                                                        </ListItemButton>
                                                        <ListItemButton>
                                                                       <ListItemIcon>
                                                                                    <FactCheckIcon />
                                                                       </ListItemIcon>
                                                                       <ListItemText primary="Une logistique à tout épreuve" />
                                                        </ListItemButton>
                                                        <ListItemButton>
                                                                       <ListItemIcon>
                                                                                    <FactCheckIcon />
                                                                       </ListItemIcon>
                                                                       <ListItemText primary="Assurance tous risques sur vos marchandises" />
                                                        </ListItemButton>
                                                 </List>
                                          </Stack>
                                     </Box>
                               </Grid>
                               <Grid item xs={isScreenToBig ? 3 : isScreenBig? 6 : 12}>
                                    <Box sx={{backgroundColor:background2, width:"100%"}}>
                                          <Stack direction="column"
                                                 justifyContent="center"
                                                 alignItems="center"
                                                 spacing={2}>
                                                   <List sx={{ width: '100%', maxWidth: 360, bgcolor:background2, color:background3 }}
                                                        component="nav"
                                                        aria-labelledby="nested-list-subheader" >
                                                        <ListItemButton>
                                                                       <ListItemIcon>
                                                                                    <FactCheckIcon />
                                                                       </ListItemIcon>
                                                                       <ListItemText primary="Plus de 150 Engins de chantiers" />
                                                        </ListItemButton>
                                                        <ListItemButton>
                                                                       <ListItemIcon>
                                                                                    <FactCheckIcon />
                                                                       </ListItemIcon>
                                                                       <ListItemText primary="Des prix très compétitifs" />
                                                        </ListItemButton>
                                                        <ListItemButton>
                                                                       <ListItemIcon>
                                                                                    <FactCheckIcon />
                                                                       </ListItemIcon>
                                                                       <ListItemText primary="Des conducteurs d'engins professionnels et des machines de qualité" />
                                                        </ListItemButton>
                                                        <ListItemButton>
                                                                       <ListItemIcon>
                                                                                    <FactCheckIcon />
                                                                       </ListItemIcon>
                                                                       <ListItemText primary="La ponctualité garantie" />
                                                        </ListItemButton>
                                                        <ListItemButton>
                                                                       <ListItemIcon>
                                                                                    <FactCheckIcon />
                                                                       </ListItemIcon>
                                                                       <ListItemText primary="Une logistique à tout épreuve" />
                                                        </ListItemButton>
                                                        <ListItemButton>
                                                                       <ListItemIcon>
                                                                                    <FactCheckIcon />
                                                                       </ListItemIcon>
                                                                       <ListItemText primary="Travail de qualité effectué dans les délais" />
                                                        </ListItemButton>
                                                 </List>
                                                 </Stack>
                                     </Box>
                               </Grid>
                               <Grid item xs={isScreenToBig ? 3 : isScreenBig? 6 : 12}>
                                    <Box sx={{width:"100%", height:"100%"}}>
                                         <img src={image2} alt="image02" width="100%" height="100%" />
                                    </Box>
                               </Grid>
                         </Grid>
                    </Box>
                </Box>
                <Box sx={{backgroundColor: background, width:"100%", minHeight:"150px"}}>
                     <Typography variant="h4" sx={{textAlign:"center", fontWeight: "bold", color:"black"}}>
                                Plus de 100 Vehicules pour couvrir tous vos besoins
                     </Typography> 
                </Box>
                <Box sx={{backgroundColor: background, width:"100%"}}>
                     <CamionList />
                </Box>
                <Box sx={{backgroundColor: background, width:"100%"}}>
                    
                </Box>
                <Box position="absolute" sx={{top:isScreenBig ? "160%" : "500%", 
                                              left: isScreenBig ? "30%" : "30%" }}>
                     <img src={image0} alt="" width={isScreenBig ? "30%" : "50%"}  />
                </Box>
                <Box position="absolute" sx={{zIndex:10, right:isScreenBig ? "50px": "20%", 
                                                         top:isScreenToBig ? "35%" : "105%"}}>
                     <ContactBox1 />
                </Box>
                <Box position="absolute" sx={{top:isScreenBig ? "50%" : "500%", 
                                              left: isScreenBig ? "3%" : "30%" }}>
                     <img src={image0} alt="" width={isScreenBig ? "20%" : "50%"}  />
                </Box>
                <Box>
                    <NewsLetter />
                </Box>
                {!isScreenBig && isMobileMenuToggledState && <MobileMenuBox />}
          </Box>
        )
    }
    
    export default Body;
