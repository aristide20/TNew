import { Stack, Box, Grid, useMediaQuery, Typography, Paper, Avatar,  } from '@mui/material';
import fond1 from "../../assets/fondTeam01.png";
import fond2 from "../../assets/fondTeam02.png";
import { deepOrange, deepPurple } from '@mui/material/colors';
import { color } from "../../theme";
import image1 from "../../assets/Truck01.png"


const Body = () => {

    const isNonMobile = useMediaQuery("(min-width:700px)");
    const color5 = color.white.niveau100;


    return (
        <Box position="relative" sx={{}}>
            <Box sx={{width:"100%"}}>
                 <img src={isNonMobile ? fond1 : fond2} alt="" width="100%" />
            </Box>
            <Box position="absolute" sx={{top: isNonMobile ? "130px" : "650px", 
                                          left: isNonMobile ? "600px" : "30px",
                                          width: isNonMobile ? "50%" : "90%"}} >
                 <Typography variant="h2" sx={{fontWeight:"bold", textAlign:"center"}}>
                            Une Equipe de professionnels dévoués à la satisfaction de leurs clients!!!
                 </Typography>
            </Box>
            <Box position="absolute" sx={{top: isNonMobile ? "520px" : "320px", 
                                          left: isNonMobile ? "760px" : "100px"}}>
                   <img src={image1} alt="" width={isNonMobile ? "60%" : "80%"}/>
            </Box>
            <Box position="absolute" sx={{top: isNonMobile ? "520px" : "1120px", 
                                          left: isNonMobile ? "760px" : "100px"}}>
                   <img src={image1} alt="" width={isNonMobile ? "60%" : "80%"} />
            </Box>
            <Box sx={{paddingTop:"100px", paddingBottom:"100px", paddingLeft:"50px", paddingRight:"50px"}}>
                 <Grid container spacing={4}>
                      <Grid item xs={isNonMobile ? 3 : 0}></Grid>
                      <Grid item xs={isNonMobile ? 6 : 12}>
                           <Paper elevation={10} sx={{borderRadius:"15px", padding:"20px"}}>
                                 <Stack direction="row" spacing={isNonMobile ? 8 : 2}>
                                       <Avatar sx={{ bgcolor: deepOrange[500], width: 180, height: 180 }}>PDG photo</Avatar>
                                       <Typography variant="paragraph" sx={{color:color5}}>
                                                   Petit Mot du President Directeur General de TRANSAF Sarl 
                                                   Charles Peggy Mbadji
                                                   (Transport et Services d'Afrique)
                                       </Typography>
                                 </Stack>
                            </Paper>
                      </Grid>
                      <Grid item xs={isNonMobile ? 3 : 0}></Grid>
                      <Grid item xs={isNonMobile ? 2 : 0}></Grid>
                      <Grid item xs={isNonMobile ? 4 : 12}>
                           <Paper elevation={10} sx={{borderRadius:"15px", padding:"20px"}}>
                                 <Stack direction="row" spacing={isNonMobile ? 8 : 2}>
                                       <Avatar sx={{ bgcolor: deepPurple[500], width: 180, height: 180 }}>DGA photo</Avatar>
                                       <Typography variant="paragraph" sx={{color:color5}}>
                                                   Petit Mot du President Directeur General de TRANSAF Sarl 
                                                   Kevine Audrey Nounkeu 
                                                   (Transport et Services d'Afrique)
                                       </Typography>
                                 </Stack>
                            </Paper>
                      </Grid>
                      <Grid item xs={isNonMobile ? 4 : 12}>
                           <Paper elevation={10} sx={{borderRadius:"15px", padding:"20px"}}>
                                 <Stack direction="row" spacing={isNonMobile ? 8 : 2}>
                                       <Avatar sx={{ bgcolor: deepPurple[500], width: 180, height: 180 }}>DCM photo</Avatar>
                                       <Typography variant="paragraph" sx={{color:color5}}>
                                                   Petit Mot du Directeur commercial et Marketing 
                                                   Serge Willy Mbianjeu 
                                                   (Transport et Services d'Afrique)
                                       </Typography>
                                 </Stack>
                            </Paper>
                      </Grid>
                      <Grid item xs={isNonMobile ? 2 : 0}></Grid>
                      <Grid item xs={isNonMobile ? 4 : 12}>
                           <Paper elevation={10} sx={{borderRadius:"15px", padding:"20px"}}>
                                 <Stack direction="row" spacing={isNonMobile ? 8 : 2}>
                                       <Avatar sx={{ bgcolor: deepPurple[500], width: 180, height: 180 }}>DRH photo</Avatar>
                                       <Typography variant="paragraph" sx={{color:color5}}>
                                                   Petit Mot du Directeur des ressources humaines 
                                                   (Transport et Services d'Afrique)
                                       </Typography>
                                 </Stack>
                            </Paper>
                      </Grid>
                      <Grid item xs={isNonMobile ? 4 : 12}>
                           <Paper elevation={10} sx={{borderRadius:"15px", padding:"20px"}}>
                                 <Stack direction="row" spacing={isNonMobile ? 8 : 2}>
                                       <Avatar sx={{ bgcolor: deepPurple[500], width: 180, height: 180 }}>DAF photo</Avatar>
                                       <Typography variant="paragraph" sx={{color:color5}}>
                                                   Petit Mot du DAF 
                                                   (Transport et Services d'Afrique)
                                       </Typography>
                                 </Stack>
                            </Paper>
                      </Grid>
                      <Grid item xs={isNonMobile ? 4 : 12}>
                           <Paper elevation={10} sx={{borderRadius:"15px", padding:"20px"}}>
                                 <Stack direction="row" spacing={isNonMobile ? 8 : 2}>
                                       <Avatar sx={{ bgcolor: deepPurple[500], width: 180, height: 180 }}>Operateurs et Agents photo</Avatar>
                                       <Typography variant="paragraph" sx={{color:color5}}>
                                                   Petit Mot 
                                                   (Transport et Services d'Afrique)
                                       </Typography>
                                 </Stack>
                            </Paper>
                      </Grid>
                 </Grid>
             </Box>
        </Box>
    )
}

export default Body;