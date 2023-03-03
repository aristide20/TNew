import { Button, Typography, Box, Container, useMediaQuery, Grid,  Dialog, DialogActions, 
         DialogContent, DialogContentText, DialogTitle, } from '@mui/material';
import { color } from "../theme";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import { useState } from "react";
import FormCommand from "./FormCommand02";

const CommandEnginsBox = () => {

    const color1 = color.gray.niveau20;     // fond gris
    const color2 = color.white.niveau100;  // black pour le text
    const color3 = color.blue.niveau100;
    const color4 = color.white.niveau0;   // blanc
    const isNonMobile = useMediaQuery("(min-width:800px)");
    //const isNonMobile2 = useMediaQuery("(min-width:500px)");
     
    // ouverture whatsapp sur une nouvelle page
    function openInNewTab(url) {
      window.open(url, '_blank').focus();
    }

    // ouverture boite de dialogue pour commande
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };


    return (
        <Box sx={{paddingBottom:'100px', width:"100%", backgroundColor: color1}}>
              <Container sx={{ display:"flex", 
                              flexDirection:"column", 
                              justifyContent:"center", 
                              alignItems:"center"}}>
                        <Typography variant="h5" sx={{color:color2, fontWeight:"bold", paddingBottom:"20px"}}>
                                   Commander les engins dont vous avez besoin
                        </Typography>
                        <Box sx={{ width: isNonMobile ? "70%" : "80%", 
                                   backgroundColor:color4, 
                                   borderRadius:"10px",
                                   padding:"20px", 
                                   display:"flex", 
                                   flexDirection:"column",
                                   justifyContent:"center",
                                   alignItems:"center" }} >
                             <Grid container spacing={3}  display="flex" justifyContent="center"
                                   alignItems="center">
                                   <Grid item xs={isNonMobile ? 4 : 12}>
                                         <Button variant="outlined" size="large" startIcon={<PhoneIphoneIcon />}
                                                  sx={{borderColor:color3, color:color2}}>
                                                 (+237) 620 794 661
                                         </Button>
                                   </Grid>
                                   <Grid item xs={isNonMobile ? 4 : 12}>
                                         <Button variant="contained" size="large" 
                                                  onClick={handleClickOpen}
                                                 sx={{backgroundColor:color3}}>
                                                 Demander un devis
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
                                   </Grid>
                                   <Grid item xs={isNonMobile ? 4 : 12}>
                                         <Button variant="outlined" size="large" startIcon={<WhatsAppIcon />} 
                                                  onClick={() => openInNewTab('https://wa.me/message/JFJ4OHKASUDFA1')}
                                                 sx={{borderColor:color3, color:color2}}>
                                                 (+237) 651 218 797
                                         </Button>
                                   </Grid>
                             </Grid>
                        </Box>
             </Container>
        </Box>
    )
}

export default CommandEnginsBox;