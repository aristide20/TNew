import CssBaseline from '@mui/material/CssBaseline';
import { color } from '../../../theme';
import { Typography, Grid, Avatar, Stack, Box, useMediaQuery, Paper, IconButton } from '@mui/material';
import { useSelector } from "react-redux";
//import {useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';



function createData(champ, sep ,  valeur ) {
    return { champ, sep, valeur};
  }


const Body = () => {

    const color1 = color.gray.niveau0;
    const color2 = color.blue.niveau100;
 
    const user = useSelector((state) => state.persistedReducer.user);
    //const commandes = useSelector((state) => state.persistedReducer.commandes);
    const isNonMobile = useMediaQuery("(min-width:900px)");
    const isNonMobile2 = useMediaQuery("(min-width:600px)");

    
    const rows = [
        createData('Nom ', ":", `${user.fullName}` ),
        createData('adresse email', ":", `${user.email}` ),
        createData('Numero de telephone', ":", `${user.phoneNumber}` ),
        createData('Type', ":", `${ user.isMoralPerson ? "Entreprise" : "Particulier" }` ),
        createData('compte',":", `${ user.isPartner ? "Partenaire" : "Client" }` ),
      ]


   

    return (
        <Box position="static" sx={{minHeight:"700px", width:"100%", marginTop:"10px", marginBottom:"40px", 
                                    padding: isNonMobile ? "50px" : "10px", bgcolor:color1,
              display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"   }}>
              <CssBaseline />
              <Grid container spacing={4} >
                    <Grid item xs={isNonMobile ? 4 : 12}>
                          <Stack direction="column" justifyContent="center" alignItems="center">
                                 <Avatar sx={{ width: 180, 
                                               height: 180, marginBottom:"20px" , bgcolor:color2}} 
                                               src={ <AccountCircleIcon color="success"  />
                                                      } />
                                 <Typography> id : {user._id} </Typography>
                           </Stack>
                     </Grid>
                    <Grid item xs={isNonMobile ? 7 : 12}>
                         <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 400 }} aria-label="simple table">
                                      <TableBody>
                                            {rows.map((row) => (
                                              <TableRow
                                                     key={row.name}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                                                    <TableCell component="th" scope="row">
                                                              {row.champ}
                                                    </TableCell>
                                                    <TableCell align="center">{row.sep}</TableCell>
                                                    <TableCell align="left">{row.valeur}</TableCell>
                                              </TableRow> ))}
                                    </TableBody>
                                </Table>
                          </TableContainer>
                    </Grid>
                    <Grid item xs={isNonMobile ? 1 : 0} ></Grid>
              </Grid>
              <Paper>

              </Paper>
        </Box>
    )
}

export default Body;
