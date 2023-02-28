import { Stack, Box, Grid, useMediaQuery, Typography, Paper, Avatar,  } from '@mui/material';
import fond1 from "../../assets/fondTeam01b.png";
import fond2 from "../../assets/fondTeam02.png";
import { deepOrange, deepPurple } from '@mui/material/colors';
import { color } from "../../theme";
import image1 from "../../assets/Truck01.png";
import { useSelector } from "react-redux";
import MobileMenuBox from "../../components/MobileMenuBox";
import DG from "../../assets/Nouveau dossier/DG.png";
import DAF from "../../assets/Nouveau dossier/DAF.png";
import DE from "../../assets/Nouveau dossier/DC.png";
import DC from "../../assets/Nouveau dossier/DE.png";


const Body = () => {

    const isNonMobile = useMediaQuery("(min-width:700px)");
    const color5 = color.white.niveau100;
    const isScreenBig = useMediaQuery("(min-width:800px)");
    //const isMobileMenuToggledState = useSelector((state) => state.UserReducer.isMobileMenuToggled);
    const isMobileMenuToggledState = useSelector((state) => state.persistedReducer.isMobileMenuToggled);


    return (
        <Box position="relative" sx={{}}>
            <Box sx={{width:"100%"}}>
                 <img src={isNonMobile ? fond1 : fond2} alt="" width="100%" />
            </Box>
            <Box position="absolute" sx={{top: isNonMobile ? "130px" : "550px", 
                                          left: isNonMobile ? "600px" : "30px",
                                          width: isNonMobile ? "50%" : "90%"}} >
                 <Typography variant={ isNonMobile ? "h2" : "h4"} sx={{fontWeight:"bold", textAlign:"center"}}>
                            Une Equipe de professionnels dévoués à la satisfaction de leurs clients!!!
                 </Typography>
            </Box>
            <Box position="absolute" sx={{top: isNonMobile ? "520px" : "250px", 
                                          left: isNonMobile ? "760px" : "100px"}}>
                   <img src={image1} alt="" width={isNonMobile ? "60%" : "80%"}/>
            </Box>
            <Box position="absolute" sx={{top: isNonMobile ? "520px" : "850px", 
                                          left: isNonMobile ? "760px" : "100px"}}>
                   <img src={image1} alt="" width={isNonMobile ? "60%" : "80%"} />
            </Box>
            <Box sx={{paddingTop: "100px" , 
                      paddingBottom: "100px", 
                      paddingLeft: isNonMobile ? "50px" : "25px", 
                      paddingRight: isNonMobile ? "50px" : "25px"}}>
                 <Grid container spacing={4}>
                      <Grid item xs={isNonMobile ? 4 : 12}>
                           <Paper elevation={10} sx={{borderRadius:"15px", padding:"20px", width:isNonMobile ? "65%" : "80%"}}>
                                 <Stack direction="column" spacing={isNonMobile ? 8 : 2} 
                                        justifyContent="center" alignItems="center">
                                       <Avatar sx={{ bgcolor: deepOrange[500], width: 180 , 
                                                      height: 180 }}
                                                      src={DG} />
                                       <Typography variant="paragraph" sx={{color:color5, textAlign:"center"}}>
                                                   "............................................" < br/>
                                                  <strong> Charles Peggy Mbadji <br/> </strong>  
                                                  <strong> Directeur General </strong> 
                                       </Typography>
                                 </Stack>
                            </Paper>
                      </Grid>
                      <Grid item xs={isNonMobile ? 4 : 12}>
                           <Paper elevation={10} sx={{borderRadius:"15px", padding:"20px", width:isNonMobile ? "65%" : "80%", 
                                   marginTop:isNonMobile ? "20px" : "0px"}}>
                                 <Stack direction="column" spacing={isNonMobile ? 8 : 2}
                                         justifyContent="center" alignItems="center">
                                       <Avatar sx={{ bgcolor: deepPurple[500], width: 180 , 
                                                  height: 180 }}
                                                  src={DAF} />
                                       <Typography variant="paragraph" sx={{color:color5, textAlign:"center"}}>
                                                   "............................................" < br/>
                                                  <strong> Kevine Audrey Nounkeu <br/> </strong>  
                                                  <strong> Directrice des Affaires Financières </strong> 
                                       </Typography>
                                 </Stack>
                            </Paper>
                      </Grid>
                      <Grid item xs={isNonMobile ? 4 : 12}>
                           <Paper elevation={10} sx={{borderRadius:"15px", padding:"20px", width:isNonMobile ? "65%" : "80%",
                                  marginTop:isNonMobile ? "40px" : "0px"}}>
                                 <Stack direction="column" spacing={isNonMobile ? 8 : 2}
                                        justifyContent="center" alignItems="center">
                                       <Avatar sx={{ bgcolor: deepPurple[500], width: 180 ,
                                           height: 180 }} src={DE} />
                                       <Typography variant="paragraph" sx={{color:color5, textAlign:"center"}}>
                                                  "............................................" < br/>
                                                  <strong> MBIANJEU SERGE WILLY </strong>  < br/>
                                                  <strong> Directeur Commercial et marketing </strong> 
                                       
                                       </Typography>
                                 </Stack>
                            </Paper>
                      </Grid>
                      <Grid item xs={isNonMobile ? 2 : 0}></Grid>
                      <Grid item xs={isNonMobile ? 4 : 12}>
                           <Paper elevation={10} sx={{borderRadius:"15px", padding:"20px", width:isNonMobile ? "65%" : "80%"}}>
                                 <Stack direction="column" spacing={isNonMobile ? 8 : 2}
                                         justifyContent="center" alignItems="center">
                                       <Avatar sx={{ bgcolor: deepPurple[500], width: 180 , 
                                           height: 180 }} src={DC} />
                                        <Typography variant="paragraph" sx={{color:color5, textAlign:"center"}}>
                                               "............................................" < br/>
                                                  <strong> NJEZANG EPHRAIM  </strong>  < br/>
                                                  <strong>  Directeur d'exploitation </strong>
                                      
                                       </Typography>
                                 </Stack>
                            </Paper>
                      </Grid>
                      <Grid item xs={isNonMobile ? 4 : 12}>
                           <Paper elevation={10} sx={{borderRadius:"15px", padding:"20px", width:isNonMobile ? "65%" : "80%",
                                   marginTop:isNonMobile ? "20px" : "0px"}}>
                                 <Stack direction="column" spacing={isNonMobile ? 8 : 2}
                                        justifyContent="center" alignItems="center"
                                        >
                                       <Avatar sx={{ bgcolor: deepPurple[500], width: 180 ,
                                           height: 180 }}>DDI photo</Avatar>
                                       <Typography variant="paragraph" sx={{color:color5, textAlign:"center"}}>
                                                 "............................................" < br/>
                                                  <strong> GBA ROLAND SERGE  </strong>  < br/>
                                                  <strong>  Directeur de développement et innovation </strong>
                                                   
                                       </Typography>
                                 </Stack>
                            </Paper>
                      </Grid>
                      <Grid item xs={isNonMobile ? 3 : 0}></Grid>
                      <Grid item xs={isNonMobile ? 2 : 0}></Grid>
                 </Grid>
             </Box>
             {!isScreenBig && isMobileMenuToggledState && <MobileMenuBox />}
        </Box>
    )
}

export default Body;