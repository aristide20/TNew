//import CssBaseline from '@mui/material/CssBaseline';
import { color } from '../../../theme';
import { Button, Typography, Grid, Avatar,
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
import FormCommand from '../../../components/FormCommand02';
import UserSpeedDial from "../../../components/UserDial";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
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
        <Box position="static" sx={{minHeight:"700px", width:"100%", marginTop:"10px", marginBottom:"40px", 
                                    padding: isNonMobile ? "50px" : "10px",
              display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"   }}>
              <Grid container spacing={4} >
                    <Grid item xs={isNonMobile ? 6 : 12}>
                          <Stack direction="column" justifyContent="center" alignItems="center">
                                 <Avatar sx={{ width: 180, 
                                               height: 180, marginBottom:"20px" }} 
                                               src={<AccountCircleIcon />} />
                                 <Typography> id : {user._id} </Typography>
                           </Stack>
                     </Grid>
                    <Grid item xs={isNonMobile ? 6 : 12}>
                          <Typography> Nom : {user.fullName} </Typography>
                          <Typography> adresse email : {user.email} </Typography>
                          <Typography> telephone : {user.phoneNumber} </Typography>
                          <Typography> Type : { user.isMoralPerson ? "Entreprise" : "Particulier" } </Typography>
                          <Typography> compte : { user.isPartner ? "Partenaire" : "Client" } </Typography>
                    </Grid>
              </Grid>
              <Paper>

              </Paper>
        </Box>
    )
}

export default Body;
