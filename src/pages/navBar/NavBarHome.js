import { IconButton, Typography,  useMediaQuery, Stack, Button, AppBar, Toolbar } from "@mui/material";
import { color } from '../../theme';
import { useDispatch, useSelector } from "react-redux";
import { setIsMobileMenuToggled } from "../../state/UserSlice";
import { setMenu } from "../../state/menuSlice";
import { useNavigate } from "react-router-dom";
import FlexBetween from "../../components/FlexBetween";
import { NavBarData } from "../../components/data/data";




const NavBarHome = () => {
   
    //const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isSmallScreen = useMediaQuery("(min-width: 1000px)");
    const backgroundcolor = color.blue.niveau100;
    //const isMobileMenuToggledState = useSelector((state) => state.UserReducer.isMobileMenuToggled);
    const isMobileMenuToggledState = useSelector((state) => state.persistedReducer.isMobileMenuToggled);
   
    const menu = useSelector((state) => state.MenuReducer.menu);
    //console.log(isMobileMenuToggledState)


    return (
      <AppBar position="fixed">
            <Toolbar sx={{backgroundColor: backgroundcolor }} >
                   <FlexBetween sx={{width:"98%"}}>
                              <Stack direction="column" 
                                     justifyContent="space-around"
                                     onClick={() => { navigate('/')
                                                      dispatch(setMenu("Home"))}} 
                                     alignItems="center"
                               >
                                     <IconButton size="large" edge="start" color="inherit" >
                                                 <img src={NavBarData.logo} alt="logo" height="50rem" />
                                     </IconButton>
                                     <Typography component="div" 
                                                 sx={{ flexGrow: 1,
                                                       "&:hover": {
                                                                     color:"#1414ee",
                                                                     cursor: "pointer"
                                                                  } }}
                                                 fontSize = "clamp(10px, 12px, 14px)"
                                                 textAlign="center"
                                       >
                                                 {NavBarData.logoName}   
                                     </Typography>
                              </Stack>
                              {isSmallScreen ? 
                                  <Stack  direction="row"  justifyContent="space-around"  alignItems="center" >
            
                                      <Button color="inherit" onClick={() => {navigate("/Presentation");
                                                                              dispatch(setMenu("A Propos de Nous"))}}
                                              sx={{"&: hover": {cursor:"pointer", textDecoration:"underline"},
                                                    textDecoration: menu[0] ? "underline" : "none" }}> 
                                                        {NavBarData.largeBoxMenu.label01} 
                                                    
                                      </Button>
                              
                                      <Button color="inherit" onClick={() => {navigate("/Expediteurs");
                                                                              dispatch(setMenu("Expediteurs"))}} 
                                              sx={{"&: hover": {cursor:"pointer", textDecoration:"underline"},
                                                   textDecoration: menu[1] ? "underline" : "none" }}> 
                                                {NavBarData.largeBoxMenu.label02} 
                                      </Button>
                                      <Button color="inherit" onClick={() => {navigate("/Transporteurs");
                                                                               dispatch(setMenu("Transporteurs"))}} 
                                              sx={{"&: hover": {cursor:"pointer", textDecoration:"underline"},
                                                    textDecoration: menu[2] ? "underline" : "none" }}> 
                                                {NavBarData.largeBoxMenu.label03} 
                                      </Button>
                                      <Button color="inherit" onClick={() =>{ navigate("/BTP");
                                                                               dispatch(setMenu("BTP"))}} 
                                              sx={{"&: hover": {cursor:"pointer", textDecoration:"underline"},
                                                     textDecoration: menu[3] ? "underline" : "none" }}> 
                                               {NavBarData.largeBoxMenu.label04} 
                                      </Button>
                                      <Button color="inherit" onClick={() => {navigate("/Blog");
                                                                              dispatch(setMenu("Blog"))}} 
                                              sx={{"&: hover": {cursor:"pointer", textDecoration:"underline"},
                                                     textDecoration: menu[4] ? "underline" : "none" }}> 
                                               {NavBarData.largeBoxMenu.label05} 
                                      </Button>
                                      <IconButton onClick={() => {navigate("/Contact")}}
                                                  size="large"
                                                  edge="start"
                                                  color="inherit"
                                                  aria-label="menu"
                                                  sx={{"&: hover": {cursor:"pointer", textDecoration:"underline"}, mr: 2  }}
                                      >
                                                 {NavBarData.largeBoxMenu.label06Icon}
                                      </IconButton>
                                      <IconButton onClick={() => navigate("/connexion")}
                                                  size="large"
                                                  edge="start"
                                                  color="inherit"
                                                  aria-label="menu"
                                                  sx={{"&: hover": {cursor:"pointer", textDecoration:"underline"},  mr: 2 }}
                                      >
                                                  {NavBarData.largeBoxMenu.label07Icon}
                                      </IconButton>
                                      <Button variant="contained"
                                              onClick={() => {navigate("/Expediteurs");
                                                              dispatch(setMenu("A Propos de Nous"))}}
                                              sx={{backgroundColor:"white", color:backgroundcolor}}> 
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