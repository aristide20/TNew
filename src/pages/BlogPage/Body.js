import MobileMenuBox from "../../components/MobileMenuBox";
import CssBaseline from '@mui/material/CssBaseline';
import { color} from '../../theme';
import { Typography, Box, Container, useMediaQuery } from '@mui/material';
import {  useSelector } from "react-redux";



const Body = () => {

    const color1 = color.gray.niveau40;
    const isSmallScreen = useMediaQuery("(min-width: 1000px)");
    const isMobileMenuToggledState = useSelector((state) => state.UserReducer.isMobileMenuToggled);
    const color2 = color.blue.niveau100;
        
        return(
          <Box position="relative" sx={{ width:"100%"}} >
                   <CssBaseline />
                   <Box sx={{minHeight:"600px", backgroundColor:color1, 
                             display:"flex", justifyContent:"center", alignItems:"center"}}>
                            <Container>
                                   <Typography variant={isSmallScreen ? "h1" : "h3"} sx={{color:color2, fontWeight:"bold"}}>
                                               VOTRE BLOG BIENTOT DISPONIBLE!!!
                                   </Typography>
                        </Container>
                   </Box>
                   {!isSmallScreen && isMobileMenuToggledState && <MobileMenuBox />}
          </Box>
        )
    }
    
    export default Body;
