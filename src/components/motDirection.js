import { Box, Avatar, Stack, useMediaQuery, Typography, Paper, Grid } from "@mui/material";
import { deepOrange, deepPurple } from '@mui/material/colors';
import { color } from "../theme";
import DG from "../assets/Nouveau dossier/DG.png";
import DAF from "../assets/Nouveau dossier/DAF.png";


const MotDirection = () => {

    const color0 = color.white.niveau0;
    const color5 = color.white.niveau100;
    const isNonMobile = useMediaQuery("(min-width:1000px)")

    return (
        <Box sx={{bgcolor:color0, padding:isNonMobile ? "100px" : "10px", paddingBottom:"10px", 
                  paddingTop:isNonMobile ? "100px" : "50px"}}>
              <Grid container spacing={8} justifyContent="center" alignItems="center" >
                    <Grid item xs={ isNonMobile ? 3 : 0 } > 
                         
                    </Grid> 
                    <Grid item xs={ isNonMobile ? 6 : 12 } >
                          <Paper elevation={10} sx={{borderRadius:"15px", padding:"20px"}}>
                                 <Stack direction={isNonMobile ? "row" : "column"} spacing={isNonMobile ? 8 : 4}>
                                       <Avatar sx={{ bgcolor: deepOrange[500], width: isNonMobile ? 180 : 180, 
                                                                               height: isNonMobile ? 180 : 180 }} 
                                                                               src={DG} />
                                       <Typography variant="paragraph" sx={{color:color5, textAlign:"center"}}>
                                                   « Vous méritez ce qu'il y a de mieux. C'est pourquoi notre objectif 
                                                   est de vous offrir un service de transport au standing international.»
                                                   < br/>
                                                   < br/>
                                                   <strong> Charkes Peggy MBADJI <br/> </strong>
                                                    Directeur Général Transaf Sarl
                                       </Typography>
                                 </Stack>
                          </Paper>
                    </Grid>
                    <Grid item xs={ isNonMobile ? 3 : 0 } > 
                         
                    </Grid>        
              </Grid>
        </Box>
    )
}

export default MotDirection;