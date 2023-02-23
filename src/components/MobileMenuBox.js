import { NavBarData } from "./data/data";
import { Button, Box, Stack, Divider } from "@mui/material";
import { useDispatch } from "react-redux";
import { setIsMobileMenuToggled } from "../state/UserSlice";
import { color } from "../theme";
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';


const MobileMenuBox = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const background = color.gray.niveau100;
    const background2 = color.blue.niveau100;

    return (
     <motion.div initial={{opacity: 0, width:0}}
                 animate={{opacity: 1, width:"100%"}}
                 exit={{opacity: 0, x: window.innerWidth, transition:{ duration: 0.3}}}>
        <Box sx={{ position:"fixed", 
                   top:"6rem", 
                   right:"0px",  
                   width:"250px",
                   backgroundColor: background,
                   color: "white",
                   borderStyle: "solid",
                   borderColor: background,
                   fontSize: "14px",
                   zIndex:20}} >
             <Stack direction="column"
                    divider={<Divider orientation="horizontal" color="white" flexItem />}
                    spacing={2}>
                    <Box onClick={() => {navigate('/Presentation');  dispatch(setIsMobileMenuToggled())}} 
                         sx={{ opacity:"1", "&:hover":{cursor:"pointer"} }} > 
                         {NavBarData.smallBoxMenu.label01} 
                    </Box>
                    <Box onClick={() => {navigate('/Expediteurs');  dispatch(setIsMobileMenuToggled())}} 
                         sx={{ opacity:"1", "&:hover":{cursor:"pointer"} }} > 
                         {NavBarData.smallBoxMenu.label02} 
                    </Box>
                    <Box onClick={() => {navigate('/Transporteurs');  dispatch(setIsMobileMenuToggled())}} 
                          sx={{ opacity:"1", "&:hover":{cursor:"pointer"} }}> 
                         {NavBarData.smallBoxMenu.label03} 
                    </Box>
                    <Box onClick={() => {navigate('/BTP');  dispatch(setIsMobileMenuToggled())}} 
                         sx={{ opacity:"1", "&:hover":{cursor:"pointer"} }}> 
                         {NavBarData.smallBoxMenu.label04} 
                    </Box>
                    <Box onClick={() => {navigate('/Blog');  dispatch(setIsMobileMenuToggled())}} 
                         sx={{ opacity:"1", "&:hover":{cursor:"pointer"} }}> 
                         {NavBarData.smallBoxMenu.label05} 
                    </Box>
                    <Box onClick={() => {navigate('/Contact');  dispatch(setIsMobileMenuToggled())}} 
                         sx={{ opacity:"1", display:"flex", justifyContent:"flex-start", 
                               alignItem:"center", "&: hover":{cursor:"pointer"} }}    
                                     > 
                         {NavBarData.smallBoxMenu.label06Icon} {NavBarData.smallBoxMenu.label06} 
                    </Box>
                    <Box onClick={() => {navigate('/connexion');  dispatch(setIsMobileMenuToggled())}} 
                         sx={{ opacity:"1", display:"flex", justifyContent:"flex-start", 
                               alignItem:"center", "&: hover":{cursor:"pointer"} }}> 
                         {NavBarData.smallBoxMenu.label07Icon} {NavBarData.smallBoxMenu.label07} 
                    </Box>
                    <Box></Box>
             </Stack> 
             <Box sx={{opacity:"1", display:"flex", justifyContent:"center", alignItem:"center"}} > 
                         <Button variant="contained"  
                                 onClick={() =>{ navigate('/Expediteurs');  dispatch(setIsMobileMenuToggled())}}
                                 sx={{backgroundColor: background2}}> 
                                {NavBarData.smallBoxMenu.label08} 
                         </Button> 
                    </Box> 
        </Box>
</motion.div>    
    )
}

export default MobileMenuBox;


// opacity:"0.5",