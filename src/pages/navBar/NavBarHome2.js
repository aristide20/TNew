//import { useState } from "react";
import { IconButton, Typography, useMediaQuery, Stack, Button, AppBar, Toolbar } from "@mui/material";
import { color } from '../../theme';
import { useDispatch, useSelector } from "react-redux";
import { setIsMobileMenuToggled } from "../../state/UserSlice";
import { useNavigate } from "react-router-dom";
import FlexBetween from "../../components/FlexBetween";
import { NavBarData } from "../../components/data/data";



const NavBarHome = () => {
   
    //const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isSmallScreen = useMediaQuery("(min-width: 1000px)");
    const backgroundcolor = color.blue.niveau100;
    const isMobileMenuToggledState = useSelector((state) => state.isMobileMenuToggled);


    return (
      <AppBar position="absolute" sx={{opacity:0.5, zindex:10, top:0}}>
            <Toolbar sx={{backgroundColor: backgroundcolor }} >
                   <FlexBetween sx={{width:"98%", margin:"20px, 100px, 10px, 0"}}>
                              <Stack direction="column" 
                                     justifyContent="space-around"
                                     onClick={() => navigate('/')} 
                                     alignItems="center"
                               >
                                     <IconButton size="large" edge="start" color="inherit" sx={{opacity:1}}>
                                                 <img src={NavBarData.logo} alt="logo" height="50rem" opacity={1} />
                                     </IconButton>
                                     <Typography component="div" 
                                                 sx={{ flexGrow: 1,
                                                       "&:hover": {
                                                                     color:"#1414ee",
                                                                     cursor: "pointer",
                                                                     opacity:1
                                                                  } }}
                                                 fontSize = "clamp(10px, 12px, 14px)"
                                                 textAlign="center"
                                       >
                                                 {NavBarData.logoName}   
                                     </Typography>
                              </Stack>
                              {isSmallScreen ? 
                                  <Stack  direction="row"  justifyContent="space-around"  alignItems="center" >
                                    
                                      <Button color="inherit" onClick={() => navigate("/Presentation")} sx={{ opacity:1 }} > 
                                              {NavBarData.largeBoxMenu.label01} 
                                      </Button>
                                      <Button color="inherit" onClick={() => navigate("/Expediteurs")} sx={{ opacity:1 }}> 
                                                {NavBarData.largeBoxMenu.label02} 
                                      </Button>
                                      <Button color="inherit" onClick={() => navigate("/Transporteurs")} sx={{ opacity:1 }}> 
                                                {NavBarData.largeBoxMenu.label03} 
                                      </Button>
                                      <Button color="inherit" onClick={() => navigate("/BTP")} sx={{ opacity:1 }}> 
                                               {NavBarData.largeBoxMenu.label04} 
                                      </Button>
                                      <Button color="inherit" onClick={() => navigate("/Blog")} sx={{ opacity:1 }}> 
                                               {NavBarData.largeBoxMenu.label05} 
                                      </Button>
                                      <IconButton onClick={() => navigate("/Contact")}
                                                  size="large"
                                                  edge="start"
                                                  color="inherit"
                                                  aria-label="menu"
                                                  sx={{ mr: 2 , opacity:1}}
                                      >
                                                 {NavBarData.largeBoxMenu.label06Icon}
                                      </IconButton>
                                      <IconButton onClick={() => navigate("/connexion")}
                                                  size="large"
                                                  edge="start"
                                                  color="inherit"
                                                  aria-label="menu"
                                                  sx={{ mr: 2, opacity:1 }}
                                      >
                                                  {NavBarData.largeBoxMenu.label07Icon}
                                      </IconButton>
                                      <Button variant="contained"
                                              onClick={() => navigate("/Expediteurs")}
                                              sx={{backgroundColor:"white", color:backgroundcolor, opacity:1}}> 
                                              Commander
                                      </Button>
                                  </Stack> 
                                  :  
                                        <Stack  direction="row"  justifyContent="space-around"  alignItems="center" >
                                              <Typography component="div" 
                                                    sx={{ flexGrow: 1,
                                                    "&:hover": {
                                                     color:"#1414ee",
                                                     cursor: "pointer"
                                                                       } }}
                                                       fontSize = "clamp(18px, 20px, 22px)"
                                                       textAlign="center"
                                                      marginRight="10px"
                                                        >
                                                          Menu   
                                             </Typography>
                                             <IconButton
                                                  size="large"
                                                  edge="start"
                                                  color="inherit"
                                                  aria-label="menu"
                                                  sx={{ mr: 2,
                                                        "&:hover": {
                                                         color:"#1414ee",
                                                         cursor: "pointer"
                                                         } }}
                                                  onClick={() => dispatch(setIsMobileMenuToggled())}
                                                 >
                                                  { isMobileMenuToggledState ? NavBarData.smallBoxMenu.close : NavBarData.smallBoxMenu.Icon}
                                             </IconButton>
                                      </Stack>
                                  }
                </FlexBetween>
          </Toolbar>
    </AppBar>
    )
}

export default NavBarHome;