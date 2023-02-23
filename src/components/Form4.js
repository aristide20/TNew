import { Typography, Paper, Button, Container} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const FormCommand = () => {

    const navigate = useNavigate();

    return (
        <Paper elevation={20} sx={{borderRadius:"15px"}}>
               <Container sx={{ paddingTop:"20px", paddingBottom:"30px", dispay:"flex", 
                                justifyContent:"center", alignItems:"center"}}>
                           <Typography variant="h4" sx={{textAlign:"center"}}>
                                    Devenir Partenaire & <br />
                                    Enregistrer Votre Vehicule
                           </Typography>
                          <Button variant="contained" size="large" onClick={() => navigate('/connexion')}
                                  endIcon={<ArrowForwardIcon />}>
                                 Page d'enregistrement
                          </Button>
               </Container>
        </Paper>
    )
}

export default FormCommand;