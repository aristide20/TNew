//import CssBaseline from '@mui/material/CssBaseline';
import { color } from '../../theme';
import { Button, Typography, Grid,
         Box, useMediaQuery, Paper, Dialog, DialogActions, 
          DialogContent, DialogContentText, DialogTitle, Container } from '@mui/material';
import { useSelector } from "react-redux";
import {useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
//import { useDispatch } from "react-redux";
//import Form from "../../components/Form2";
//import { useNavigate } from 'react-router-dom';
//import logo from "../../assets/logo.png";
import FormCommand from '../../components/FormCommand02';
import UserSpeedDial from "../../components/UserDial";
//import fond01 from "../../assets/fondLogo01.png";
//import fond02 from "../../assets/fondLogo02.png";

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
    const isNonMobile = useMediaQuery("(min-width:900px)");
    const isNonMobile2 = useMediaQuery("(min-width:600px)");
    //const isNonMobile3 = useMediaQuery("(min-width:400px)");
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


    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };


    // <img src={isNonMobile2 ? fond01 : fond02 } alt="logo"  width="100%"  />

    return (
        <Box position="static" sx={{minHeight:"700px", width:"100%", marginTop:"100px",
              padding:isNonMobile ? "50px" : isNonMobile2 ? "25px" : "10px", marginBottom:"50px"  }}>
             <Grid container justifyContent="center" alignItems="center" spacing={2}>
                   <Grid item xs={ isNonMobile ? 9 : 3}> <UserSpeedDial /> </Grid>
                   <Grid item xs={isNonMobile ? 3 : 9}>
                        <Paper elevation={5} sx={{ display:"flex", justifyContent:"center",
                                                   alignItems:"center", bgcolor:color2}}>
                               <Button variant="text" sx={{color:color1, fontWeight:"bold"}}>
                                      { user !== undefined ? user.isPartner ?"Liste Vehicules" : "Devenir Partenaire" : "vide"}
                               </Button>    
                        </Paper>
                   </Grid>
                   <Grid item xs={ isNonMobile ? 9 : 3}></Grid>
                   <Grid item xs={isNonMobile ? 3 : 9}>
                        <Paper elevation={5} sx={{ display:"flex", justifyContent:"center", width:"90%",
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
                   </Grid>
                   <Grid item xs={12}>
                         <Typography variant="h4" sx={{color:color2, fontWeight:"bold"}}>
                                   Tableau de Bord de vos commandes
                         </Typography>
                   </Grid>
                   <Grid item xs={12}>
                         <Paper elevation={5} sx={{width:isNonMobile ? "85%" : "90%",
                                            minHeight: "400px",
                                            display:"flex", flexDirection:"column", justifyContent:"center",
                                            alignItems:"center", bgcolor:color2}}>
                                {user !== undefined ? user.isPartner ? 
                                <Container>
                                       <stack dirction="column" justifyContent="center" alignItems="center">
                                             <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                                      <AccordionSummary expandIcon={<ExpandMoreIcon />}
                                                                        aria-controls="panel1bh-content"
                                                                        id="panel1bh-header"
                                                                  >
                                                                   <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                                                              Commande Id
                                                                   </Typography>
                                                                   <Typography sx={{ color: 'text.secondary' }}>
                                                                               {}
                                                                   </Typography>
                                                      </AccordionSummary>
                                                      <AccordionDetails>
                                                                   <Typography>
                                                                            Nulla facilisi. Phasellus sollicitudin nulla 
                                                                            et quam mattis feugiat. Aliquam eget maximus 
                                                                            est, id dignissim quam.
                                                                   </Typography>
                                                      </AccordionDetails>
                                             </Accordion>
                                       </stack>
                                </Container>
                                            : 
                                <Container>

                                 </Container>
                                             : 
                                <Typography> Vide!! Pas de Compte</Typography>
                             }
                         </Paper>
                   </Grid>
             </Grid>
        </Box>
    )
}

export default Body;
