//import CssBaseline from '@mui/material/CssBaseline';
import { color } from '../../theme';
import { Button, Typography, 
         Box, useMediaQuery, Paper, Dialog, DialogActions, 
          DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { useSelector } from "react-redux";
import {useState } from 'react';
//import { useDispatch } from "react-redux";
//import Form from "../../components/Form2";
//import { useNavigate } from 'react-router-dom';
//import logo from "../../assets/logo.png";
import FormCommand from '../../components/FormCommand02';
import fond01 from "../../assets/fondLogo01.png";
import fond02 from "../../assets/fondLogo02.png";


const Body = () => {

    //const dispatch = useDispatch();
    //const navigate = useNavigate();
    const color1 = color.white.niveau0;
    const color2 = color.blue.niveau100;
    const user = useSelector((state) => state.UserReducer.user) 
    //const Commandes = useSelector((state) => state.UserReducer.commandes)
    const isNonMobile = useMediaQuery("(min-width:800px)");
    //const pbox = isNonMobile ? "30px" : "10px";
    //console.log(Commandes);
    //const topLogo = isNonMobile ? "40px" : "-40px";
    //const leftLogo = isNonMobile ? "180px" : "100px";

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    

    return (
        <Box position="relative" sx={{minHeight:"700px", width:"100%"}}>
             <img src={isNonMobile ? fond01 : fond02 } alt="logo" width="100%"  />
             <Box position="absolute" sx={{top:isNonMobile ? "300px" : "280px",
                                           left:isNonMobile ? "400px" : "60px" }} >
                 <Typography variant="h4" sx={{color:color2, fontWeight:"bold"}}>
                            Tableau de Bord de vos commandes
                </Typography>
             </Box>
             <Box position="absolute" sx={{top:isNonMobile ? "100px" : "100px",
                                           left:isNonMobile ? "1000px" : "265px" }} >
                  <Paper elevation={5} sx={{width:isNonMobile ? "200px" : "180px",
                                            height:isNonMobile ? "70px" : "50px",
                                            display:"flex", justifyContent:"center",
                                            alignItems:"center", bgcolor:color2}}>
                        <Button variant="text" sx={{color:color1, fontWeight:"bold"}}>
                                Devenir Partenaire
                        </Button>    
                  </Paper>
             </Box>
             <Box position="absolute" sx={{top:isNonMobile ? "190px" : "180px",
                                            left:isNonMobile ? "1000px" : "265px" }} >
                 <Paper elevation={5} sx={{width:isNonMobile ? "200px" : "180px",
                                            height:isNonMobile ? "70px" : "50px",
                                            display:"flex", justifyContent:"center",
                                            alignItems:"center", bgcolor:color2}}>
                        <Button variant="text" onClick={handleClickOpen} sx={{color:color1, fontWeight:"bold"}}>
                                Commander un Camion
                        </Button>
                        <Dialog open={open} onClose={handleClose}>
                                <DialogTitle>Commande</DialogTitle>
                                <DialogContent>
                                        <DialogContentText>
                                                Precisez nous vos besoins et un agent vous contactera dans 
                                                l'heure pour finaliser votre commande!!
                                        </DialogContentText>
                                                <FormCommand />
                                        </DialogContent>
                                        <DialogActions>
                                                <Button onClick={handleClose}>Annuler</Button>
                                                <Button onClick={handleClose}>Confirmer</Button>
                                        </DialogActions>
                                </Dialog>
                  </Paper>
             </Box>
             <Box position="absolute" sx={{top:isNonMobile ? "400px" : "400px",
                                           left:isNonMobile ? "200px" : "30px" }} >
                  <Paper elevation={5} sx={{width:isNonMobile ? "950px" : "400px",
                                            height:isNonMobile ? "450px" : "600px",
                                            display:"flex", flexDirection:"column", justifyContent:"center",
                                            alignItems:"center", bgcolor:color2}}>

                  </Paper>
             </Box>
        </Box>
    )
}

export default Body;


/**
 * 
 *  <Container sx={{padding:pbox, width:"90%"}}>
                 <Grid container spacing={4}>
                       <Grid item xs={ isNonMobile ? 7 : 12} >
                            
                       </Grid>
                       <Grid item xs={ isNonMobile ? 2 : 0} ></Grid>
                       <Grid item xs={ isNonMobile ? 3 : 12} >
                           <Paper elevation={10} sx={{width:"80%", height:"50px", borderRadius:"8px",
                                                      display:"flex", justifyContent:"center", alignItems:"center"}}>
                                <Button variant="text">
                                        Devenir Partenaire
                                </Button>
                           </Paper>
                       </Grid>
                       <Grid item xs={ isNonMobile ? 9 : 0} ></Grid>
                       <Grid item xs={ isNonMobile ? 3 : 12} >
                       <Paper elevation={10} sx={{width:"80%", height:"50px", borderRadius:"8px",
                                                      display:"flex", justifyContent:"center", alignItems:"center"}}>
                                <Button variant="text" onClick={handleClickOpen}>
                                        Commander un Camion ou un Engin BTP
                                </Button>
                                <Dialog open={open} onClose={handleClose}>
                                     <DialogTitle>Commande</DialogTitle>
                                     <DialogContent>
                                                <DialogContentText>
                                                           Precisez nous vos besoins et un agent vous contactera dans 
                                                           l'heure pour finaliser votre commande!!
                                                </DialogContentText>
                                                <FormCommand />
                                     </DialogContent>
                                     <DialogActions>
                                                <Button onClick={handleClose}>Annuler</Button>
                                                <Button onClick={handleClose}>Confirmer</Button>
                                     </DialogActions>
                                </Dialog>
                           </Paper>
                       </Grid>
                       <Grid item xs={8}>
                            <Typography variant="h4" sx={{color:color2, fontWeight:"bold"}}>
                                     Tableau de Bord de vos commandes
                             </Typography>
                       </Grid>
                       <Grid item xs={12} >
                             <Paper elevation={10} sx={{padding:"4%", minHeight:"400px"}}>
                                    { Commandes.length === 0 ?
                                      <Stack sx={{display:"flex", flexDirection:"column",
                                                      justifyContent:"center", alignItems:"center"}}>
                                                 <Typography variant="h2" sx={{color:color.gray.niveau40}}>
                                                            Oups...Pas de commandes!!
                                                 </Typography>
                                                 <Button variant="contained" onClick={handleClickOpen}>
                                                         Commander un Camion ou un Engin BTP
                                                 </Button>
                                                 <Dialog open={open} onClose={handleClose}>
                                                       <DialogTitle>Commande</DialogTitle>
                                                               <DialogContent>
                                                                       <DialogContentText>
                                                                                Precisez nous vos besoins et un agent 
                                                                                vous contactera dans 
                                                                                l'heure pour finaliser votre commande!!
                                                                       </DialogContentText>
                                                                        <FormCommand />
                                                               </DialogContent>
                                                       <DialogActions>
                                                                <Button onClick={handleClose}>Annuler</Button>
                                                                <Button onClick={handleClose}>Confirmer</Button>
                                                       </DialogActions>
                                               </Dialog>
                                      </Stack> :
                                      <Container>

                                      </Container> }
                             </Paper>
                       </Grid>
                       <Grid item xs={ isNonMobile ? 3 : 0} ></Grid>
                 </Grid>       
            </Container>
            <Box position="absolute" sx={{zindex:10, top:topLogo, left:leftLogo, width:"200px", borderRadius:"10px"}}>
                 <Paper elevation={10} sx={{width:"100%", backgroundColor:color2}}>
                        <img src={logo} alt="logo" width="100%"  /> 
                 </Paper>
            </Box>
 */