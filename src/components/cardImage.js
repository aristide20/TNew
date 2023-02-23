import { IconButton, Box, useMediaQuery, Paper, ImageListItem, ImageListItemBar } from '@mui/material';
import { color } from "../theme";
import InfoIcon from '@mui/icons-material/Info';


const CardImage = (props) => {

const color1 = color.gray.niveau20;     // fond gris
const isNonMobile = useMediaQuery("(min-width:800px)");



return (
   <Box sx={{width:"100%", backgroundColor: color1}}>
        <Paper elevation={10} sx={{width:"80%", height:"80%"}}>
               <ImageListItem>
                              <img src= {props.card.image}
                                   srcSet={props.card.image}
                                    alt="deumper"
                                    loading="lazy" />
                                    <ImageListItemBar title={props.card.nom}
                                                      subtitle={props.card.usage}
                                                      actionIcon={ <IconButton sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                                                               aria-label={`info about ${props.card.nom}`}>
                                                                               <InfoIcon />
                                                                   </IconButton>
                                                               }/>
             </ImageListItem>
        </Paper>              
   </Box>
)
}

export default CardImage;


