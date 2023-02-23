import React, { useState } from 'react';
import { Box, Grid, Typography, Container, Button, useMediaQuery, Paper, TextField } from '@mui/material';
import { color } from "../../theme";
import { useDispatch, useSelector } from 'react-redux';
import  AdminNavBar  from './components/AdminNavbar';

const LoginAdmin = () => {

    const color1 = color.white.niveau0;
    const color2 = color.gray.niveau40;
    const color3 = color.blue.niveau100;
    const color4 = color.gray.niveau100;
    const color5 = color.white.niveau100;

    const [loginData, setLoginData] = useState({email:"", password:""})

    const handleSubmit = (e) => {
        e.preventdefault();

    }

    return (
        <Box sx={{ display:"flex", 
                   flexDirection:"column", 
                   justifyContent:"center", 
                   alignItems:"center", 
                   backgroundColor:color1,
                   width:"100%",
                   heiht:"700px"}}>
              <AdminNavBar />
             <Box sx={{marginTop:"100px"}}>
                  <Typography variant="h3" sx={{color:color3, fontWeight:"bold", textAlign:"center", textDecoration:"underline"}}>
                                TRANSAF ADMINISTRATOR SYSTEM
                   </Typography>
             </Box>

             <Paper elevation={20} sx={{backgroundColor:color3, borderRadius:"15px",
                                        padding:"30px", width:"300px",
                                        marginTop:"100px", marginBottom:"200px"}}>

                    <Grid container spacing={8} justifyContent="center" alignItems="center" >

                          <Grid item xs={12}>

                               <Typography variant="h5" sx={{color:color1, fontWeight:"bold", textAlign:"center"}}>
                                           Login to Administrator Page
                               </Typography>

                          </Grid>

                          <Grid item xs={12}>
                                 <TextField label='adresse email'
                                            sx={{backgroundColor:color1, borderRadius:"8px"}}
                                            variant="outlined"
                                            fullWidth
                                            name="email"
                                            value={loginData.email}
                                            onChange={(e) => setLoginData({...loginData, email:e.target.value})}
                                              />
                          </Grid>

                          <Grid item xs={12}>

                                 <TextField label='password'
                                            sx={{backgroundColor:color1, borderRadius:"8px"}}
                                            type='password'
                                            variant="outlined"
                                            fullWidth
                                            name="password"
                                            value={loginData.password}
                                            onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                                              />
                          </Grid>

                          <Grid item xs={12}>
                                
                                <Button variant="contained" 
                                        fullWidth
                                        size="large" 
                                        sx={{backgroundColor:color2, marginTop:"20px"}}
                                        type="submit"
                                        onSubmit={handleSubmit}>
                                        LOGIN
                                </Button>
                          </Grid>

                          <Grid item xs={12}>
                            
                          </Grid>

                    </Grid>

             </Paper>
             
             <Box sx={{backgroundColor:color4, padding:"20px", width:"100%"}}>
                 <Container sx={{display:"flex", flexDirection:"row", justifyContent:"flex-between", alignItems:"center"}}>
                           <Typography sx={{color:color5, fontSize:"20px"}}> Administrator System</Typography>
                           <Typography sx={{color:color5, fontSize:"20px"}}> Powered by KemaarSolutions</Typography>
                 </Container>
             </Box>
        </Box>
    )
}

export default LoginAdmin;