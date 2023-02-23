import { IconButton, Box, Paper, ImageListItem, ImageListItemBar } from '@mui/material';
import { color } from "../theme";
import InfoIcon from '@mui/icons-material/Info';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const CardImage = (props) => {

const color1 = color.gray.niveau20;     // fond gris
//const isNonMobile = useMediaQuery("(min-width:800px)");



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
                                    <Accordion>
                                    <AccordionSummary   
                                          expandIcon={<ExpandMoreIcon />}
                                          aria-controls="panel1a-content"
                                         id="panel1a-header"
        >
                                          <Typography>{props.card.nom}</Typography>
                                               </AccordionSummary>
                                                      <AccordionDetails>
                                                              <Typography>
                                                                   {props.card.usage}
                                                              </Typography>
                                             </AccordionDetails>
                                    </Accordion>
             </ImageListItem>
        </Paper>              
   </Box>
)
}

export default CardImage;


