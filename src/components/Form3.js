import { Typography, TextField, Paper, Button, Container, Stack, FormControl, Select, MenuItem, InputLabel} from "@mui/material";
import { useState } from "react";
import { color } from "../theme";
import { useDispatch, useSelector } from "react-redux";
import { testValidation } from "../state/VehiculeSlice";
import * as api from "../api/index";

const FormCommand = () => {

    const [vehicule, setVehicule] = useState({Proprietaire:"", 
                                                    typeVehicule:"", 
                                                    nomVehicule:"", 
                                                    contact:"", 
                                                    Immatriculation:"",
                                                    email:"",
                                                    password:"",
                                                    isPartner:true})
    const color1 = color.blue.niveau100;
    const color3 = color.gray.niveau20;
    const dispatch = useDispatch();

    const validate = useSelector((state) => state.VehiculeReducer.isValidate);

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            const resp = api.loginUser(vehicule) ;
            console.log(resp)
            dispatch( setVehicule); 
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Paper elevation={20} sx={{borderRadius:"15px"}}>
               <Container sx={{paddingTop:"20px", paddingBottom:"30px"}}>
               <form autoComplete="off" 
                     noValidate 
                     onSubmit={handleSubmit} >

                     <Stack direction="column" spacing={2}> 
                         <Typography variant="h5" sx={{fontWeight:"bold", color:color1, paddingBottom:"20px"}}>
                                      Inscrivez votre camion
                         </Typography>
                         <TextField placeholder="Votre Nom"
                                    name="Proprietaire"
                                    value={vehicule.Proprietaire}
                                    onChange={(e) => {setVehicule({...vehicule, Proprietaire: e.target.value});
                                                      dispatch(testValidation(vehicule))}}
                                    />
                         <FormControl fullWidth>
                             <InputLabel id="demo-simple-select-label">Type de Camion</InputLabel>
                                   <Select
                                           labelId="demo-simple-select-label"
                                           id="demo-simple-select"
                                           label="type de vehicule"
                                           name="type de vehicule"
                                           value={vehicule.typeVehicule}
                                           onChange={(e) => {setVehicule({...vehicule, typeVehicule:e.target.value});
                                                             dispatch(testValidation(vehicule))}}
                                      >
                                           <MenuItem value="ENGIN de Chantier BTP"> ENGIN de Chantier BTP </MenuItem>
                                            <MenuItem value="Camion de Transport"> Camion de Transport </MenuItem>
                                   </Select>
                         </FormControl>
                        { vehicule.typeVehicule === "Camion de Transport" ?
                        <FormControl fullWidth>
                             <InputLabel id="demo-simple-select-label">Type de Camion</InputLabel>
                                   <Select
                                           labelId="demo-simple-select-label"
                                           id="demo-simple-select"
                                           label="nom du vehicule"
                                           name="Nom du vehicule"
                                           value={vehicule.nomVehicule}
                                           onChange={(e) => {setVehicule({...vehicule, nomVehicule:e.target.value});
                                                             dispatch(testValidation(vehicule))}}
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
                             <InputLabel id="demo-simple-select-label">Type de Camion</InputLabel>
                                   <Select
                                           labelId="demo-simple-select-label"
                                           id="demo-simple-select"
                                           label="nom du vehicule"
                                           name="Nom du vehicule"
                                           value={vehicule.nomVehicule}
                                           onChange={(e) => {setVehicule({...vehicule, nomVehicule:e.target.value});
                                                             dispatch(testValidation(vehicule))}}
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
                         <TextField placeholder="Immatriculation Vehicule"
                                    label="Immatriculation Vehicule"
                                    name="Immatriculation"
                                    value={vehicule.Immatriculation}
                                    onChange={(e) => {setVehicule({...vehicule,Immatriculation:e.target.value});
                                                      dispatch(testValidation(vehicule))}} />
                         <TextField placeholder="telephone"
                                    name="Immatriculation"
                                    value={vehicule.Immatriculation}
                                    onChange={(e) => {setVehicule({...vehicule,Immatriculation:e.target.value});
                                                      dispatch(testValidation(vehicule))}}/>
                         <TextField placeholder="adresse email"
                                    name="adresse email"
                                    value={vehicule.email}
                                    onChange={(e) => {setVehicule({...vehicule, email:e.target.value});
                                                      dispatch(testValidation(vehicule))}}/>
                          <TextField placeholder="telephone"
                                    name="password"
                                    type="password"
                                    value={vehicule.password}
                                    onChange={(e) => {setVehicule({...vehicule, password:e.target.value});
                                                      dispatch(testValidation(vehicule))}}/>
                     </Stack>
                     <Stack direction="column" spacing={2} sx={{paddingTop:"30px"}}> 
                     { validate ?
                            <Button type="submit"  sx={{backgroundColor:color1, marginTop:"20px", color:"white"}}>
                                 Enregistrer Vehicule 
                         </Button> :
                         <Button  disabled type="submit" sx={{backgroundColor:color3, marginTop:"20px"}}>
                                Enregistrer Vehicule 
                         </Button>}
                         <Typography variant="h8" sx={{fontW:"bold", color:color1}}>
                                 Déjà inscrit? Connectez-vous
                         </Typography>
                     </Stack>
                </form>
               </Container>
        </Paper>
    )
}

export default FormCommand;