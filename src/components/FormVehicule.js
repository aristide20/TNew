import { Typography, TextField, Alert,
    Paper, Button, Container, Stack, Box,
    FormControl, Select, MenuItem, InputLabel} from "@mui/material";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { color } from "../theme";
import { setVehicule, testValidation,  createVehicule } from "../state/VehiculeSlice";
import { useNavigate, useSelector } from "react-router-dom";
import {  AddVehicule } from "../state/UserSlice";
import CircularProgress from '@mui/material/CircularProgress';
import * as api from "../api/index";


const initialValues = { Immatriculation:"", 
                        TypeVehicule:"",
                        NomVehicule:"",
                        Proprietaire: "",
                        isReadytowork: true,
                        courses:[] }



const FormVehicule = () => {


const [infoVehicule, setInfoVehicule] = useState(initialValues);
const [clicked, setClicked] = useState(false);
//const user = useSelector((state) => state.UserReducer.user);
const user = useSelector((state) => state.persistedReducer.user);
const dispatch = useDispatch();
const color1 = color.blue.niveau100;
const color3 = color.gray.niveau20;

const [error, setError] = useState(0);
const validate = useSelector((state) => state.VehiculeReducer.isValidate);
const navigate = useNavigate();


 // Message of success or error
 useEffect(function(){
  if(error === -1 || error === -2){
      let cleanup = setTimeout(()=>{ setError(0); }, 7000);
      console.log("remove dialog")
      return () => {
           clearInterval(cleanup)
       }
    } 
    if(error === 1){
      let cleanup = setTimeout(()=>{ setError(0); setClicked(false);
                                     setInfoVehicule(initialValues);
                                     navigate('/user/vehicules')}, 7000);
      console.log("remove dialog")
      return () => {
           clearInterval(cleanup)
       }
    }
    
});

// fin validation


const handleSubmit = (e) => {
      e.preventDefault();
       
        setClicked(true);
        try {
            api.createVehicule(infoVehicule).then((resp) => {
                setClicked(false);
                  console.log(resp)
                  if(resp.status === 201) {
                      setError(1);
                      dispatch( setVehicule(infoVehicule));
                      dispatch(  AddVehicule(infoVehicule));   
                  }
                  }).catch((err) => {
                            setClicked(false);
                            console.log(err.name)
                            setError(-1);
              }) 
        } catch (error) {
            setError(-2);
            console.log(error);
            console.log(error.message);
            console.log(error.name);
        }
             
}



return (
    <Paper elevation={20} sx={{paddingTop:"20px", borderRadius:"15px", paddingBottom:"20px"}}>
           <Container>
           <form autoComplete="off" 
                 noValidate 
                 onSubmit={handleSubmit} >

                 <Stack direction="column" spacing={2} justifyContent="center" alignItems="center"> 
                     <Typography variant="h5" sx={{fontWeight:"bold", color:color1, paddingBottom:"20px"}}>
                             Ajouter un Vehicule
                     </Typography>
                     <TextField placeholder="Immatriculation"
                                type="text" 
                                fullWidth={true}
                                onChange={(e) => {setInfoVehicule({...infoVehicule, Immatriculation:e.target.value,
                                                                                    Proprietaire: user.fullName});
                                                  dispatch(testValidation(infoVehicule));}}
                                value={infoVehicule.Immatriculation}
                                name="Immatriculation" />
                     <FormControl fullWidth>
                         <InputLabel id="demo-simple-select-label">Type de Camion</InputLabel>
                               <Select
                                       labelId="demo-simple-select-label"
                                       id="demo-simple-select"
                                       value={infoVehicule.TypeVehicule}
                                       label="Type de Vehicule"
                                       onChange={(e) => {setInfoVehicule({...infoVehicule, TypeVehicule:e.target.value});
                                                         dispatch(testValidation(infoVehicule));}}
                                  >
                                       <MenuItem value="ENGIN de Chantier BTP"> ENGIN de Chantier BTP </MenuItem>
                                        <MenuItem value="Camion de Transport"> Camion de Transport </MenuItem>
                               </Select>
                     </FormControl>
                    { infoVehicule.TypeVehicule === "Camion de Transport" ?
                    <FormControl fullWidth>
                         <InputLabel id="demo-simple-select-label">Type de Camion</InputLabel>
                               <Select
                                       labelId="demo-simple-select-label"
                                       id="demo-simple-select"
                                       value={infoVehicule.NomVehicule}
                                       label="Nom du Vehicule"
                                       onChange={(e) => {setInfoVehicule({...infoVehicule, NomVehicule:e.target.value});
                                                         dispatch(testValidation(infoVehicule))}}
                                  >
                                        <MenuItem value="Camion ampliroll"> Camion ampliroll  </MenuItem>
                                        <MenuItem value="Camion benne 30t"> Camion benne 30t </MenuItem>
                                        <MenuItem value="Camion calabrese"> Camion calabrese </MenuItem>
                                        <MenuItem value="Camion Benne basculante"> Camion Benne basculante </MenuItem>
                                        <MenuItem value="Camion citerne"> Camion citerne  </MenuItem>
                                        <MenuItem value="Plateau ou camion savoyarde"> Plateau ou camion savoyarde </MenuItem>
                                        <MenuItem value="Camion porte char"> Camion porte char </MenuItem>
                                        <MenuItem value="Remorque conteneur"> Remorque conteneur  </MenuItem>
                                        <MenuItem value="Remorque bois ou camion grumier"> Remorque bois ou camion grumier   </MenuItem>
                                        <MenuItem value="Camion toupie  ou bétonnière"> Camion toupie  ou bétonnière </MenuItem>
                                        <MenuItem value="Autre"> Autre </MenuItem>
                               </Select>
                     </FormControl> 
                     :
                     <FormControl fullWidth>
                         <InputLabel id="demo-simple-select-label">Nom du Camion</InputLabel>
                               <Select
                                       labelId="demo-simple-select-label"
                                       id="demo-simple-select"
                                       value={infoVehicule.NomVehicule}
                                       label="Nom du Vehicule"
                                       onChange={(e) => {setInfoVehicule({...infoVehicule, NomVehicule:e.target.value});
                                                         dispatch(testValidation(infoVehicule))}}
                                  >
                                        <MenuItem value="Bulldozer"> Bulldozer  </MenuItem>
                                        <MenuItem value="Compacteur lisse "> Compacteur lisse  </MenuItem>
                                        <MenuItem value="Elévatrice mobile"> Elévatrice mobile </MenuItem>
                                        <MenuItem value="Camion Grue "> Camion Grue  </MenuItem>
                                        <MenuItem value="Camion niveleuse "> Camion niveleuse   </MenuItem>
                                        <MenuItem value="Camion pelle chargeuse "> Camion pelle chargeuse  </MenuItem>
                                        <MenuItem value="Pelle excavatrice ou pelleteuse"> Pelle excavatrice ou pelleteuse  </MenuItem>
                                        <MenuItem value="Camion scraper ou décapeuse "> Camion scraper ou décapeuse   </MenuItem>
                                        <MenuItem value="Tractopelle "> Tractopelle    </MenuItem>
                                        <MenuItem value="Autre"> Autre </MenuItem>
                               </Select>
                     </FormControl> 
                     }
                     { infoVehicule.NomVehicule === "Autre" && 
                       <Stack direction="row" spacing={2} justifyContent="center" alignItems="center"sx={{width:"100%"}} >
                              <Typography sx={{fontSize:"14px", color:"black", width:"25%"}}>
                                         Preciser Nom du Vehicule
                              </Typography>
                              <TextField placeholder="Nom du Vehicule"
                                         type="text" 
                                         width="70%"
                                         onChange={(e) => {setInfoVehicule({...infoVehicule, NomVehicule:e.target.value,
                                                                           Proprietaire: user.fullName});
                                                           dispatch(testValidation(infoVehicule));}}
                                         value={infoVehicule.NomVehicule}
                                         name="Nom du Vehicule" />
                        </Stack> }
                 </Stack>
                 <Stack direction="column" spacing={2} sx={{paddingTop:"40px"}} justifyContent="center"
                        alignItems="center"> 
                     { validate ?
                        <Button type="submit"  sx={{backgroundColor:color1, marginTop:"20px", color:"white"}}>
                               Ajouter le Vehicule 
                     </Button> :
                     <Button  disabled type="submit" sx={{backgroundColor:color3, marginTop:"20px"}}>
                               Ajouter le Vehicule
                     </Button>}
                     { error === 1 && <Alert severity="success"> Vehicule enregistré </Alert> }
                     { error === -1 && <Alert severity="error"> Vehicule avec cette Immatriculation existe deja!! </Alert> }
                     { error === -2 && <Alert severity="error"> Network error </Alert> }
                     { clicked &&   <Box sx={{ display: 'flex', flexDirection:"column", 
                                               justifyContent:"center", alignItems:"center" }}>
                                         <CircularProgress />
                                     </Box>}
                 </Stack>
               </form>  
           </Container>
    </Paper>
)
}

export default FormVehicule;