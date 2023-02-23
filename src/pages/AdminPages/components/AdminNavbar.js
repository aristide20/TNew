import { useState } from "react";
import { Box, IconButton, Grid,
         Typography, Select, 
         MenuItem, useMediaQuery, 
         useTheme, Stack, Button, 
         AppBar, Toolbar } from "@mui/material";
import { color, textFont} from '../../../theme';
import { useDispatch, useSelector } from "react-redux";
import { setLogin, makeCommand, setIsMobileMenuToggled } from "../../../state/UserSlice";
import { useNavigate } from "react-router-dom";
//import FlexBetween from "../../components/FlexBetween";
import { AdminNavBarData } from "../../../components/data/data";



const AdminNavBar = () => {
   
    //const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isSmallScreen = useMediaQuery("(min-width: 1000px)");
    const color1 = color.blue.niveau100;
    const color0 = color.white.niveau0;
    const isMobileMenuToggledState = useSelector((state) => state.isMobileMenuToggled);


    return (
      <AppBar position="static" >
            <Toolbar sx={{backgroundColor:color0, display:"flex", 
                               flexDirection:"row",  
                               justifyContent:"flex-end",  
                               alignItems:"center"}} >
                    <Box sx={{ display:"flex", 
                               flexDirection:"row",
                               gap:"10px",  
                               justifyContent:"flex-end",  
                               alignItems:"center"}} > 
                        <Button variant="text" 
                                onClick={() => navigate("/Commandes")}
                                sx={{"&: hover": {cursor:"pointer", textDecoration:"underline"}, color:color1, fontWeight:"bold" }} > 
                                {AdminNavBarData.label01} 
                        </Button>
                        <Button variant="text" onClick={() => navigate("/Commandes")}
                                sx={{"&: hover": {cursor:"pointer", textDecoration:"underline"}, color:color1, fontWeight:"bold" }} > 
                                {AdminNavBarData.label02} 
                        </Button>
                        <Button variant="text" onClick={() => navigate("/Commandes")} 
                                sx={{"&: hover": {cursor:"pointer", textDecoration:"underline"}, color:color1, fontWeight:"bold" }}> 
                                {AdminNavBarData.label03} 
                        </Button>
                        <Button variant="text" onClick={() => navigate("/LoginPage")}
                                sx={{"&: hover": {cursor:"pointer", textDecoration:"underline"}, color:color1, fontWeight:"bold" }}
                                endIcon={AdminNavBarData.Icon1} > 
                                {AdminNavBarData.label04} 
                        </Button>  
                    </Box>        
          </Toolbar>
    </AppBar>
    )
}

export default AdminNavBar;