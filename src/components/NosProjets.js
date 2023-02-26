import {Typography, Box, Container, useMediaQuery, Grid, Card, CardMedia, CardContent } from '@mui/material';
import { color } from "../theme";
import fond from "../assets/Nouveau dossier/fond04.jpg";
import fond2 from "../assets/Nouveau dossier/materielchantier.jpg";


const NosProjets = () => {

    const isNonMobile = useMediaQuery("(min-width: 1200px)");
    const isNonMobile2 = useMediaQuery("(min-width: 900px)");
    const isNonMobile3 = useMediaQuery("(min-width: 600px)");
   // const color1 = color.gray.niveau20;
    const color2 = color.white.niveau0;

    return (
        <Box sx={{ width:"100%", paddingBottom:"80px", paddingTop:"80px",
                   backgroundColor:color2, paddingLeft:"20px", 
                   paddingRight:"20px",display:"flex", 
                   flexDirection:"column", justifyContent:"center", 
                   alignItems:"center"}}>
             <Container sx={{paddingBottom:"50px"}}>
                        <Typography variant="h4" sx={{fontWeight:"bold", display:"flex", 
                                    flexDirection:"column", justifyContent:"center", 
                                    alignItems:"center", paddingBottom:"20px"}}>
                                   Quelques-uns de nos projets
                         </Typography>
             </Container>
             <Grid container spacing={2} sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                   <Grid item xs={isNonMobile ? 3 : isNonMobile2 ? 4 : isNonMobile3 ? 6 : 12}>
                        <Card sx={{ maxWidth: 345, borderRadius:"15px" }} raised={true}>
                            <CardMedia component="img"
                                       height="300"
                                       image={fond}
                                       alt="green iguana"/>
                            <CardContent>
                                  <Typography variant="body2" color="text.secondary">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica
                                   </Typography>
                           </CardContent>
                        </Card>
                   </Grid>
                   <Grid item xs={isNonMobile ? 3 : isNonMobile2 ? 4 : isNonMobile3 ? 6 : 12}>
                        <Card sx={{ maxWidth: 345, borderRadius:"15px" }} raised={true}>
                            <CardMedia component="img"
                                       height="300"
                                       image={fond2}
                                       alt="green iguana"/>
                            <CardContent>
                                  <Typography variant="body2" color="text.secondary">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica
                                   </Typography>
                           </CardContent>
                        </Card>
                   </Grid>
                   <Grid item xs={isNonMobile ? 3 : isNonMobile2 ? 4 : isNonMobile3 ? 6 : 12}>
                        <Card sx={{ maxWidth: 345, borderRadius:"15px" }} raised={true}>
                            <CardMedia component="img"
                                       height="300"
                                       image={fond}
                                       alt="green iguana"/>
                            <CardContent>
                                  <Typography variant="body2" color="text.secondary">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica
                                   </Typography>
                           </CardContent>
                        </Card>
                   </Grid>
                   <Grid item xs={isNonMobile ? 3 : isNonMobile2 ? 4 : isNonMobile3 ? 6 : 12}>
                        <Card sx={{ maxWidth: 345, borderRadius:"15px" }} raised={true}>
                            <CardMedia component="img"
                                       height="300"
                                       image={fond2}
                                       alt="green iguana"/>
                            <CardContent>
                                  <Typography variant="body2" color="text.secondary">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica
                                   </Typography>
                           </CardContent>
                        </Card>
                   </Grid>
              </Grid>
        </Box>
    )
}

export default NosProjets;