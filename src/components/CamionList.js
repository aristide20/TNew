import { Button, Box, Container, useMediaQuery, Grid } from '@mui/material';
import { color } from "../theme";
import VerifiedIcon from '@mui/icons-material/Verified';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import CardImage2 from "./cardImage2";
import { camionsData } from "./data/data";


const CamionList = () => {

const color1 = color.gray.niveau20;     // fond gris
const color2 = color.white.niveau100;  // black pour le text
const isNonMobile = useMediaQuery("(min-width:1000px)");
const isNonMobile2 = useMediaQuery("(min-width:700px)");


return (
   <Box sx={{width:"100%", backgroundColor: color1}}>
        <Container sx={{paddingTop:"20px", paddingBottom:"50px"}}>
              <Grid container spacing={3} justifyContent="center" alignItems="center">
                   <Grid item xs={isNonMobile ? 4 : isNonMobile2 ? 6 : 12}>
                          <CardImage2 card={camionsData.camion1} />
                    </Grid>
                    <Grid item xs={isNonMobile ? 4 : isNonMobile2 ? 6 : 12}>
                          <CardImage2 card={camionsData.camion2} />
                    </Grid>
                    <Grid item xs={isNonMobile ? 4 : isNonMobile2 ? 6 : 12}>
                          <CardImage2 card={camionsData.camion3} />
                    </Grid>
                    <Grid item xs={isNonMobile ? 4 : isNonMobile2 ? 6 : 12}>
                           <CardImage2 card={camionsData.camion4} />
                    </Grid>
                    <Grid item xs={isNonMobile ? 4 : isNonMobile2 ? 6 : 12}>
                           <CardImage2 card={camionsData.camion5} />
                    </Grid>
                    <Grid item xs={isNonMobile ? 4 : isNonMobile2 ? 6 : 12}>
                           <CardImage2 card={camionsData.camion6} />
                    </Grid>
                    <Grid item xs={isNonMobile ? 4 : isNonMobile2 ? 6 : 12}>
                          <CardImage2 card={camionsData.camion7} />
                    </Grid>
                    <Grid item xs={isNonMobile ? 4 :isNonMobile2 ? 6 : 12}>
                           <CardImage2 card={camionsData.camion8} />
                    </Grid>
                    <Grid item xs={isNonMobile ? 4 : isNonMobile2 ? 6 : 12}>
                          <CardImage2 card={camionsData.camion9} />
                    </Grid>
                    <Grid item xs={isNonMobile ? 4 : isNonMobile2 ? 6 : 12}>
                          <CardImage2 card={camionsData.camion10} />
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

export default CamionList;

