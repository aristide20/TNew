//import CssBaseline from '@mui/material/CssBaseline';
import { color } from '../../theme';
import { Button, Typography, 
         Box, useMediaQuery, Paper, Dialog, DialogActions, 
          DialogContent, DialogContentText, DialogTitle, Container } from '@mui/material';
import { useSelector } from "react-redux";
import {useState } from 'react';
//import { useDispatch } from "react-redux";
//import Form from "../../components/Form2";
//import { useNavigate } from 'react-router-dom';
//import logo from "../../assets/logo.png";
import FormCommand from '../../components/FormCommand02';
import fond01 from "../../assets/fondLogo01.png";
import fond02 from "../../assets/fondLogo02.png";

//import * as api from "../../api/index";


const Body = () => {

    //const dispatch = useDispatch();
    //const navigate = useNavigate();
    const color1 = color.white.niveau0;
    const color2 = color.blue.niveau100;
    //const user = useSelector((state) => state.UserReducer.user);
    const user = useSelector((state) => state.persistedReducer.user);
    //const commandes = useSelector((state) => state.persistedReducer.commandes);
    //const Commandes = useSelector((state) => state.UserReducer.commandes)
    const isNonMobile = useMediaQuery("(min-width:800px)");
    //const dispatch = useDispatch();
    //dispatch(loginStatut(false));
    //const pbox = isNonMobile ? "30px" : "10px";
    //console.log(Commandes);
    //const topLogo = isNonMobile ? "40px" : "-40px";
    //const leftLogo = isNonMobile ? "180px" : "100px";

   /* useEffect(() => {
       const ComData = api.fetchCommands()
        
    }, []) */
/*
    const CommData = api.FetchCommands();
    console.log(CommData)
    console.log(commandes) */
    


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
                                { user !== null ? user.isPartner ?"Liste Vehicules" : "Devenir Partenaire" : "vide"}
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
                           {user !== null ? user.isPartner ? 
                             <Container>
                                       user.
                             </Container>
                             : 
                             <Container>

                             </Container>
                             : <Typography> Vide!! Pas de Compte</Typography>
                             }
                  </Paper>
             </Box>
        </Box>
    )
}

export default Body;
