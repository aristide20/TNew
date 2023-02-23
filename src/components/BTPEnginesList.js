import { Button, Typography, Box, Container, useMediaQuery, Grid } from '@mui/material';
import { color } from "../theme";
import VerifiedIcon from '@mui/icons-material/Verified';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import CardImage from "./cardImage2";
import { BTP } from "./data/data";


const BTPEngineList = () => {

    const color1 = color.gray.niveau20;     // fond gris
    const color2 = color.white.niveau100;  // black pour le text
    const isNonMobile = useMediaQuery("(min-width:1000px)");
    const isNonMobile2 = useMediaQuery("(min-width:700px)");
    const textWidth = isNonMobile ? "60%" : "90%";
    

    return (
        <Box sx={{width:"100%", backgroundColor: color1}}>
             <Container sx={{paddingTop:"80px", paddingBottom:"30px"}}>
                       <Typography variant="h5" sx={{color:color2, 
                                                     fontWeight:"bold", 
                                                     width:textWidth, 
                                                     textAlign:"center"}}>
                                   Terrassement, assainissement, levage...
                                    tous les engins dont vous avez besoin
                       </Typography>
             </Container>
             <Container sx={{paddingTop:"20px", paddingBottom:"50px"}}>
                   <Grid container spacing={2} justifyContent="center" alignItems="center">
                         <Grid item xs={isNonMobile ? 4 : isNonMobile2 ? 6 : 12}>
                               <CardImage card={BTP.btp08} />
                         </Grid>
                         <Grid item xs={isNonMobile ? 4 : isNonMobile2 ? 6 : 12}>
                               <CardImage card={BTP.btp07} />
                         </Grid>
                         <Grid item xs={isNonMobile ? 4 : isNonMobile2 ? 6 : 12}>
                                <CardImage card={BTP.btp06} />
                         </Grid>
                         <Grid item xs={isNonMobile ? 4 : isNonMobile2 ? 6 : 12}>
                                <CardImage card={BTP.btp05} />
                         </Grid>
                         <Grid item xs={isNonMobile ? 4 : isNonMobile2 ? 6 : 12}>
                                <CardImage card={BTP.btp03} />
                         </Grid>
                         <Grid item xs={isNonMobile ? 4 : isNonMobile2 ? 6 : 12}>
                               <CardImage card={BTP.btp04} />
                         </Grid>
                         <Grid item xs={isNonMobile ? 4 :isNonMobile2 ? 6 : 12}>
                                <CardImage card={BTP.btp01} />
                         </Grid>
                         <Grid item xs={isNonMobile ? 4 : isNonMobile2 ? 6 : 12}>
                               <CardImage card={BTP.btp02} />
                         </Grid>
                         <Grid item xs={isNonMobile ? 4 : isNonMobile2 ? 6 : 12}>
                               <CardImage card={BTP.btp09} />
                         </Grid>
                   </Grid>
             </Container>
             <Container sx={{paddingBottom:"80px"}}>
                  <Grid container spacing={10} justifyContent="center" alignItems="center" >
                        <Grid item xs={isNonMobile ? 6 : 12}>
                              <Button variant="text" 
                                      startIcon={<VerifiedIcon />} 
                                      size="large"  
                                      sx={{color:color2, fontWeight:"bold", }}>
                                      Nos engins ont toutes leurs vérifications générales périodiques (VGP) 
                              </Button>
                        </Grid>
                        <Grid item xs={isNonMobile ? 6 : 12}>
                              <Button variant="text" 
                                      size="large" 
                                      startIcon={<VerifiedUserIcon />}
                                      sx={{color:color2, fontWeight:"bold", }}>
                                          Nos opérateurs sont certifiés selon les normes de sécurité les plus strictes
                              </Button>
                        </Grid>
                  </Grid>
             </Container>
             
        </Box>
    )
}

export default BTPEngineList;

 