import { useState, useEffect } from "react";
import { Box, Button, Typography, useMediaQuery, TextField, Radio, RadioGroup, InputBase, Stack, Paper } from "@mui/material";
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import { Formik } from "formik";
import * as yup from 'yup';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { color } from "../theme";
import { setLogin } from "../state/UserSlice";
import Dropzone from 'dropzone';
import FlexBetween from "./FlexBetween";


const registerSchema = yup.object().shape({
    isMoralPerson: yup.boolean().required("required"),
    isPhysicalPerson: yup.boolean().required("required"),
    isPartner: yup.boolean().required("required"),
    isClient: yup.boolean().required("required"),
    username: yup.string().required("required"),
    email: yup.string().email("invalid email").required("required"),
    phoneNumber: yup.string().required("required"),
    password: yup.string().required("required"),
    picture: yup.string().required("required"),
    
});

const loginSchema = yup.object().shape({
    isPartner: yup.boolean().required("required"),
    isClient: yup.boolean().required("required"),
    email: yup.string().email("invalid email").required("required"),
    password: yup.string().required("required") 
});

const initialValuesRegister = {
    isPhysicalPerson: true,
    isMoralPerson: false,
    isClient: true,
    isPartner: false,
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
    picture: "",
    isMoralPerson: false,
    isPhysicalPerson: false
};

const initialValuesLogin = {
    isPartner: false,
    isClient: true,
    email: "",
    password: ""
};

const Form = () => {

    const [pageType, setPageType] = useState("login");
    const [userType, setUserType] = useState({isPhysicalPerson: true, isClient: true})
    const [user, setUser] = useState({
        isPhysicalPerson: true,
        isMoralPerson: false,
        isClient: true,
        isPartner: false,
        username: "",
        email: "",
        phoneNumber: "",
        password: "",
        picture: "",
        isMoralPerson: false,
        isPhysicalPerson: false
    })
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isNonMobile = useMediaQuery("(min-width: 800px)");
    const color1 = color.blue.niveau100;
    const color2 = color.gray.niveau0;
    const color3 = "white";
    const color4 = "black";
    const isLogin = pageType === "login";
    const isRegister = pageType === "register";
   

   const register = async (values) => {
        // this allow us to send form info with picture
        const formData = new FormData();
        for(let value in values) {
            formData.append(value, values[value]);
        }
        formData.append("picturePath", values.picture.name);

        const savedUserResponse = await fetch(
            "http://localhost:5001/auth/register", 
            {
                method: "POST",
                body: formData
            }
        );

        const savedUser = await savedUserResponse.json();

        if(savedUser) { setPageType("login"); }
    }

    const login = async (values) => {

        const loggedInResponse = await fetch(
            "http://localhost:5001/auth/login", 
            {
                method: "POST",
                headers:{"Content-Type": "application/json"},
                body: JSON.stringify(values)
            }
        );

        const loggedIn = await loggedInResponse.json();

        if(loggedIn) { dispatch(
                             setLogin({
                                        user: loggedIn.user,
                                        token: loggedIn.token
                             })
        );
        navigate('/Accueil/:userID')
    }
    }

    useEffect(() => {
        
    
    }, [user])

    const handleFormSubmit = (e) => {
         
    }


    // ces parametres viendront de formik
    const handleSubmit = (e) => {
        e.preventDefault();
       // if(isLogin) await login(user)
       // if(isRegister) await register(user)
    }; 
   
    const handleChange = () => {}


     return (
        <Formik onSubmit={handleFormSubmit}
                 initialValues={isLogin ? initialValuesLogin : initialValuesRegister}
                 validationSchema={isLogin ? loginSchema : registerSchema}>
                {({
                    values,
                    errors,
                    touched,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                    setFieldValue,
                    resetForm
                }) => {
                
                    <form onSubmit={handleSubmit }>
                         <Box display="grid"
                              gap="30px"
                              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                              sx={{
                                  "& > div": {gridColumn: isNonMobile ? undefined : "span 4"}
                              }}>
                                     
                              {isRegister && (
                                   <>
                                       <input 
                                           type="radio"
                                           label="Compte client"
                                           checked={user.isMoralPerson}
                                           onChange={setUser()}
                                           name="isMoralPerson"
                                           sx={{gridColumn:"span 2"}}
                                            />
                                       <input 
                                           type="radio"
                                           label="Compte partenaire"
                                           checked={user.isMoralPerson}
                                           onChange={handleChange}
                                           name="isMoralPerson"
                                           sx={{gridColumn:"span 2"}}
                                            />
                                      <input 
                                           type="radio"
                                           label="Vous etes un Particulier"
                                           checked={user.isMoralPerson}
                                           onChange={handleChange}
                                           name="isMoralPerson"
                                           sx={{gridColumn:"span 2"}}
                                            />
                                       <input 
                                           type="radio"
                                           label="Vous etes une Entreprise"
                                           checked={user.isMoralPerson}
                                           onChange={handleChange}
                                           name="isMoralPerson"
                                           sx={{gridColumn:"span 2"}}
                                            />
                                        <TextField
                                        label="userName" 
                                        onChange={handleChange}
                                        value={user.username}
                                        name="username"
                                        sx={{gridColumn:"span 2"}}
                                         />
                                          <TextField
                                        label="phoneNumber"
                                        onChange={handleChange}
                                        value={user.phoneNumber}
                                        name="phoneNumber"
                                        sx={{gridColumn:"span 2"}}
                                         />  
                                   </>
                              )}
                               <TextField
                                        label="email"  
                                        onChange={handleChange}
                                        value={user.email}
                                        name="email"
                                        sx={{gridColumn:"span 4"}}
                                         />
                                 <TextField
                                        label="password"
                                        type="password" 
                                        onChange={handleChange}
                                        value={user.password}
                                        name="password"
                                        sx={{gridColumn:"span 4"}}
                                         />
                         </Box>
                         
                         <Box>
                              <Button type="submit"
                                      fullWidth
                                      sx={{m: "2rem 0", p:"1rem", backgroundColor:color1, color:color2}}>
                                      {isLogin ? "LOGIN" : "REGISTER"}
                              </Button>
                              <Typography onClick={() => {
                                             setPageType( isLogin ? "register" : "login");
                                           }}
                                           sx={{
                                              textDecoration: "underline",
                                              color: color1,
                                              "&: hover": {cursor:"pointer", color:"#1EDAFF"}
                                           }}>
                                           {isLogin ? "Vous n'avez pas encore de compte? Inscrivez-vous" : 
                                                      "Vous avez deja un compte? Connectez-vous ici"}
                              </Typography>
                         </Box>

                    </form>
                
                }}
         </Formik>
     )
}

export default Form;
