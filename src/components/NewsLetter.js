import { Button, Typography, Box, Container, useMediaQuery, Grid, TextField, Alert } from '@mui/material';
import { color } from '../theme';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addEmail } from "../state/NewsLetterSlice";
import * as api from '../api/index';
import CircularProgress from '@mui/material/CircularProgress';
import { green, red } from '@mui/material/colors';
import Fab from '@mui/material/Fab';
import CheckIcon from '@mui/icons-material/Check';
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';

const NewsLetter = () => {

    const color1 = color.blue.niveau100;
    const color4 = color.gray.niveau20;
    const isScreenToBig = useMediaQuery("(min-width: 1200px)");
    const isScreenBig = useMediaQuery("(min-width: 800px)");
    const isScreenSmall = useMediaQuery("(min-width: 600px)");
    const [newsLetterEmail, setNewsLetterEmail] = useState({email:"", hasAccount:false});
    const [error, setError] = useState(0);
    const dispatch = useDispatch();

// CIRCULAR INTEGRETED BUTTON PROGRESS
const [loading, setLoading] = useState(false);
//const [success, setSuccess] = useState(false);
//const timer = useRef();

const buttonSx = {
  ...(error === 1 && {
    bgcolor: green[500],
    '&:hover': {
      bgcolor: green[700],
    },
  }),
};

const buttonSx2 = {
  ...(error === -1 || error === -2 && {
    bgcolor: red[500],
    '&:hover': {
      bgcolor: red[700],
    },
  }),
};

/*
useEffect(() => {
  return () => {
    clearTimeout(timer.current);
  };
}, []); */

/*const handleButtonClick = () => {
  if (!loading) {
    setSuccess(false);
    setLoading(true);
    timer.current = window.setTimeout(() => {
      setSuccess(true);
      setLoading(false);
    }, 2000);
  }
};*/
// fin



    const handleSubmit = (e) => {
        e.preventDefault();
        
        setLoading(true);

        /*
        if (!loading) {
            setSuccess(false);
            setLoading(true);
            timer.current = window.setTimeout(() => {
              setSuccess(true);
              setLoading(false);
            }, 2000);
        }
        */

        try {
            api.addEmailNewsletter(newsLetterEmail).then((resp) => {
                setLoading(false);
                console.log(resp.data, resp.status);
                setError(1);
                dispatch(addEmail(newsLetterEmail));
            }).catch((err) => { console.log(err.messageg, err.name, err.status);
                     setLoading(false);
                     setError(-1);}) 
        } catch (error) {
            setLoading(false);
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
                              display= "flex"
                              justifyContent="center"
                              alignItems="center"
                              spacing={2}>

                              <Grid item xs={isScreenToBig ? 3 : isScreenBig ? 4 : isScreenSmall ? 12 : 12}>

                                   <Button variant="text" 
                                           startIcon={<MailOutlineIcon />}
                                           sx={{color:"white"}}>
                                           Transaf NewsLetter
                                   </Button> 

                              </Grid>

                              <Grid item xs={isScreenToBig ? 5 : isScreenBig ? 8 : isScreenSmall ? 12 : 12}>

                                  <Box
                                   sx={{backgroundColor:"white",
                                       borderRadius:"10px"}}>

                                       <TextField placeholder='adresse e-mail'
                                                  autoComplete="off"
                                                  fullWidth
                                                  type='email'
                                                  name='email'
                                                  value={newsLetterEmail.email}
                                                  onChange={(e) => {setNewsLetterEmail({...newsLetterEmail, email:e.target.value})} } />
                                  </Box>

                              </Grid>

                              <Grid item xs={isScreenToBig ? 4 : isScreenBig ? 12 : isScreenSmall ? 12 : 12}>

                              <Box>
                                   <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                   <Box sx={{ m: 1, position: 'relative' }}>
                                       <Fab aria-label="save"
                                            color="primary"
                                            sx={buttonSx}
                                            onClick={handleSubmit }>
                                            { error === 1 ? <CheckIcon /> : 
                                              error === -1 || error === -2 ? <CloseIcon /> :  <SaveIcon />}
                                      </Fab>
                                      {loading && (
                                          <CircularProgress size={68}
                                                            sx={{ color: green[500],
                                                                  position: 'absolute',
                                                                  top: -6,
                                                                  left: -6,
                                                                  zIndex: 1 }} />
                                                   )}
                                        </Box>
                                             <Box sx={{ m: 1, position: 'relative' }}>
                                                  <Button variant="contained"
                                                          sx={ error === 1 ? buttonSx : buttonSx2}
                                                          type="submit"
                                                          disabled={loading}
                                                          onClick={handleSubmit}>
                                                         valider
                                                  </Button>
                                                  {loading && (
                                                       <CircularProgress size={24}
                                                                         sx={{ color: green[500],
                                                                               position: 'absolute',
                                                                               top: '50%',
                                                                               left: '50%',
                                                                               marginTop: '-12px',
                                                                               marginLeft: '-12px'}} />
                                                               )}
                                                       </Box>
                                                  </Box>
                                   
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

export default NewsLetter


//{success ? <CheckIcon /> : <SaveIcon />}