import { Box, Avatar, Stack, useMediaQuery, Typography, Paper, Grid } from "@mui/material";
import { deepOrange, deepPurple } from '@mui/material/colors';
import { color } from "../theme";


const MotDirection = () => {

    const color0 = color.white.niveau0;
    const color5 = color.white.niveau100;
    const isNonMobile = useMediaQuery("(min-width:700px)")

    return (
        <Box sx={{bgcolor:color0, padding:isNonMobile ? "100px" : "10px", paddingBottom:"10px", 
                  paddingTop:isNonMobile ? "100px" : "50px"}}>
              <Grid container spacing={8} justifyContent="center" alignItems="center" >
                    <Grid item xs={ isNonMobile ? 6 : 12 } >
                          <Paper elevation={10} sx={{borderRadius:"15px", padding:"20px"}}>
                                 <Stack direction="row" spacing={isNonMobile ? 8 : 2}>
                                       <Avatar sx={{ bgcolor: deepOrange[500], width: isNonMobile ? 180 : 100, 
                                                                               height: isNonMobile ? 180 : 100 }}>PDG</Avatar>
                                       <Typography variant="paragraph" sx={{color:color5}}>
                                                   Petit Mot du President Directeur General de TRANSAF Sarl 
                                                   (Transport et Services d'Afrique)
                                       </Typography>
                                 </Stack>
                          </Paper>
                    </Grid>
                    <Grid item xs={ isNonMobile ? 6 : 12 } > 
                         <Paper elevation={10} sx={{borderRadius:"15px", padding:"20px"}}> 
                               <Stack direction="row" spacing={isNonMobile ? 8 : 2}>
                                     <Avatar sx={{ bgcolor: deepPurple[500],  width: isNonMobile ? 180 : 100, 
                                                                              height: isNonMobile ? 180 : 100 }}>DGA</Avatar> 
                                     <Typography variant="paragraph" sx={{color:color5}}>
                                                   Petit Mot du Directeur General Adjoint de TRANSAF Sarl 
                                                   (Transport et Services d'Afrique)
                                       </Typography>   
                                </Stack> 
                          </Paper>
                    </Grid>        
              </Grid>
        </Box>
    )
}

export default MotDirection;