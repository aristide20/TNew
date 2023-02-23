import { Box, Avatar, Stack, useMediaQuery, Typography, Paper, Grid } from "@mui/material";
import { deepOrange, deepPurple } from '@mui/material/colors';
import { color } from "../theme";


const MotClients = () => {

    const color0 = color.white.niveau0;
    const color5 = color.white.niveau100;
    const isNonMobile = useMediaQuery("(min-width:700px)")

    return (
        <Box sx={{bgcolor:color0, padding:isNonMobile ? "100px" : "10px", paddingBottom:"10px", 
                  paddingTop:isNonMobile ? "100px" : "50px"}}>
              <Grid container spacing={8} justifyContent="center" alignItem="center" >
                    <Grid item xs={ isNonMobile ? 6 : 12 } >
                          <Paper elevation={10} sx={{borderRadius:"15px", padding:"20px"}}>
                                 <Stack direction="row" spacing={isNonMobile ? 8 : 2}>
                                       <Avatar sx={{ bgcolor: deepOrange[500], width: 180, height: 180 }}>Client 01</Avatar>
                                       <Typography variant="paragraph" sx={{color:color5}}>
                                                     Temoignage d'un client Satisfait
                                       </Typography>
                                 </Stack>
                          </Paper>
                    </Grid>
                    <Grid item xs={ isNonMobile ? 6 : 12 } > 
                         <Paper elevation={10} sx={{borderRadius:"15px", padding:"20px"}}> 
                               <Stack direction="row" spacing={isNonMobile ? 8 : 2}>
                                     <Avatar sx={{ bgcolor: deepPurple[500],  width: 180, height: 180 }}>Client 02</Avatar> 
                                     <Typography variant="paragraph" sx={{color:color5}}>
                                                   Temoignage d'un client Satisfait
                                       </Typography>   
                                </Stack> 
                          </Paper>
                    </Grid>        
              </Grid>
        </Box>
    )
}

export default MotClients;