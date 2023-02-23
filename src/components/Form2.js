import { Button, Typography, Paper, TextField, useMediaQuery, Box, Grid,
            Select, MenuItem, InputLabel,
         Alert} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setLogin, loginSuccess, loginError, testLogin,  testRegister, loginStatut } from "../state/UserSlice";
//import { setLogin, setLogout} from "../state/UserSlice";
import { color } from "../theme";
import { useState } from "react";
import { Container } from "@mui/system";
//import PropTypes from 'prop-types';
//import { styled } from '@mui/material/styles';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
//import * as yup from 'yup';
import { useNavigate } from "react-router-dom";
//import CheckIcon from '@mui/icons-material/Check';
//import EditOutlinedIcon  from "@mui/icons-material/EditOutlined"
//import Dropzone from "dropzone";
import * as api from "../api/index";

/*
const registerSchema = yup.object().shape({
    isMoralPerson: yup.boolean().required("required"),
    isPartner: yup.boolean().required("required"),
    fullName: yup.string().required("required"),
    email: yup.string().email("invalid email").required("required"),
    phoneNumber: yup.string().required("required"),
    password: yup.string().required("required"),
    picture: yup.string().required("required"),
    vehicules: yup.array().required("required")
});

const loginSchema = yup.object().shape({
    isPartner: yup.boolean().required("required"),
    isClient: yup.boolean().required("required"),
    email: yup.string().email("invalid email").required("required"),
    password: yup.string().required("required") 
});
*/

const initialValuesRegister = {
    isMoralPerson: false,
    isPartner: false,
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    picture: "",
    vehicules:[]
};

const initialValuesLogin = {
    email: "",
    password: ""
};

const initialValueVehicule = {
  Immatriculation:"", 
  TypeVehicule:"",
  NomVehicule:"",
  Proprietaire: "",
  isReadytowork: true,
  courses:[]
}
  


const Form2 = () => {

    const color1 = color.blue.niveau100;
    const color2 = color.gray.niveau60;
    const color3 = color.gray.niveau0;
    //const color4= color.blue.niveau20;

    const isNonMobile = useMediaQuery("(min-width: 800px)");

    const [pageType, setPageType] = useState("register");
    const [pageType2, setPageType2] = useState("particulier");
    const [pageType3, setPageType3] = useState("client");
    const [user, setUser] = useState(initialValuesRegister);
    const [userLogin, setUserLogin] = useState(initialValuesLogin);
    const [vehicule, setVehicule] = useState(initialValueVehicule);
    const [error, setError] = useState(false)

    const isLogin = pageType === "login";
    const isRegister = pageType === "register";
    const isEnterprise = pageType2 === "entreprise";
    const isPartenaire = pageType3 === "partenaire";
   // const [isRegistered, setIsRegistered] = useState(false);

    //const dispatch = useDispatch();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const Error = useSelector((state) => state.UserReducer.loginError);
    const Statut = useSelector((state) => state.UserReducer.loginStatut);
    const registerButton = useSelector((state) => state.UserReducer.loginButton);
    const UserLoggedIn = useSelector((state) => state.UserReducer.user)
    console.log(UserLoggedIn)


    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if(isRegister) {
            if(isPartenaire) {
                
                console.log(vehicule)
                console.log(user)
                try {
                    const resp = api.registerUser(user)
                    const resVehicule = api.createVehicule(vehicule)
                    dispatch(loginStatut(true))
                    console.log(resp)
                    console.log(resVehicule)
                    //setUser(initialValuesRegister)
                    setPageType("login");
                } catch (error) {
                    console.log(error)
                }
            }
            else {
                const resp = api.registerUser(user) ;
                console.log(resp);
                //setUser(initialValuesRegister)
                setPageType("login");
            }      
        } 
        if(isLogin) {
        
            try {
                const resp = api.loginUser(userLogin)
                .then((response) => {
                    if(response.data) { dispatch(loginSuccess());
                                        dispatch(loginStatut(true));
                                        setUserLogin(initialValuesLogin);
                                        navigate('/Accueil/user'); 
                                        console.log(response.data);
                                        dispatch(setLogin(response.data));}
                    else {
                         setError(true)
                         console.log(error)
                    }
                })
                console.log(resp)
                
            } catch (error) {
                dispatch(loginError());
                console.log(error)
            }
        }
    }
    
 
    //console.log("user :",  user)
   // console.log("vehicule: ", vehicule)

    // validationSchema={isLogin ? loginSchema : registerSchema }

    //const setFieldValue=() => {};
   // console.log(Statut)

    return (
        <Box >
            <Container sx={{width: isNonMobile ? "75%" : "95%", display:"flex", 
                            flexDirection:"column", 
                            justifyContent:"center", 
                            alignItems:"center", }}>
            <Typography variant="h3" sx={{color:color1, fontWeight:"bold", marginBottom:"60px"}}>
                              {isRegister ? "INSCRIPTION" : "CONNEXION" }
            </Typography>
            <Paper elevation={10} sx={{borderRadius:"20px", padding:"50px" }}>
            
               <form autoComplete="off" 
                     noValidate 
                     onSubmit={handleSubmit} 
                     
                      >
                     <Container sx={{display:"flex", flexDirection:"column", 
                                    justifyContent:"center", alignItem:"center"}}>
                     {isRegister && 
                     <FormControl>
                         <FormLabel id="demo-controlled-radio-buttons-group"> Type de Compte</FormLabel>
                              <RadioGroup aria-labelledby="demo-controlled-radio-buttons-group"
                                          name="controlled-radio-buttons-group"
                                          value={user.isPartner}
                                          onChange={(e) => {setUser({...user, isPartner: e.target.checked});
                                                            setPageType3(isPartenaire ? "client" : "partenaire" );} }>
                                    <Grid container spacing={4} justifyContent="center" alignItems="center">
                                          <Grid item xs={isNonMobile?2 : 0}></Grid>
                                          <Grid item xs={isNonMobile?4 : 12}>
                                              <FormControlLabel checked={!user.isPartner} control={<Radio />} label="Compte Client" />
                                          </Grid>
                                          <Grid item xs={isNonMobile?4 : 12}>
                                              <FormControlLabel checked={user.isPartner} control={<Radio />} label="Compte Partenaire" />
                                          </Grid>
                                          <Grid item xs={isNonMobile?2 : 0}></Grid>
                                    </Grid>
                              </RadioGroup>
                        </FormControl>}
                          {isRegister && 
                           <FormControl>
                           <FormLabel id="demo-controlled-radio-buttons-group"> Type de Client</FormLabel>
                                <RadioGroup aria-labelledby="demo-controlled-radio-buttons-group"
                                            name="controlled-radio-buttons-group"
                                            value={user.isMoralPerson}
                                            onChange={(e) => {setUser({...user, isMoralPerson: e.target.checked});
                                                             setPageType2(isEnterprise ? "particulier" : "entreprise" );}}>
                                      <Grid container spacing={4} justifyContent="center" alignItems="center">
                                            <Grid item xs={isNonMobile?2 : 0}></Grid>
                                            <Grid item xs={isNonMobile?4 : 12}>
                                                <FormControlLabel value={false} control={<Radio />} label="Vous etes un Particulier" />
                                            </Grid>
                                            <Grid item xs={isNonMobile?4 : 12}>
                                                <FormControlLabel value={true} control={<Radio />} label="Vous etes une entreprise" />
                                            </Grid>
                                            <Grid item xs={isNonMobile?2 : 0}></Grid>
                                      </Grid>
                                </RadioGroup>
                          </FormControl>}
                    </Container>
                    <Container sx={{display:"flex", flexDirection:"row", justifyContent:"center", alignItem:"center"}}>
                             <Grid container sx={{paddingTop:"30px"}} spacing={4}>
                                   {isRegister &&
                                   <Grid item xs={isNonMobile ? 6 : 12} >
                                         <TextField
                                                   placeholder={ isEnterprise ? "Nom Entreprise" : "Nom Complet"} 
                                                   fullWidth={true}
                                                   onChange={(e) => {setUser({...user, fullName:e.target.value});
                                                                    isRegister ? dispatch(testRegister({user, vehicule})) :
                                                                                 dispatch(testLogin(userLogin)) } }
                                                   value={user.fullName}
                                                   name="username"
                                              />
                                    </Grid>}
                                    {isRegister &&
                                    <Grid item xs={isNonMobile ? 6 : 12} >
                                          <TextField
                                          fullWidth= {true}
                                        placeholder="phoneNumber"
                                        onChange={(e) => {setUser({...user, phoneNumber:e.target.value});
                                                          isRegister ? dispatch(testRegister({user, vehicule})) :
                                                                       dispatch(testLogin(userLogin))}}
                                        value={user.phoneNumber}
                                        name="phoneNumber"
                                        
                                         />  
                                    </Grid> } 
                                <Grid item xs={isNonMobile ? isLogin ? 12 : 6 : 12} >
                                      <TextField
                                        placeholder="email"
                                        fullWidth={true}  
                                        onChange={(e) => {setUser({...user, email:e.target.value});
                                                          setUserLogin({...userLogin, email: e.target.value});
                                                          isRegister ? dispatch(testRegister({user, vehicule})) :
                                                          dispatch(testLogin(userLogin)) } }
                                        value={user.email}
                                        name="email"
                                        
                                         />
                               </Grid>
                               <Grid item xs={isNonMobile ? isLogin ? 12 : 6 : 12} >
                                     <TextField
                                        placeholder="password"
                                        type="password" 
                                        fullWidth={true}
                                        onChange={(e) => {setUser({...user, password:e.target.value});
                                                          setUserLogin({...userLogin, password: e.target.value});
                                                          isRegister ? dispatch(testRegister({user, vehicule})) :
                                                                        dispatch(testLogin(userLogin)) } }
                                        value={user.password}
                                        name="password"
                                      
                                         />
                               </Grid>
                               { isRegister && isPartenaire && 
                                 <Grid item xs={isNonMobile ? 6 : 12} >
                                       <FormControl fullWidth>
                                             <InputLabel id="demo-simple-select-label">Type de Vehicule</InputLabel>
                                                       <Select
                                           labelId="demo-simple-select-label"
                                           id="demo-simple-select"
                                           value={vehicule.TypeVehicule}
                                           label="Type de Vehicule"
                                           onChange={(e) => {setVehicule({...vehicule, TypeVehicule:e.target.value, 
                                                                                      Proprietaire: user.fullName});
                                                             isRegister ? dispatch(testRegister({user, vehicule})) :
                                                                          dispatch(testLogin(userLogin))}}
                                      >
                                           <MenuItem value="ENGIN de Chantier BTP"> ENGIN de Chantier BTP </MenuItem>
                                            <MenuItem value="Camion de Transport"> Camion de Transport </MenuItem>
                                                      </Select>
                                     </FormControl>
                                  </Grid>}
                                  { isRegister && isPartenaire && 
                                  <Grid item xs={isNonMobile ? 6 : 12} >
                                       <FormControl fullWidth>
                                             <InputLabel id="demo-simple-select-label">Nom du Vehicule</InputLabel>
                                                       <Select
                                           labelId="demo-simple-select-label"
                                           id="demo-simple-select"
                                           value={vehicule.NomVehicule}
                                           label="Type de Vehicule"
                                           onChange={(e) =>{ setVehicule({...vehicule, NomVehicule: e.target.value,
                                                                                      Proprietaire: user.fullName});
                                                            isRegister ? dispatch(testRegister({user, vehicule})) :
                                                                        dispatch(testLogin(userLogin))}}
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
                                  </Grid>}
                                  { isRegister && isPartenaire && 
                                 <Grid item xs={isNonMobile ? 6 : 12} >
                                     <TextField placeholder="Immatriculation Vehicule"
                                                type="text" 
                                                fullWidth={true}
                                                onChange={(e) => {setVehicule({...vehicule, Immatriculation:e.target.value,
                                                                                           Proprietaire: user.fullName});
                                                                 isRegister ? dispatch(testRegister({user, vehicule})) :
                                                                              dispatch(testLogin(userLogin))}}
                                                value={vehicule.Immatriculation}
                                                name="Immatriculation" />
                                 </Grid>}
                                
                    </Grid>
                    </Container>
                     <Container>
                          { registerButton ? 
                           <Button type="submit"
                                  fullWidth={true}
                                  sx={{ m: "2rem 0", p:"1rem",
                                        backgroundColor:color1, 
                                        color:color3, width:"70%",
                                        paddingTop:"20px",
                                        "&: hover": {cursor:"pointer", color:"#1EDAFF"}}}>
                                      {isLogin ? "LOGIN" : "REGISTER"}
                          </Button> :
                           <Button type="submit"
                                  disabled
                                  fullWidth={true}
                                  sx={{ m: "2rem 0", p:"1rem", 
                                 backgroundColor:color2 ,width:"70%",
                                 paddingTop:"20px",
                                 "&: hover": {cursor:"pointer", color:"#1EDAFF"}}}>
                               {isLogin ? "LOGIN" : "REGISTER"}
                        </Button>
                          }
                           { Statut && (Error ?
                            <Alert severity="error"> Credentials Errors </Alert> :
                           <Alert severity="success"> Login Successfully </Alert>)}
                          <Typography onClick={() => {setPageType( isLogin ? "register" : "login");}}
                                      sx={{ textDecoration: "underline",
                                            color: color1,
                                              "&: hover": {cursor:"pointer", color:"#1EDAFF"}
                                           }}>
                                           {isLogin ? "Vous n'avez pas encore de compte? Inscrivez-vous" : 
                                                      "Vous avez deja un compte? Connectez-vous ici"}
                        </Typography>
                     </Container>
                </form>
        </Paper>
        </Container>
    </Box>
    )
}

export default Form2;