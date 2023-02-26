import { Button, Typography, Box, Container, useMediaQuery, Grid } from '@mui/material';
import { color } from "../theme";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';

const CommandEnginsBox = () => {

    const color1 = color.gray.niveau20;     // fond gris
    const color2 = color.white.niveau100;  // black pour le text
    const color3 = color.blue.niveau100;
    const color4 = color.white.niveau0;   // blanc
    const isNonMobile = useMediaQuery("(min-width:800px)");
    //const isNonMobile2 = useMediaQuery("(min-width:500px)");

    return (
        <Box sx={{paddingBottom:'100px', width:"100%", backgroundColor: color1}}>
              <Container sx={{ display:"flex", 
                              flexDirection:"column", 
                              justifyContent:"center", 
                              alignItems:"center"}}>
                        <Typography variant="h5" sx={{color:color2, fontWeight:"bold", paddingBottom:"20px"}}>
                                   Commander les engins dont vous avez besoin
                        </Typography>
                        <Box sx={{ width: isNonMobile ? "70%" : "60%", 
                                   backgroundColor:color4, 
                                   borderRadius:"10px",
                                   padding:"20px", 
                                   display:"flex", 
                                   flexDirection:"column",
                                   justifyContent:"center",
                                   alignItems:"center" }} >
                             <Grid container spacing={3}>
                                   <Grid item xs={isNonMobile ? 4 : 12}>
                                         <Button variant="outlined" size="large" startIcon={<PhoneIphoneIcon />}
                                                  sx={{borderColor:color3, color:color2}}>
                                                 +(237) 696 098 293
                                         </Button>
                                   </Grid>
                                   <Grid item xs={isNonMobile ? 4 : 12}>
                                         <Button variant="contained" size="large" sx={{backgroundColor:color3}}>
                                                 Demander un devis
                                         </Button>
                                   </Grid>
                                   <Grid item xs={isNonMobile ? 4 : 12}>
                                         <Button variant="outlined" size="large" startIcon={<WhatsAppIcon />} 
                                                 sx={{borderColor:color3, color:color2}}>
                                                 +(237) 696 098 293
                                         </Button>
                                   </Grid>
                             </Grid>
                        </Box>
             </Container>
        </Box>
    )
}

export default CommandEnginsBox;