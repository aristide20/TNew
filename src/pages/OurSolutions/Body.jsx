import { Stack, Box, Typography, Paper, Container } from '@mui/material';
import image1 from "../../assets/Truck01.png";



const Body = () => {
    return (
        <Box position="relative" sx={{display:"flex", 
                                      flexDirection:"column", 
                                      justifyContent:"center", 
                                      alignItems:"center",
                                      padding:"100px"}} >
            <Typography variant="h2" sx={{fontWeight:"bold", paddingBottom:"50px"}}>
                        NOS SOLUTIONS
            </Typography>
            <Stack direction="column" display="flex" justifyContent="center" alignItems="center" spacing={4}>
                   <Container sx={{width:"70%", paddingBottom:"50px"}}>
                            <Typography variant="h5" sx={{paddingBottom:"30px"}}>
                                       Solution transport et livraison 
                            </Typography>
                            <Paper elevation={10} sx={{borderRadius:"20px", padding:"50px"}}>
                                  <Typography variant="paragraph">
                                             <ul>
                                                <li>
                                                    Planification des itinéraires : nous tenons compte du délai de 
                                                    livraison, du temps de chargement, des distances et du temps de 
                                                    transport,
                                                </li>
                                                <li>
                                                    Gestion de commande : un opérateur prend en charge votre commande, 
                                                    son suivi jusqu'à la livraison finale
                                                </li>
                                                <li>
                                                    Suivi en temps réel de votre commande
                                                </li>
                                                <li>
                                                 Nos options de transport : benne, remorque, porte char, remorque à benne…
                                                </li>
                                             </ul>
                                  </Typography>
                            </Paper>
                    </Container>
                    <Container sx={{width:"70%", paddingBottom:"50px"}}>
                            <Typography variant="h5" sx={{paddingBottom:"30px"}}>
                                         Service d'entreposage (bientôt) 
                            </Typography>
                            <Paper elevation={10} sx={{borderRadius:"20px", padding:"50px"}}>
                            
                            </Paper>
                    </Container>
                    <Container sx={{width:"70%", paddingBottom:"50px"}}>
                            <Typography variant="h5" sx={{paddingBottom:"30px"}}>
                                       Location
                            </Typography>
                            <Paper elevation={10} sx={{borderRadius:"20px", padding:"50px"}}>
                            
                            </Paper>
                    </Container>
            </Stack>
            <Box position="absolute" sx={{top:"50px", left:"40px"}}>
                <img src={image1} alt="" width="15%" />
            </Box>
            <Box position="absolute" sx={{top:"600px", left:"1180px"}}>
                <img src={image1} alt="" width="55%" />
            </Box>
            <Box position="absolute" sx={{top:"1100px", left:"1100px"}}>
                <img src={image1} alt="" width="55%" />
            </Box>
        </Box>
    )
}

export default Body;