import { Typography, Paper, Button, Container, useMediaQuery} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const FormCommand = () => {

    const navigate = useNavigate();
    const isNomMobile = useMediaQuery('(min-width:800px)')

    return (
        <Paper elevation={20} sx={{borderRadius:"15px", paddingTop:"10px", paddingBottom:"30px", display:"flex", 
                                    justifyContent:"center", alignItems:"center", flexDirection:"column", 
                                    width:isNomMobile ? "70%" : "75%"}}>
               <Container sx={{ display:"flex", flexDirection:"column",
                                    justifyContent:"center", alignItems:"center" }}>
                           <Typography variant={isNomMobile ? "h4" : "h5"} sx={{textAlign:"center", marginBottom:"20px"}}>
                                    Devenir Partenaire & <br />
                                    Enregistrer Votre Vehicule
                           </Typography>
                          <Button variant="contained" size={isNomMobile ? "large" : "medium"} 
                                  onClick={() => navigate('/connexion')}
                                  endIcon={<ArrowForwardIcon />}>
                                 Page d'enregistrement
                          </Button>
               </Container>
        </Paper>
    )
}

export default FormCommand;