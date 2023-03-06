import { Button, Typography, Box, Container, useMediaQuery, Grid, TextField, Alert } from '@mui/material';
import { color } from '../theme';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addEmail } from "../state/NewsLetterSlice";
import * as api from '../api/index';

const NewsLetter = () => {

    const color1 = color.blue.niveau100;
    const color4 = color.gray.niveau20;
    const isScreenToBig = useMediaQuery("(min-width: 1200px)");
    const isScreenBig = useMediaQuery("(min-width: 800px)");
    const isScreenSmall = useMediaQuery("(min-width: 600px)");
    const [newsLetterEmail, setNewsLetterEmail] = useState("");
    const [error, setError] = useState(0);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        try {
            api.addEmailNewsletter(newsLetterEmail).then((resp) => {
                console.log(resp.data, resp.status)
                setError(1)
                dispatch(addEmail(newsLetterEmail))
            }).catch((err) => { console.log(err.messageg, err.name, err.status);
                     setError(-1);}) 
        } catch (error) {
            console.log(error.msg, error.status, error.name)
            setError(-2)
        }
       
    }


    useEffect(() => {
        if(error !== 0) {
            let cleanup = setTimeout(() => {setError(0);}, 4000);
            console.log("remove dialog")
            return () => {
                 clearInterval(cleanup) }
        }
    })


    return (
        <Box sx={{ backgroundColor: color4,
                   width:"100%",
                   paddingTop: "40px",
                   paddingBottom: "50px" }}>

             <Container sx={{marginBottom: "50px", width: isScreenBig ? "60%" : "85%"}}>

                                   <Typography variant={ isScreenBig ? "h4" : "h6" }
                                               sx={{color:color1,
                                                    textAlign:"center"}}>
                                               Abonnez-vous et recevez les dernieres nouveautés 
                                               sur nos Offres et Services!!
                                   </Typography>

             </Container>

             <Container sx={{ backgroundColor: color1,
                              width:"70%",
                              borderStyle: "groove",
                              paddingTop:"20px",
                              borderRadius:"10px",
                              minHeight: "100px",
                              paddingBottom:"20px"}}>

                       <form onSubmit={handleSubmit}> 

                       <Grid  container
                              justifyContent="center"
                              alignItems="center"
                              spacing={2}>

                              <Grid item xs={isScreenToBig ? 4 : isScreenBig ? 4 : isScreenSmall ? 12 : 12}>

                                   <Button variant="text" 
                                           startIcon={<MailOutlineIcon />}
                                           sx={{color:"white"}}>
                                           Transaf NewsLetter
                                   </Button> 

                              </Grid>

                              <Grid item xs={isScreenToBig ? 6 : isScreenBig ? 8 : isScreenSmall ? 10 : 12}>

                                  <Box
                                   sx={{backgroundColor:"white",
                                       borderRadius:"10px"}}>

                                       <TextField placeholder='adresse e-mail'
                                                  autoComplete="off"
                                                  fullWidth
                                                  type='email'
                                                  name='email'
                                                  value={newsLetterEmail}
                                                  onChange={(e) => {setNewsLetterEmail(e.target.value)} } />
                                  </Box>

                              </Grid>

                              <Grid item xs={isScreenToBig ? 2 : isScreenBig ? 12 : isScreenSmall ? 2 : 12}>

                              <Box>

                                   <Button variant="contained"
                                           type="submit" 
                                           sx={{backgroundColor:"white", color:color1}}> 
                                           valider
                                   </Button>
                                   
                              </Box>
                              </Grid>
                              
                       </Grid>
                    </form>
             </Container>
             {error === -1 && <Alert variant='error' > Email déja enregistrée dans la base de données </Alert>}
             {error === -2 && <Alert variant='error' > Connexion au serveur impossible, Réessayez plus tard... </Alert>}
             {error === 1 && <Alert variant='success' > email enregistrée avec succes!!!</Alert>}
        </Box>
    )
}

export default NewsLetter;