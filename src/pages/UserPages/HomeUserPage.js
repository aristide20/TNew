//import CssBaseline from '@mui/material/CssBaseline';
import { color } from '../../theme';
import { Button, Typography, Grid, Alert,
         Box, useMediaQuery, Paper, Dialog, DialogActions, 
          DialogContent, DialogContentText, DialogTitle, Container } from '@mui/material';
import { useSelector } from "react-redux";
import {useEffect, useState } from 'react';
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
import CircularProgress from '@mui/material/CircularProgress';
import * as api from "../../api/index";
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

    const [display, setDisplay] = useState(true);
    const [brutData, setBrutData] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const [statut, setStatut] = useState(0);

    

    const handleDisplay = () => {

      setDisplay(true);

        try {
            api.getCommands().then((resp) => {
                  setDisplay(false);
                  console.log(resp);
                  console.log(resp.data);
                  if(resp.status === 200) {
                        setStatut(1);
                        console.log(statut);
                        setBrutData(resp.data.commandes);
                        setFilterData( brutData.map((commande) => { if(user.fullName === commande.commanditaire) {
                              return commande
                        }}) ) 
                        console.log(brutData);
                        console.log(filterData);
                  }
            }).catch((error) => {
                  setStatut(-1);
                  setDisplay(false);
                  console.log(statut);
                  console.log(error);
                  console.log(error.name);
                  console.log(error.code);
            })
        } catch (error) {
            setStatut(-2);
            setDisplay(false);
            console.log(statut);
            console.log(error);
            console.log(error.name);
            console.log(error.code);
        }
        
    }

    
    //
    /*
    useEffect(() => {
      handleDisplay();
    })*/
    /*
    useEffect(function(){
      if(statut !== 0){
          let cleanup = setTimeout(()=>{ setStatut(0);; }, 7000);
          console.log("remove dialog")
          return () => {
               clearInterval(cleanup)
           }
        } 
        
    });*/


    const tabDisplay = filterData.map((item) => {
        return ( 
            <Accordion>
                      <AccordionSummary   expandIcon={<ExpandMoreIcon />}
                                          aria-controls="panel1a-content"
                                          id="panel1a-header"
>
                                         <Typography sx={{color:"black"}}> Commande {item._id} </Typography>
                       </AccordionSummary>
                              <AccordionDetails>
                                      <Typography sx={{color:"black"}}>
                                           Commanditaire: {item.commanditaire}
                                      </Typography>
                                      <Typography sx={{color:"black"}}>
                                           Ville de départ: {item.villeDepart}
                                      </Typography >
                                      <Typography sx={{color:"black"}}>
                                           Ville d'arrivée: {item.villeArrivee}
                                      </Typography>
                                      <Typography sx={{color:"black"}}>
                                           Jour d'éxecution de la commande: {item.jourDepart}
                                      </Typography>
                     </AccordionDetails>
            </Accordion>)
    })

    
    


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
                               <Button variant="text"
                                       onClick={() => handleDisplay()} 
                                       sx={{color:color1, fontWeight:"bold"}}>
                                      Afficher vos commandes
                               </Button>    
                        </Paper>
                   </Grid>
                   <Grid item xs={ isNonMobile ? 9 : 3}>  </Grid>
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
                        <Paper elevation={5} sx={{ display:"flex", justifyContent:"center",
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
                                            alignItems:"center", bgcolor:color1}}>
                                { display && <CircularProgress /> }
                                { statut === 1 && filterData.length === 0 &&
                                  <Container>
                                            <Typography sx={{color:color2}}>
                                                    Aucune commande dans votre Historique
                                            </Typography>
                                    </Container>}
                                    { statut === 1 && filterData.length > 0 &&
                                         tabDisplay }
                                    { statut === -1 && 
                                  <Container>
                                          <Alert severity="error"> 
                                                   Bad Request, Error 500
                                              </Alert> 
                                    </Container>}
                                    { statut === -2 && 
                                  <Container>
                                             <Alert severity="error"> 
                                                    Network Error, Error 404!!!!!
                                              </Alert> 
                                    </Container>}
                         </Paper>
                   </Grid>
             </Grid>
        </Box>
    )
}

export default Body;
