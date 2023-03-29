import { Grid, IconButton, Button, Typography, Box, Container, useMediaQuery } from '@mui/material';
import { FooterData } from './data/data';
import { color } from "../theme";
import FlexBetween from './FlexBetween';
import { useNavigate } from 'react-router-dom';


const Footer= ()=>{

 const background = color.gray.niveau100;
 const isSmallScreen = useMediaQuery("(min-width: 1000px)");
 const isSmallScreen3 = useMediaQuery("(min-width: 800px)");
 const isSmallScreen2 = useMediaQuery("(min-width: 600px)");
 const navigate = useNavigate();
 //const url = 'https://wa.me/message/JFJ4OHKASUDFA1'

 function openInNewTab(url) {
        window.open(url, '_blank').focus();
      }

    return(
        <Box position="static" sx={{ width:"100%", 
                                     backgroundColor:background, 
                                     flexGrow:1, 
                                     minWidth:"300px" }}>
            <Container sx={{ display:"flex", 
                             flexDirection:"row", 
                             justifyContent:"center", 
                             alignItems:"center"}}>
                       <IconButton size="large" edge="start" >
                                 <img src={FooterData.logoTitle.logo} alt="logo" height="50rem" />
                        </IconButton>
                        <Typography  
                                    sx={{ flexGrow: 1, color:"white", fontWeight:"bold" }}
                                    fontSize = "clamp(20px, 24px, 26px)"
                                    textAlign="center"
                                       >
                                    {FooterData.logoTitle.title}   
                        </Typography>
            </Container>
            <Container sx={{ paddingTop:"50px", paddingBottom:"50px" }}>
                      <Grid container
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            rowSpacing={2}
                            columnSpacing={4}>
                            <Grid item xs={isSmallScreen ? 3 : isSmallScreen3 ? 4 : isSmallScreen2 ? 6 : 12}>
                                  <Container>
                                             <Grid container
                                                   direction="column"
                                                   justifyContent= {isSmallScreen2 ? "flex-start" : "center"}
                                                   alignItems={isSmallScreen2 ? "flex-start" : "center"}
                                                   spacing={2}>
                                                   <Grid>
                                                         <Button variant="text"
                                                                 onClick={() => { }} 
                                                                 sx={{ color:"white", 
                                                                       textDecorationLine:"underline", 
                                                                       textDecorationColor:"white"}} >
                                                                 {FooterData.contacts.title}
                                                         </Button>    
                                                   </Grid>
                                                   <Grid   >
                                                         <Button variant="text"  
                                                                 startIcon={FooterData.contacts.logoAppel} 
                                                                 sx={{textTransform:"lowercase", color:"white"}} >
                                                                 {FooterData.contacts.contactAppel}
                                                         </Button>    
                                                   </Grid>
                                                   <Grid   >
                                                         <Button variant="text" 
                                                                 startIcon={FooterData.contacts.logoWhatsapp} 
                                                                 onClick={() => openInNewTab('https://wa.me/message/JFJ4OHKASUDFA1')}
                                                                 sx={{textTransform:"lowercase", color:"white"}} >
                                                                 {FooterData.contacts.contactWhatsapp}
                                                         </Button>    
                                                   </Grid>
                                                   <Grid  >
                                                         <Button variant="text" 
                                                                 startIcon={FooterData.contacts.logoMail} 
                                                                 onClick={() => navigate("/Contact")}
                                                                 sx={{textTransform:"lowercase", color:"white"}}>
                                                                 {FooterData.contacts.contactEmail}
                                                         </Button>   
                                                   </Grid>
                                                   <Grid   >
                                                         <Button variant="text" 
                                                                 startIcon={FooterData.contacts.logoFacebook} 
                                                                 onClick={() => openInNewTab('https://www.facebook.com/groupetransaf/')}
                                                                 sx={{textTransform:"lowercase", color:"white"}}>
                                                                 {FooterData.contacts.facebookPage}
                                                         </Button>   
                                                  </Grid>
                                           </Grid>
                                 </Container>
                        </Grid>
                        <Grid item xs={isSmallScreen ? 3 : isSmallScreen3 ? 4 : isSmallScreen2 ? 6 : 12}>
                              <Container>
                                        <Grid container
                                              direction="column"
                                              justifyContent={isSmallScreen2 ? "flex-start" : "center"}
                                              alignItems={isSmallScreen2 ? "flex-start" : "center"}
                                              spacing={2}>
                                              <Grid>
                                                    <Button variant="text" 
                                                            sx={{ color:"white", 
                                                                  textDecorationLine:"underline", 
                                                                  textDecorationColor:"white"}} >
                                                                 {FooterData.entreprise.title}
                                                    </Button>    
                                              </Grid>
                                              <Grid   >
                                                   <Button variant="text" 
                                                           onClick={() => navigate('/Ourteam')}  
                                                           startIcon={FooterData.entreprise.equipeIcon} 
                                                           sx={{textTransform:"lowercase", color:"white"}}>
                                                           {FooterData.entreprise.lienEquipe}
                                                   </Button>      
                                              </Grid>
                                              <Grid   >
                                                   <Button variant="text"
                                                           onClick={() => navigate('/Services')}  
                                                           startIcon={FooterData.entreprise.serviceIcon} 
                                                           sx={{textTransform:"lowercase", color:"white"}} >
                                                           {FooterData.entreprise.lienServices}
                                                   </Button>    
                                              </Grid>
                                              <Grid  >
                                                   <Button variant="text"
                                                           onClick={() => navigate('/Contact')}  
                                                           startIcon={FooterData.entreprise.carreerIcon} 
                                                           sx={{textTransform:"lowercase", color:"white"}}>
                                                           {FooterData.entreprise.lienCarrieres}
                                                   </Button>   
                                              </Grid>
                                              <Grid   >
                                                   <Button variant="text" 
                                                           onClick={() => navigate('/Ourteam')} 
                                                           startIcon={FooterData.entreprise.plusIcon} 
                                                           sx={{textTransform:"lowercase", color:"white"}}>
                                                           {FooterData.entreprise.lienValeurAjoutee}
                                                   </Button>     
                                              </Grid>
                                       </Grid>
                             </Container>
                       </Grid>
                       <Grid item xs={isSmallScreen ? 3 : isSmallScreen3 ? 4 : isSmallScreen2 ? 6 : 12}>
                            <Container>
                                       <Grid container
                                             direction="column"
                                             justifyContent={isSmallScreen2 ? "flex-start" : "center"}
                                             alignItems={isSmallScreen2 ? "flex-start" : "center"}
                                             spacing={2}>
                                             <Grid>
                                                    <Button variant="text" 
                                                            sx={{ color:"white", 
                                                                  textDecorationLine:"underline", 
                                                                  textDecorationColor:"white"}} >
                                                                 {FooterData.SAV.title}
                                                    </Button>    
                                              </Grid>   
                                              <Grid   >
                                                   <Button variant="text" 
                                                           onClick={() => navigate('/Blog')}
                                                           startIcon={FooterData.SAV.blogIcon} 
                                                           sx={{textTransform:"lowercase", color:"white"}}>
                                                           {FooterData.SAV.lienBlog}
                                                   </Button>   
                                             </Grid>
                                             <Grid   >
                                                  <Button variant="text"
                                                          onClick={() => navigate('/Expediteurs')} 
                                                          startIcon={FooterData.SAV.clientIcon} 
                                                          sx={{textTransform:"lowercase", color:"white"}} >
                                                          {FooterData.SAV.client}
                                                  </Button>   
                                             </Grid>
                                             <Grid  >
                                                  <Button variant="text" 
                                                          onClick={() => navigate('/Transporteurs')}
                                                          startIcon={FooterData.SAV.partnerIcon} 
                                                          sx={{textTransform:"lowercase", color:"white"}}>
                                                          {FooterData.SAV.partenaires}
                                                  </Button>   
                                             </Grid>
                                             <Grid   >
                                                  <Button variant="text" 
                                                          onClick={() => navigate('/Confidentialites')}
                                                          startIcon={FooterData.SAV.ruleIcon} 
                                                          sx={{textTransform:"lowercase", color:"white"}}>
                                                          {FooterData.SAV.politique}
                                                  </Button>   
                                             </Grid>
                                      </Grid>
                          </Container>
                   </Grid>
                   <Grid item xs={isSmallScreen ? 3 : isSmallScreen3 ? 4 : isSmallScreen2 ? 6 : 12}>
                        <Container>
                                   <Grid container
                                         direction="column"
                                         justifyContent={isSmallScreen2 ? "flex-start" : "center"}
                                         alignItems={isSmallScreen2 ? "flex-start" : "center"}
                                         spacing={4}>
                                         <Grid   >
                                              <Button variant="text"  
                                                      sx={{ color:"white", 
                                                            textDecorationLine:"underline", 
                                                            textDecorationColor:"white"}}>
                                                      {FooterData.Agences.title}
                                              </Button>   
                                         </Grid>
                                         <Grid   >
                                              <Button variant="text" 
                                                      startIcon={FooterData.Agences.agenceIcon} 
                                                      sx={{textTransform:"lowercase", color:"white"}}>
                                                      {FooterData.Agences.agence01}
                                              </Button>   
                                         </Grid>
                                         <Grid  >
                                              <Button variant="text" 
                                                      startIcon={FooterData.Agences.agenceIcon} 
                                                      sx={{textTransform:"lowercase", color:"white"}}>
                                                      {FooterData.Agences.agence02}
                                              </Button>   
                                         </Grid>
                                         <Grid   >
                                              <Button variant="text" 
                                                      startIcon={FooterData.Agences.agenceIcon} 
                                                      sx={{textTransform:"lowercase", color:"white"}}>
                                                      {FooterData.Agences.agence03}
                                              </Button>   
                                         </Grid>
                                  </Grid>
                      </Container>
               </Grid>
        </Grid>
        </Container>
             <FlexBetween fontStyle="italic">  
                        <Typography component='div'
                                    sx={{ flexGrow: 1, color:"black" }}
                                    fontSize = "clamp(12px, 14px, 16px)"
                                    textAlign="left"
                                       >
                                    {FooterData.Autor.autorword}   
                        </Typography>
                        <Typography component='div' 
                                    sx={{ flexGrow: 1, color:"black" }}
                                    fontSize = "clamp(12px, 14px, 16px)"
                                    textAlign="right"
                                       >
                                    {FooterData.Autor.autorSignature}   
                        </Typography>
             </FlexBetween>
        </Box>
    )
}

export default Footer;

