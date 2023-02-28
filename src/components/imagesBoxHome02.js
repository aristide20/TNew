import { Button, Typography, Box, Container, useMediaQuery, Grid } from '@mui/material';
import camion10 from "../assets/Nouveau dossier/vehicules2.png";
import camion02 from "../assets/camion02B.PNG";
//import personne01 from "../assets/teleconseiller1.jpg";
import team from "../assets/team01.jpg";
import btp02 from "../assets/btp02b.PNG"
import { color } from '../theme';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import worker from "../assets/Nouveau dossier/DG2.png";
import { useNavigate } from 'react-router-dom';



const ImagesBoxHome02 = () => {

const isScreenToBig = useMediaQuery("(min-width: 1000px)");
const isScreenBig = useMediaQuery("(min-width: 700px)");
const background1 = color.blue.niveau100;
const background2 = color.gray.niveau100;
const navigate = useNavigate();

    return (
        <Box>
             <Grid container >
                   <Grid item xs={isScreenToBig ? 4 : isScreenBig ? 6 : 12}>
                         <Box sx={{display:"flex", justifyContent:"flex-end", alignItems:"center", height:"20rem", width:"100%"}}>
                              <img src={worker} alt="" height="100%" width="100%" />
                         </Box>
                   </Grid>
                   <Grid item xs={isScreenToBig ? 4 : isScreenBig ? 6 : 12}>
                         <Container sx={{backgroundColor: background1, display:"flex", height:"20rem",
                                         flexDirection:"column", justifyContent:"center", alignItems:"center", width:"100%"}}>
                              <Typography variant="h3" sx={{textAlign:"center", fontWeight:"bold", 
                                                            color:"white", paddingTop:"30px",
                                                            paddingBottom:"20px"}}>
                                         +100
                              </Typography>
                              <Typography variant="paragraph" sx={{textAlign:"center", color:"white", paddingBottom:"30px"}}>
                                         Avec une flotte de plus de 100 Camions de transport (Camion Benne 20t & 30t, 
                                         Semi-remorque, citerne...) et engins de BTP (Pelle chargeuse, tractopelle, 
                                         bulldozer...), vous trouverez toujours le vehicule dont vous avez besoin chez nous!!
                              </Typography>
                              <Button size="medium" 
                                      onClick={() => {navigate('/Expediteurs')} }
                                      sx={{backgroundColor:background2, color:"white", marginBottom:"30px"}}> 
                                     Demander un Devis
                              </Button>
                         </Container>
                   </Grid>
                   <Grid item xs={isScreenToBig ? 4 : isScreenBig ? 6 : 12}>
                         <Box sx={{display:"flex", justifyContent:"flex-start", alignItems:"center", height:"20rem", width:"100%"}}>
                              <img src={camion02} alt="" height="100%" width="100%" />
                         </Box>
                   </Grid>
                   <Grid item xs={isScreenToBig ? 4 : isScreenBig ? 6 : 12}>
                        <Container sx={{backgroundColor: background2, display:"flex", height:"25rem", width:"100%",
                                         flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                              <Typography variant="h3" sx={{textAlign:"center", fontWeight:"bold", 
                                                            color:"white", paddingTop:"30px",
                                                            paddingBottom:"20px"}}>
                                         Une Equipe Dynamique et Qualifiée
                              </Typography>
                              <Typography variant="paragraph" sx={{textAlign:"center", color:"white", paddingBottom:"30px"}}>
                                        prête à tous les efforts pour fournir les meilleurs services aux meilleurs prix!!
                              </Typography>
                              <Button size="medium" 
                                      endIcon={<ForwardToInboxIcon />}
                                      onClick={() => {navigate('/Contact')} }
                                      sx={{backgroundColor:background1, color:"white", marginBottom:"30px"}}> 
                                     Contactez-Nous
                              </Button>
                         </Container>
                   </Grid>
                   <Grid item xs={isScreenToBig ? 4 : isScreenBig ? 6 : 12}>
                         <Box sx={{display:"flex", justifyContent:"flex-start", alignItems:"center",height:"25rem", width:"100%"}}>
                              <img src={team} alt="" height="100%" width="100%"/>
                         </Box>
                   </Grid>
                   <Grid item xs={isScreenToBig ? 4 : isScreenBig ? 6 : 12}>
                        <Container sx={{backgroundColor: background2, display:"flex", height:"25rem", width:"100%",
                                         flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                              <Typography variant="h3" sx={{textAlign:"center", fontWeight:"bold", 
                                                            color:"white", paddingTop:"40px",
                                                            paddingBottom:"40px"}}>
                                         Des Chauffeurs Heureux
                              </Typography>
                              <Typography variant="paragraph" sx={{textAlign:"center", color:"white", paddingBottom:"30px"}}>
                                         Volume d'affaires garanti, paiements rapides, services à prix préférentiels 
                                         (essence, pneus, assurance...).Si les chauffeurs préfèrent TRANSAF, ce n'est 
                                         pas un hasard.
                              </Typography>
                              <Button size="medium" 
                                      endIcon={<PersonAddAltIcon />}
                                      onClick={() => {navigate('/Recrutement')} }
                                      sx={{backgroundColor:background1, color:"white", marginBottom:"32px"}}> 
                                      Rejoindre Notre Equipe
                              </Button>
                         </Container>
                   </Grid>
                   <Grid item xs={isScreenToBig ? 4 : isScreenBig ? 6 : 12}>
                         <Box sx={{ height:"20rem", width:"100%"}}>
                              <img src={btp02} alt="" height="100%" width="100%" />
                         </Box>
                   </Grid>
                   <Grid item xs={isScreenToBig ? 4 : isScreenBig ? 6 : 12}>
                        <Container sx={{backgroundColor: background1, display:"flex", height:"20rem", width:"100%",
                                         flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                              <Typography variant="h3" sx={{textAlign:"center", fontWeight:"bold", 
                                                            color:"white", paddingTop:"40px",
                                                            paddingBottom:"40px"}}>
                                         +90%
                              </Typography>
                              <Typography variant="paragraph" sx={{textAlign:"center", color:"white", paddingBottom:"40px"}}>
                                         09 clients sur 10 nous recommandent, alors pourquoi pas vous?? <br />
                                         Rejoignez notre communauté de clients et partenaires satisfaits
                                         qui ont fait confiance à notre Expertise!!
                              </Typography>
                              <Button size="medium" 
                                      endIcon={<AccountBoxIcon />}
                                      onClick={() => {navigate('/connexion')} }
                                      sx={{backgroundColor:background2, color:"white", marginBottom:"35px"}}> 
                                      Creer un compte 
                              </Button>
                         </Container>
                   </Grid>
                   <Grid item xs={isScreenToBig ? 4 : isScreenBig ? 6 : 12}>
                         <Box sx={{display:"flex", justifyContent:"flex-start", alignItems:"center", height:"20rem", width:"100%"}}>
                              <img src={camion10} alt="" height="100%" width="100%" />
                         </Box>
                   </Grid>
             </Grid>
        </Box>
    )
}

export default ImagesBoxHome02;