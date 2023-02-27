import MobileMenuBox from "../../components/MobileMenuBox";
import CssBaseline from '@mui/material/CssBaseline';
import { color} from '../../theme';
import { Button, Typography, 
         Box, 
         Stack,  
         useMediaQuery, 
         Grid , 
         List, 
         ListItemButton, 
         ListItemText, 
         ListItemIcon} from '@mui/material';
import { useSelector } from "react-redux";
import FormCommand from "../../components/FormCommand";
import SatisfiedClients from "../../components/SatisfiedClients";
import ImagesBoxHome from "../../components/imagesBoxHome";
//import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useNavigate } from "react-router-dom";
import image1 from "../../assets/Truck01.png";



const Body = () => {

    const color1 = color.blue.niveau100;
    const navigate = useNavigate();
    const isSmallScreen = useMediaQuery("(min-width: 1000px)");
    const isSmallScreen2 = useMediaQuery("(min-width: 600px)");
    //const isMobileMenuToggledState = useSelector((state) => state.UserReducer.isMobileMenuToggled);
    const isMobileMenuToggledState = useSelector((state) => state.persistedReducer.isMobileMenuToggled);

        
        return(
          <Box position="static" sx={{backgroundColor:"white", width:"100%", paddingBottom:"100px", marginTop:"90px"}} >
              <CssBaseline />
               <Box sx={{backgroundColor: color1, width:"100%", padding:isSmallScreen ? "50px" : "5%"}}>
                    <Grid container justifyContent="center" alignItems="center" spacing={2}>
                                <Grid item xs={isSmallScreen ? 1 : 0}></Grid>
                                <Grid item xs={isSmallScreen ? 6 : isSmallScreen2 ? 7 : 12}>
                                     <Stack dirction="column" spacing={2}>
                                          <Typography variant={isSmallScreen ? "h3" : "h5"} sx={{color:"white", fontWeight:"bold", textAlign:"left"}}>
                                                  Restez Zen !! < br/>
                                                  < br />
                                                   nous assurons le transport de vos marchandises et colis 
                                                  conformément à vos exigences et recommandations.
                                         </Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={isSmallScreen ? 4 : isSmallScreen2 ? 5 : 12}>
                                      
                                     <Box>
                                          <FormCommand />
                                     </Box>
                                </Grid>
                                <Grid item xs={isSmallScreen ? 1 : 0}></Grid>
                               
                    </Grid>
                </Box> 
                <Box>
                      <SatisfiedClients />
                </Box>
                <Box sx={{paddingTop:"80px"}}>
                      <ImagesBoxHome />
                </Box>
                <Box sx={{paddingTop: "100px", paddingBottom:"60px"}}>
                <Grid container spacing={0}>
                          <Grid item xs={isSmallScreen2 ? 3 : 0} >
                                <Box > 
                                     <img src={image1} alt="" width="60%" />
                                </Box>
                          </Grid>
                          <Grid item xs={isSmallScreen2 ? 6 : 12}>
                          
                          <Stack direction="column" spacing={4} justifyContent="center" alignItems="center">
                                 <Typography variant="h5" textAlign="left" sx={{color:"black", fontWeight:"bold"}}>
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
                         <Box sx={{paddingTop:"200px", paddingLeft:"80px"}}>
                               <img src={image1} alt="" width="60%" />
                          </Box>
                    </Grid>

                    </Grid>
                </Box>
                <Box position="absolute" sx={{width:"20%", top: isSmallScreen2 ? "670px" : "200%", 
                                                           left: isSmallScreen2 ? "100px" : "30%"}}>
                    <img src={image1} alt="" width="80%" />
                </Box>
                   {!isSmallScreen && isMobileMenuToggledState && <MobileMenuBox />}
          </Box>
        )
    }
    
    export default Body;
