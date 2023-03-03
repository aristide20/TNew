import { Button, Typography, Paper, TextField, useMediaQuery, Box, Grid,
            Select, MenuItem, InputLabel,
         Alert} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setLogin, loginSuccess, loginError, testLogin,  testRegister, loginStatut, setLogout } from "../state/UserSlice";
import { color } from "../theme";
import { useState, useEffect } from "react";
import { Container } from "@mui/system";
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useNavigate } from "react-router-dom";
//import CheckIcon from '@mui/icons-material/Check';
//import EditOutlinedIcon  from "@mui/icons-material/EditOutlined"
import * as api from "../api/index";
import { getCommands } from '../state/UserSlice';
import { validEmail, validPhoneNumber } from './Regex';
import { motion } from "framer-motion";
import CircularProgress from '@mui/material/CircularProgress';
//import jwt from 'jwt-decode';


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
    const [typeClient, setTypeClient] = useState("particulier");
    const [typeCompte, setTypeCompte] = useState("client");

    const [user, setUser] = useState(initialValuesRegister);
    const [userLogin, setUserLogin] = useState(initialValuesLogin);
    const [vehicule, setVehicule] = useState(initialValueVehicule);
    const [error, setError] = useState(0);
    const [clicked, setClicked] = useState(false);

    const isLogin = pageType === "login";
    const isRegister = pageType === "register";
    const isEnterprise = pageType2 === "entreprise";
    const isPartenaire = pageType3 === "partenaire";
    
   // const [isRegistered, setIsRegistered] = useState(false);

    //const dispatch = useDispatch();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    //const Error = useSelector((state) => state.UserReducer.loginError);
    //const Statut = useSelector((state) => state.UserReducer.loginStatut);
    //const Statut = useSelector((state) => state.persistedReducer.loginStatut);
    const registerButton = useSelector((state) => state.persistedReducer.loginButton);
    //const registerButton = useSelector((state) => state.UserReducer.loginButton);
    //const UserLoggedIn = useSelector((state) => state.UserReducer.user);
    //console.log(user.isPartner, user.isMoralPerson);



    // Validation of phoneNumber and email format
   const [emailError, setEmailError] = useState(false);
   const [numberError, setNumberError] = useState(false);

   /*
   const validate = () => {
      if (!validEmail.test(user.email)) {
         setEmailError(true);
      }
      if (!validPhoneNumber.test(user.phoneNumber)) {
        setNumberError(true);
      }
   };*/

   // end of validation
    

   //validation or errors messages
   useEffect(function(){
    if(emailError){
        let cleanup = setTimeout(()=>{console.log("enter timeout"); setEmailError(false)}, 8000);
        console.log("remove dialog")
        return () => {
            clearInterval(cleanup)
        }
    } 
});

    useEffect(function(){
        if(numberError){
            let cleanup = setTimeout(()=>{console.log("enter timeout"); setNumberError(false)}, 8000);
            console.log("remove dialog")
            return () => {
                 clearInterval(cleanup)
             }
          } 
     });


     //  Login validation messages
     useEffect(function(){
        if(error === 1){
            let cleanup = setTimeout(()=>{console.log("enter timeout"); setError(0); navigate('/Accueil')}, 5000);
            console.log("remove dialog")
            return () => {
                 clearInterval(cleanup)
             }
          } 
          if(error === -1){
            let cleanup = setTimeout(()=>{console.log("enter timeout"); setError(0);}, 5000);
            console.log("remove dialog")
            return () => {
                 clearInterval(cleanup)
             }
          }
          if(error === 2){
            let cleanup = setTimeout(()=>{console.log("enter timeout"); setError(0); 
                                          if(!isPartenaire){ setPageType("login"); } }, 5000);
            console.log("remove dialog")
            return () => {
                 clearInterval(cleanup)
             }
          } 
          if(error === -2){
            let cleanup = setTimeout(()=>{console.log("enter timeout"); setError(0);}, 5000);
            console.log("remove dialog")
            return () => {
                 clearInterval(cleanup)
             }
          }
          if(error === 3){
            let cleanup = setTimeout(()=>{console.log("enter timeout"); setError(0); setPageType("login");}, 5000);
            console.log("remove dialog")
            return () => {
                 clearInterval(cleanup)
             }
          } 
          if(error === -3){
            let cleanup = setTimeout(()=>{console.log("enter timeout"); setError(0); setPageType("login");}, 5000);
            console.log("remove dialog")
            return () => {
                 clearInterval(cleanup)
             }
          }
          if(error === -4){
            let cleanup = setTimeout(()=>{console.log("enter timeout"); setError(0);}, 5000);
            console.log("remove dialog")
            return () => {
                 clearInterval(cleanup)
             }
          }
     });

   //



    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setLogout());
        //validate();
        console.log(numberError, emailError)

        if(isRegister) {
           if(validEmail.test(user.email)){
                setEmailError(false);
                if(validPhoneNumber.test(user.phoneNumber)) {
                    setNumberError(false); 
                    setClicked(true);
                       
                        //console.log(vehicule);
                       // console.log(user);
                        try {
                            api.registerUser(user).then((resp) => {
                                console.log(resp);
                                console.log(resp.data);
                                console.log(resp.status);
                                setClicked(false);
                                if(resp.status === 201) {
                                    setError(2);
                                    if(isPartenaire) {
                                        setClicked(true);
                                        api.createVehicule(vehicule).then((resp2) => {
                                            setClicked(false);
                                             console.log(resp2);
                                             console.log(resp2.data);
                                             console.log(resp2.status); 
                                             if(resp2.status === 201) {
                                                  setError(3);
                                                  dispatch(setVehicule(vehicule));
                                                  setUser(initialValuesRegister);
                                             }
                                           }).catch((err) => {
                                                    console.log(err.msg);
                                                    console.log(err.name);
                                                    console.log(err.code);
                                                    setError(-3)
                                    })
                                }
                            }

                            }).catch((err) => {
                                console.log(err.message);
                                                    console.log(err.name);
                                                    console.log(err.code);
                                                    setError(-2);
                                                    setClicked(false);
                            })
                        } catch (err) {
                                 console.log(err.message);
                                    console.log(err.name);
                                    console.log(err.code);
                                    setClicked(false);
                            setError(-4)
                        }      
                                 
                } 
                else { setNumberError(true); }
                
            }  
             else { setEmailError(true); }
            
        }
       

        if(isLogin) {

            if(validEmail.test(user.email)) {
                setNumberError(false);
                setClicked(true);
                try { 
                      api.loginUser(userLogin).then((Response) => {
                        setClicked(false);
                        console.log(Response.status); 
                        if(Response.status === 200) { 
                            dispatch(setLogin(Response.data));
                            dispatch(getCommands());
                            setError(1);
                             dispatch(loginSuccess());
                            setUserLogin(initialValuesLogin); }
                        //else if(Response === undefined) { setError(-1) }                                                               
                                                                                        })
                        .catch((err) => { setError(-1);
                                console.log(err.message);
                                setClicked(false);
                                console.log(err.name);
                                console.log(err.code);
                        })
                } catch (error) {
                    setClicked(false);
                    setError(-1)
                    dispatch(loginError());
                    console.log(error)
                }
            }
            else { setEmailError(true); }
        }
        
               
        dispatch(loginStatut(false));
        //setTimeout(dispatch(loginStatut(false)), 2000)
    }
    
 
    //console.log("user :",  user)
   // console.log("vehicule: ", vehicule)

    // validationSchema={isLogin ? loginSchema : registerSchema }

    //const setFieldValue=() => {};
   // console.log(Statut)

    return (
        <Box sx={{width: "100%", display:"flex", 
                  flexDirection:"column", 
                  justifyContent:"center", 
                   alignItems:"center" }} >
            <Box sx={{width: isNonMobile ? "75%" : "95%", display:"flex", 
                            flexDirection:"column", 
                            justifyContent:"center", 
                            alignItems:"center", }}>
            <Typography variant="h3" sx={{color:color1, fontWeight:"bold", marginBottom:"60px"}}>
                              {isRegister ? "INSCRIPTION" : "CONNEXION" }
            </Typography>
            <Paper elevation={10} sx={{borderRadius:"20px", padding:isNonMobile ? "50px" : "10px" }}>
            
               <form autoComplete="off" 
                     noValidate 
                     onSubmit={handleSubmit} 
                     
                      >
                     <Container sx={{display:"flex", flexDirection:"column", 
                                    justifyContent:"center", alignItems:"center"}}>
                     {isRegister && 
                     <FormControl>
                         <FormLabel id="demo-controlled-radio-buttons-group"> Type de Compte</FormLabel>
                              <RadioGroup aria-labelledby="demo-controlled-radio-buttons-group"
                                          name="controlled-radio-buttons-group"
                                          value={typeCompte}
                                          onChange={(e) => {setTypeCompte(e.target.value);
                                                            setUser({...user, isPartner: typeCompte === "client" ? true : false});
                                                            setPageType3(isPartenaire ? "client" : "partenaire" );} }>
                                    <Grid container spacing={4} justifyContent="center" alignItems="center">
                                          <Grid item xs={isNonMobile?2 : 0}></Grid>
                                          <Grid item xs={isNonMobile?4 : 12}>
                                              <FormControlLabel value="client" control={<Radio />} label="Compte Client" />
                                          </Grid>
                                          <Grid item xs={isNonMobile?4 : 12}>
                                              <FormControlLabel value="partenaire" control={<Radio />} label="Compte Partenaire" />
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
                                            value={typeClient}
                                            onChange={(e) => {setTypeClient(e.target.value);
                                                              setUser({...user, isMoralPerson: typeClient === "particulier" ? true : false});
                                                              setPageType2(isEnterprise ? "particulier" : "entreprise" );}}>
                                      <Grid container spacing={4} justifyContent="center" alignItems="center">
                                            <Grid item xs={isNonMobile?2 : 0}></Grid>
                                            <Grid item xs={isNonMobile?4 : 12}>
                                                <FormControlLabel value="particulier" control={<Radio />} label="Vous etes un Particulier" />
                                            </Grid>
                                            <Grid item xs={isNonMobile?4 : 12}>
                                                <FormControlLabel value="entreprise" control={<Radio />} label="Vous etes une entreprise" />
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
                                         {numberError && 
                                          <motion.div initial={{opacity:0}}
                                                      animate={{opacity:1,  transition:{duration: 1, ease: "easeInOut"}}}
                                                      exit={{opacity:0,  transition:{duration: 1, ease: "easeInOut"}}} > 
                                                     <Alert severity="error">
                                                            Your Phone Number is invalid 
                                                    </Alert> 
                                        </motion.div>} 
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
                                    { emailError && <motion.div initial={{opacity:0}}
                                                      animate={{opacity:1,  transition:{duration: 1, ease: "easeInOut"}}}
                                                      exit={{opacity:0,  transition:{duration: 1, ease: "easeInOut"}}} > 
                                                     <Alert severity="error">
                                                            Your adresse email is invalid 
                                                    </Alert> 
                                        </motion.div> }
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
                                  { isRegister && isPartenaire && vehicule.TypeVehicule === "Camion de Transport" &&
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
                                  { isRegister && isPartenaire && vehicule.TypeVehicule === "ENGIN de Chantier BTP" &&
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
                                  </Grid>}
                                  { isRegister && isPartenaire && 
                                 <Grid item xs={isNonMobile ? 6 : 12} >
                                     <TextField placeholder="Immatriculation"
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
                           { error === 1 && <Alert severity="success"> Login successfully </Alert> }
                           { error === -1 && <Alert severity="error"> Credentials Errors </Alert> }
                           { error === 2 && <Alert severity="success"> User registered successfully </Alert> }
                           { error === -2 && <Alert severity="error"> validation problems </Alert> }
                           { error === 3 && <Alert severity="success"> Vehicule of the user successfully registered </Alert> }
                           { error === -3 && <Alert severity="error"> vehicule not registered, you have to do it in your account </Alert> }
                           { error === -4 && <Alert severity="error"> Network error, try again later... </Alert> }
                           { clicked &&   <Box sx={{ display: 'flex', flexDirection:"column", 
                                                   justifyContent:"center", alignItems:"center" }}>
                                             <CircularProgress />
                                         </Box>}
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
        </Box>
    </Box>
    )
}

export default Form2;