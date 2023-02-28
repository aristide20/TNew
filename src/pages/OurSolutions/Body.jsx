import { Stack, Box, Typography, Paper, Container, useMediaQuery } from '@mui/material';
import image1 from "../../assets/Truck01.png";
import { useSelector } from "react-redux";
import MobileMenuBox from "../../components/MobileMenuBox";



const Body = () => {

    const isNonMobile = useMediaQuery("(min-width:700px)")
    const isScreenBig = useMediaQuery("(min-width:800px)");
    //const isMobileMenuToggledState = useSelector((state) => state.UserReducer.isMobileMenuToggled);
    const isMobileMenuToggledState = useSelector((state) => state.persistedReducer.isMobileMenuToggled);

    return (
        <Box position="relative" sx={{display:"flex", 
                                      flexDirection:"column", 
                                      justifyContent:"center", 
                                      alignItems:"center",
                                      padding:isNonMobile ? "100px" : "5px",
                                      paddingTop:"100px", paddingBottom:"100px"}} >
            <Typography variant={isNonMobile ? "h2" : "h4"} sx={{fontWeight:"bold", paddingBottom:"50px"}}>
                        NOS SOLUTIONS
            </Typography>
            <Stack direction="column" display="flex" justifyContent="center" alignItems="center" spacing={4}>
                   <Container sx={{width:isNonMobile ? "70%" : "85%", paddingBottom:"50px"}}>
                            <Typography variant="h5" sx={{paddingBottom:"30px"}}>
                                       Solution transport et livraison 
                            </Typography>
                            <Paper elevation={10} sx={{borderRadius:"20px", padding:isNonMobile ? "50px" : "10px"}}>
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
                    <Container sx={{width:isNonMobile ? "70%" : "85%", paddingBottom:"50px"}}>
                            <Typography variant="h5" sx={{paddingBottom:"30px"}}>
                                         Service d'entreposage (bientôt) 
                            </Typography>
                            <Paper elevation={10} sx={{borderRadius:"20px", padding:isNonMobile ? "50px" : "10px",
                                                        minHeight:"80px"}}>
                                    <Typography> Coming Soon </Typography>
                            </Paper>
                    </Container>
                    <Container sx={{width:isNonMobile ? "70%" : "85%", paddingBottom:"50px"}}>
                            <Typography variant="h5" sx={{paddingBottom:"30px"}}>
                                       Location
                            </Typography>
                            <Paper elevation={10} sx={{borderRadius:"20px", padding:isNonMobile ? "50px" : "10px",
                                                        minHeight:"80px"}}>
                                    <Typography> Coming Soon </Typography>
                            </Paper>
                    </Container>
            </Stack>
            <Box position="absolute" sx={{top:"50px", left:"40px"}}>
                <img src={image1} alt="" width={isNonMobile ? "100px" : "80px"} />
            </Box>
            <Box position="absolute" sx={{top:"600px", left:isNonMobile ? "100px" : "80px"}}>
                <img src={image1} alt="" width={isNonMobile ? "100px" : "80px"} />
            </Box>
            <Box position="absolute" sx={{top:"1100px", left:isNonMobile ? "100px" : "80px"}}>
                <img src={image1} alt="" width={isNonMobile ? "100px" : "80px"} />
            </Box>
            {!isScreenBig && isMobileMenuToggledState && <MobileMenuBox />}
        </Box>
    )
}

export default Body;