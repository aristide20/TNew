//import logo01 from "../assets/logo.png";
import { Typography, Box, Stack, Container, useMediaQuery, Grid, Paper } from '@mui/material';
import { color } from '../theme';
import { styled } from '@mui/material/styles';
import logoE1 from "../assets/logoE01.jpg";
import logoE2 from "../assets/logoE02.gif";
import logoE3 from "../assets/logoE03.png";
import logoE5 from "../assets/logoE05.jpg";
import logoE6 from "../assets/logoE06.png";


const SatisfiedClients = () => {

    const color4 = color.gray.niveau20;
    const isScreenToBig = useMediaQuery("(min-width: 1200px)");
    const isScreenBig = useMediaQuery("(min-width: 900px)");
    const isScreenSmall = useMediaQuery("(min-width: 600px)");

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: 60,
        lineHeight: '60px',
      }));

    return (
        <Box sx={{ backgroundColor: color4,
            width:"100%" , paddingTop:"40px", paddingBottom:"40px"}}>
           <Container sx={{ backgroundColor: color4,
                            paddingTop:"10px"}}>
                       <Stack direction="column"
                              justifyContent="center"
                              alignItems="center"
                              spacing={2}>
                              <Box sx={{marginBottom:"30px"}}>
                                    <Typography variant='h5' sx={{fontWeight:"bold", color:"black"}}>
                                               Ils nous font confiance!!!
                                    </Typography>
                              </Box>
                              <Box sx={{paddingBottom:"40px"}}>
                                   <Grid container
                                          justifyContent="center"
                                          alignItems="center"
                                          spacing={isScreenSmall ? 8 : 2}>
                                          <Grid item xs={isScreenToBig ? 2 : isScreenBig ? 3 : isScreenSmall ? 4 : 6}>
                                                <Item elevation={6} sx={{width:"150px", height:"100px"}}>
                                                      <img src={logoE1} alt="logo" width="150px" height="100px"/>
                                                 </Item>
                                          </Grid>
                                          <Grid item xs={isScreenToBig ? 2 : isScreenBig ? 3 : isScreenSmall ? 4 : 6}>
                                               <Item elevation={6} sx={{width:"150px", height:"100px"}}>
                                                     <img src={logoE2} alt="logo" width="150px" height="100px"/>    
                                               </Item>
                                          </Grid>
                                          <Grid item xs={isScreenToBig ? 2 : isScreenBig ? 3 : isScreenSmall ? 4 : 6}>
                                                <Item elevation={6} sx={{width:"150px", height:"100px"}}> 
                                                      <img src={logoE3} alt="logo" width="150px" height="100px"/>
                                                </Item>
                                          </Grid>
                                          <Grid item xs={isScreenToBig ? 2 : isScreenBig ? 3 : isScreenSmall ? 4 : 6}>
                                               <Item elevation={6} sx={{width:"150px", height:"100px"}}> 
                                                     <img src={logoE5} alt="logo" width="150px" height="100px"/>
                                               </Item>
                                          </Grid>
                                          <Grid item xs={isScreenToBig ? 2 : isScreenBig ? 3 : isScreenSmall ? 4 : 6}>
                                               <Item elevation={6} sx={{width:"150px", height:"100px"}}> 
                                                     <img src={logoE6} alt="logo" width="150px" height="100px"/>
                                                </Item>
                                          </Grid>                                     
                                   </Grid>
                              </Box>
                              <Box>
                                    
                              </Box>
                       </Stack>
           </Container>
        </Box>
    )
}

export default SatisfiedClients;