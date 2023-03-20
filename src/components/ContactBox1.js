import {  Button, Stack, Box, Container, useMediaQuery,  Dialog, DialogActions, 
           DialogContent, DialogContentText, DialogTitle, } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import { color } from "../theme";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import FormCommand from "./FormCommand02";

export default function ContactBox1() {

    //const color1 = color.gray.niveau100;
    const color2 = color.blue.niveau100;
    const navigate = useNavigate();
    const isNonMobile = useMediaQuery("(min-width:600px)")
    
    // ouverture lien whatsapp sur une nouvelle page
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
        <Box sx={{width: isNonMobile ? "300px" : "270px", 
                  height:isNonMobile ? "300px" : "270px", 
                  backgroundColor:"white", borderRadius:"10px"}}>
             <Container sx={{paddingTop:isNonMobile ? "50px" : "25px"}}>
                       <Stack direction="column" spacing={4} >
                             <Button variant="outlined" startIcon={<CallIcon />} 
                                     sx={{color:color2, fontSize:isNonMobile ? "20px" : "16px", borderColor:color2}}>
                                     +(237) 620 79 46 61
                             </Button>
                             <Button variant="outlined" startIcon={<WhatsAppIcon />}
                                      onClick={() => openInNewTab('https://wa.me/message/JFJ4OHKASUDFA1')}
                                     sx={{color:color2, fontSize:isNonMobile ? "20px" : "16px", borderColor:color2}}>
                                     +(237) 651 21 87 97
                             </Button>
                             <Button variant="contained"
                                     onClick={handleClickOpen}
                                     sx={{color:"white", fontSize:isNonMobile ? "20px" : "14px", backgroundColor:color2}}>
                                    OBTENIR UN DEVIS
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
                                                                   <Button onClick={handleClose}>Fermer</Button>
                                                    </DialogActions>
                                </Dialog>
                    </Stack>
              </Container>
        </Box>
    )
}