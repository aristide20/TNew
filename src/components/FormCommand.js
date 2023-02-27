import { Typography, TextField, 
        Paper, Button, Container, Stack, 
        FormControl, Select, MenuItem, InputLabel} from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { color } from "../theme";
import { setCommand, testValidation,  createCommand } from "../state/CommandSlice";
import { useNavigate } from "react-router-dom";

const FormCommand = () => {

    const [infoCommand, setInfoCommand] = useState({commanditaire: "",
    contact: "",
    villeDepart: "",
    jourDepart: "",
    villeArrivee:"",
    typeVehicule:"Camion de Transport",
    nomVehicule:""});
    //const user = useSelector((state) => state.UserReducer.user);
    const user = useSelector((state) => state.persistedReducer.user);
    const dispatch = useDispatch();
    const color1 = color.blue.niveau100;
    const color3 = color.gray.niveau20;
    const nom = user ? user.fullName : "Non Account";
    let commanditaire = "";

        if(!nom) { commanditaire = "Non Account"}
        else { commanditaire = nom}


    const validate = useSelector((state) => state.CommandReducer.isEnAttente) 
    //console.log(validate)

     const navigate = useNavigate();


   const handleSubmit =  (e) => {
          e.preventDefault();
         dispatch( createCommand(infoCommand))
         dispatch( setCommand(infoCommand))
   }



    return (
        <Paper elevation={20} sx={{paddingTop:"20px", borderRadius:"15px", paddingBottom:"20px"}}>
               <Container>
               <form autoComplete="off" 
                     noValidate 
                     onSubmit={handleSubmit} >

                     <Stack direction="column" spacing={2}> 
                         <Typography variant="h5" sx={{fontWeight:"bold", color:color1, paddingBottom:"20px"}}>
                                 Commander votre Transport
                         </Typography>
                         <TextField placeholder="ville de depart"
                                    name="villeDepart"
                                    value={infoCommand.villeDepart}
                                    onChange={(e) => {setInfoCommand({...infoCommand, villeDepart:e.target.value,
                                                                                      commanditaire:commanditaire});
                                                     dispatch(testValidation(infoCommand))}} />
                         <TextField placeholder="ville de d'arrivee"
                                    name="villeArrivee"
                                    value={infoCommand.villeArrivee}
                                    onChange={(e) => {setInfoCommand({...infoCommand, villeArrivee:e.target.value});
                                                       dispatch(testValidation(infoCommand))}}/>
                         <FormControl fullWidth>
                             <InputLabel id="demo-simple-select-label">Type de Camion</InputLabel>
                                   <Select
                                           labelId="demo-simple-select-label"
                                           id="demo-simple-select"
                                           value={infoCommand.typeVehicule}
                                           label="Type de Vehicule"
                                           onChange={(e) => {setInfoCommand({...infoCommand, typeVehicule:e.target.value})}}
                                      >
                                           <MenuItem value="ENGIN de Chantier BTP"> ENGIN de Chantier BTP </MenuItem>
                                            <MenuItem value="Camion de Transport"> Camion de Transport </MenuItem>
                                   </Select>
                         </FormControl>
                        { infoCommand.typeVehicule === "Camion de Transport" ?
                        <FormControl fullWidth>
                             <InputLabel id="demo-simple-select-label">Type de Camion</InputLabel>
                                   <Select
                                           labelId="demo-simple-select-label"
                                           id="demo-simple-select"
                                           value={infoCommand.nomVehicule}
                                           label="Nom du Vehicule"
                                           onChange={(e) => {setInfoCommand({...infoCommand, nomVehicule:e.target.value});
                                                             dispatch(testValidation(infoCommand))}}
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
                                           value={infoCommand.nomVehicule}
                                           label="Nom du Vehicule"
                                           onChange={(e) => {setInfoCommand({...infoCommand, nomVehicule:e.target.value});
                                                             dispatch(testValidation(infoCommand))}}
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
                         <TextField placeholder="telephone"
                                    name="contact"
                                    value={infoCommand.contact}
                                    onChange={(e) => {setInfoCommand({...infoCommand, contact:e.target.value});
                                                      dispatch(testValidation(infoCommand))}}/>
                     </Stack>
                     <Stack direction="column" spacing={2} sx={{paddingTop:"30px"}}> 
                         { validate ?
                            <Button type="submit"  sx={{backgroundColor:color1, marginTop:"20px", color:"white"}}>
                                Demarer le devis 
                         </Button> :
                         <Button  disabled type="submit" sx={{backgroundColor:color3, marginTop:"20px"}}>
                                Demarer le devis 
                         </Button>}
                         <Typography variant="h8" sx={{fontW:"bold", color:color1}}
                                      onClick={() => navigate('/connexion')}>
                                 Déjà inscrit? Connectez-vous
                         </Typography>
                     </Stack>
                   </form>  
               </Container>
        </Paper>
    )
}

export default FormCommand;