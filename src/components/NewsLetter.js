import { Button, Typography, Box, Container, useMediaQuery, Grid, TextField } from '@mui/material';
import { color } from '../theme';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { useState } from 'react';

const NewsLetter = () => {

    const color1 = color.blue.niveau100;
    const color4 = color.gray.niveau20;
    const isScreenToBig = useMediaQuery("(min-width: 1200px)");
    const isScreenBig = useMediaQuery("(min-width: 800px)");
    const isScreenSmall = useMediaQuery("(min-width: 600px)");
    const [newsLetterEmail, setNewsLetterEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    }


    return (
        <Box sx={{ backgroundColor: color4,
                   width:"100%",
                   paddingTop: "40px",
                   paddingBottom: "50px" }}>

             <Container sx={{marginBottom: "50px", width: isScreenBig ? "60%" : "85%"}}>

                                   <Typography variant={ isScreenBig ? "h4" : "h6" }
                                               sx={{color:color1,
                                                    textAlign:"center"}}>
                                               Abonnez-vous et recevez les dernieres nouveautés 
                                               sur nos Offres et Services!!
                                   </Typography>

             </Container>

             <Container sx={{ backgroundColor: color1,
                              width:"70%",
                              borderStyle: "groove",
                              paddingTop:"20px",
                              borderRadius:"10px",
                              minHeight: "100px"}}>

                       <form onSubmit={handleSubmit}> 

                       <Grid  container
                              justifyContent="center"
                              alignItems="center"
                              spacing={2}>

                              <Grid item xs={isScreenToBig ? 4 : isScreenBig ? 4 : isScreenSmall ? 12 : 12}>

                                   <Button variant="text" 
                                           startIcon={<MailOutlineIcon />}
                                           sx={{color:"white"}}>
                                           Transaf NewsLetter
                                   </Button> 

                              </Grid>

                              <Grid item xs={isScreenToBig ? 6 : isScreenBig ? 8 : isScreenSmall ? 10 : 12}>

                                  <Box
                                   sx={{backgroundColor:"white",
                                       borderRadius:"10px"}}>

                                       <TextField placeholder='adresse e-mail'
                                                  autoComplete="off"
                                                  fullWidth
                                                  type='email'
                                                  name='email'
                                                  value={newsLetterEmail}
                                                  onChange={(e) => {setNewsLetterEmail(e.target.value)} } />
                                  </Box>

                              </Grid>

                              <Grid item xs={isScreenToBig ? 2 : isScreenBig ? 12 : isScreenSmall ? 2 : 12}>

                              <Box>

                                   <Button variant="contained"
                                           type="submit" 
                                           sx={{backgroundColor:"white", color:color1}}> 
                                           valider
                                   </Button>
                                   
                              </Box>
                              </Grid>
                              
                       </Grid>
                    </form>
             </Container>
        </Box>
    )
}

export default NewsLetter;