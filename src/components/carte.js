import Card from '@mui/material/Card';
//import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
//import CardContent from '@mui/material/CardContent';
import {  Button } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import phone from "../assets/toph01.png";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { color } from "../theme";
import { useNavigate } from 'react-router-dom';

export default function MediaCard() {

  const background = color.gray.niveau100;
  const background2 = color.blue.niveau100;
  const navigate = useNavigate();

    return (
      <Card sx={{ maxWidth: 230, 
                  borderTopRightRadius: "30px", 
                  borderTopLeftRadius:"30px" }}>
        <CardMedia
          component="img"
          height="420"
          image={phone}
          alt="City"

        />
        <CardActions sx={{display:"flex", 
                          justifyContent:"center", 
                          alignItems:"center", 
                          padding:"10px",
                          backgroundColor:background}}>
                    <Button size="small" 
                            variant="contained"
                            onClick={() => { navigate('/Expediteurs') }} 
                            startIcon={<LocalShippingIcon />}
                            sx={{backgroundColor:background2}}>
                            Demander un devis  
                    </Button>
        </CardActions>
      </Card>
    );
  }