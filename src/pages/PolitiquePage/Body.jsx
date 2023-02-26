import MobileMenuBox from "../../components/MobileMenuBox";
import CssBaseline from '@mui/material/CssBaseline';
//import { color} from '../../theme';
import { Typography, Box, Container, useMediaQuery} from '@mui/material';
import {  useSelector } from "react-redux";
//import {useState} from 'react';
//import { useDispatch, useSelector } from "react-redux";


const Body = () => {

   // const background = color.gray.niveau20;
   // const [isCompact, setIsCompact] = useState(false);
 
    const isSmallScreen = useMediaQuery("(min-width: 1000px)");
    const isSmallScreen2 = useMediaQuery("(min-width: 600px)");
    //const isMobileMenuToggledState = useSelector((state) => state.UserReducer.isMobileMenuToggled);
    const isMobileMenuToggledState = useSelector((state) => state.persistedReducer.isMobileMenuToggled);
   // const backgroundcolor = color.blue.niveau100;
    const size = isSmallScreen2 ? "65%" : "90%";
        
        return(
          <Box position="relative" sx={{backgroundColor: "white", width:"100%", minHeight:"700px", marginTop:"90px"}} >
                   <CssBaseline />
                   <Container sx={{paddingTop: "50px", 
                                   paddingBottom: "50px",
                                   display:"flex",
                                   flexDirection:"column", 
                                   justifyContent:"center", 
                                   alignItems:"center",
                                   width:size }}>
                             <Typography variant="h4" text-align='center' 
                                         sx={{marginBottom:"30px", fontWeight:"bold"}}>
                                         Politique de Confidentialité TRANSAF SARL
                             </Typography>
                             <Typography variant="h5" text-align='center' 
                                         sx={{ fontWeight:"bold", marginBottom: "20px" }}>
                                         Introduction
                             </Typography>
                             <Typography variant="paragraph"  
                                         sx={{ marginBottom: "10px", textAlign:'justify' }}>
                                        <strong> TRANSAF SARL </strong> ce conforme aux Décret n°2012/1637/PM du 14 juin 2012 
                                        fixant les 
                                        modalités d'identification des abonnés et des terminaux, le Décret 
                                        n° 2013/0399/pm du 27 février 2013 fixant les modalités de protection des 
                                        consommateurs des services de communications électroniques et s'engage à ne 
                                        collecter que les données dont il a besoin pour vous assurer un service optimal, 
                                        à en assurer la confidentialité et la sécurité, y compris lorsque nous faisons 
                                        appel à des prestataires et à faciliter l'exercice de vos droits sur vos données.
                             </Typography>
                             <Typography variant="paragraph"  
                                         sx={{ marginBottom: "10px", textAlign:'justify' }}>
                                        La présente politique de confidentialité décrit les données personnelles que 
                                        nous recueillons, comment elles sont utilisées et vos droits à cet égard. 
                                        Elle s'applique à tout utilisateur qui accède à l'application et qui utilise 
                                        les services proposés sur l'application Nous nous réservons le droit de modifier 
                                        la présente politique de confidentialité à tout moment. La version la plus 
                                        actuelle de la présente politique régit notre utilisation de vos informations 
                                        et sera toujours disponible sur l'application ou sur demande auprès de la société
                                        <strong> TRANSAF SARL </strong>. Si nous devions apporter une modification 
                                        substantielle à cette 
                                         politique de confidentialité, nous nous engageons à vous la notifier via votre 
                                         adresse email.

                             </Typography>
                             <Typography variant="h5" text-align='center' 
                                         sx={{ fontWeight:"bold", marginBottom: "20px" }}>
                                         COLLECTE D'INFORMATION
                             </Typography>
                             <Typography variant="paragraph"  
                                         sx={{ marginBottom: "10px", textAlign:'justify' }}>
                                         Dans le cadre de l'utilisation de nos services et de votre navigation sur 
                                         notre application, Nous collectons plusieurs catégories de données dont vous 
                                         trouverez le détail ci-dessous. Ces données proviennent :
                                         <ul>
                                            <li>
                                                Des informations que vous nous communiquez lorsque vous vous inscrivez 
                                                sur notre application, ou lorsque vous échangez avec 
                                                <strong> TRANSAF SARL </strong>. 
                                                Ces informations personnelles sont :
                                                <ul>
                                                    <li>
                                                         Des données permettant votre identification (nom, prénom, 
                                                         email, mot de passe, code postal)
                                                    </li>
                                                    <li>
                                                         Des données sur votre véhicule (nom, et catégorie du véhicule, 
                                                         immatriculation)
                                                    </li>
                                                    <li>
                                                         Données permettant l'envoie des mails
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                 Du token d'identification généré par le serveur de 
                                                 <strong> TRANSAF SARL </strong>.< br/>
                                                 Il s'agit d'une liste de caractères uniques utilisée lors des 
                                                 communications avec le serveur pour vous identifier.
                                            </li>
                                            <li>
                                                 Des données de localisation <br />
                                                 Nous vous demandons l'autorisation pour collecter sur notre application
                                                  les données précises de localisation de votre mobile via le système 
                                                  d'autorisation que le système d'exploitation de votre mobile utilise. 
                                                  Si vous autorisez la collecte de ces données, vous pouvez revenir 
                                                  ultérieurement sur votre choix en changeant les paramètres de 
                                                  localisation de votre téléphone portable. Cependant, cela entrainera 
                                                  votre déconnexion de l'application.
                                            </li>
                                            <li>
                                                Des données de navigation (cookies et adresse IP). < br/>
                                                Nous utilisons des cookies pour améliorer l'accès à notre application et 
                                                l'expérience de l'utilisateur.
                                            </li>
                                         </ul>
                             </Typography>
                             <Typography variant="h5" text-align='center' 
                                         sx={{ fontWeight:"bold", marginBottom: "20px" }}>
                                         UTILISATION DES INFORMATIONS
                             </Typography>
                             <Typography variant="paragraph"  
                                         sx={{ marginBottom: "10px", textAlign:'justify' }}>
                                         Toutes les informations que nous recueillons auprès de vous peuvent être 
                                         utilisées pour :
                                         <ul>
                                             <li>
                                                  Personnaliser votre expérience et répondre à vos besoins individuels;
                                             </li>
                                             <li>
                                                  Fournir un contenu publicitaire personnalisé;
                                             </li>
                                             <li>
                                                   Améliorer notre site Web;
                                             </li>
                                             <li>
                                                  Améliorer le service et vos besoins de prise en charge;
                                             </li>
                                             <li>
                                                  Vous contacter par e-mail;
                                             </li>
                                             <li>
                                                  Vous soumettre à un concours, une promotion, ou une enquête.
                                             </li>
                                         </ul>
                             </Typography>
                             <Typography variant="h5" text-align='center' 
                                         sx={{ fontWeight:"bold", marginBottom: "20px" }}>
                                         DUREE DE CONSERVATION DES DONNEES
                             </Typography>
                             <Typography variant="paragraph"  
                                         sx={{ marginBottom: "10px", textAlign:'justify' }}>
                                        Nous conservons vos informations tant que votre compte reste actif, à moins 
                                        que vous ne demandiez leur suppression ou celle de votre compte. Dans certains 
                                        cas, nous pouvons conserver des informations vous concernant en raison de la 
                                        loi ou à d'autres fins, même si vous supprimez votre compte.
                             </Typography>
                             <Typography variant="paragraph"  
                                         sx={{ marginBottom: "10px", textAlign:'justify' }}>
                                         Ainsi, les données utilisées à des fins de prospection commerciale peuvent 
                                         être conservées pendant un délai de cinq ans à compter de la suppression de 
                                         votre compte.
                             </Typography>
                             <Typography variant="paragraph"  
                                         sx={{ marginBottom: "10px", textAlign:'justify' }}>
                                         Par ailleurs, les données permettant d'établir la preuve d'un droit ou d'un 
                                         contrat, ou conservées au titre du respect d'une obligation légale, peuvent 
                                         faire l'objet d'une politique d'archivage intermédiaire sous une durée 
                                         indéterminées.
                             </Typography>
                             <Typography variant="h5" text-align='center' 
                                         sx={{ fontWeight:"bold", marginBottom: "20px" }}>
                                         CONFIDENTIALITE DU COMMERCE EN LIGNE.
                             </Typography>
                             <Typography variant="paragraph"  
                                         sx={{ marginBottom: "10px", textAlign:'justify' }}>
                                         Nous sommes les seuls propriétaires des informations recueillis sur notre site. 
                                         Vos informations personnelles ne seront pas vendues, échangés, transférées, 
                                         ou données à une société pour n'importe quelle raison sans votre consentement.
                             </Typography>
                             <Typography variant="h5" text-align='center' 
                                         sx={{ fontWeight:"bold", marginBottom: "20px" }}>
                                         DIVULGATION A DES TIERS.
                             </Typography>
                             <Typography variant="paragraph"  
                                         sx={{ marginBottom: "10px", textAlign:'justify' }}>
                                        Nous ne vendons, et ne transférons pas vos informations personnelles à des tiers
                                         et cela ne comprend pas les tierce parties de confiance qui nous aident à 
                                         exploiter notre site web ou à mener nos affaires tant que ces parties 
                                         conviennent de garder ces informations confidentielles.
                             </Typography>
                             <Typography variant="paragraph"  
                                         sx={{ marginBottom: "10px", textAlign:'justify' }}>
                                         Nous pensons qu'il est nécessaire de partager des informations afin d'enquêter, 
                                         de prévenir ou de prendre des mesures concernant des activités illégales, 
                                         fraudes présumées, situations impliquant des menaces potentielles à la sécurité 
                                         physique de toute personne, violations de nos conditions d'utilisations, 
                                         ou quand la loi nous y contraint.
                             </Typography>
                             <Typography variant="h5" text-align='center' 
                                         sx={{ fontWeight:"bold", marginBottom: "20px" }}>
                                         PROTECTION DES INFORMATIONS
                             </Typography>
                             <Typography variant="paragraph"  
                                         sx={{ marginBottom: "10px", textAlign:'justify' }}>
                                         Nous mettons en œuvre une variété de mesures de sécurité pour préserver la 
                                         sécurité de vos informations personnelles. Seuls les employés qui ont besoin 
                                         d'effectuer un travail spécifique (par exemple la facturation ou le service à 
                                         la clientèle) ont accès aux informations personnelles identifiables.
                             </Typography>
                             <Typography variant="h5" text-align='center' 
                                         sx={{ fontWeight:"bold", marginBottom: "20px" }}>
                                         SE DESABONNER
                             </Typography>
                             <Typography variant="paragraph"  
                                         sx={{ marginBottom: "10px", textAlign:'justify' }}>
                                         Nous utiliserons l'adresse que vous fournirez pour vous envoyer des informations
                                          et mises à jour relatives pour vous fournir les nouvelles de TRANSAF SARL de 
                                          façon occasionnelle, des informations sur les produits liés … < br/>
                                         Si à n'importe quel moment vous souhaitez-vous désinscrire et ne plus recevoir 
                                         d'emails, des instructions de désabonnement détaillées vous seront communiquées 
                                         par mail.
                             </Typography>
                             <Typography variant="h5" text-align='center' 
                                         sx={{ fontWeight:"bold", marginBottom: "20px" }}>
                                         CONSENTEMENT
                             </Typography>
                             <Typography variant="paragraph"  
                                         sx={{ marginBottom: "10px", textAlign:'justify' }}>
                                         En utilisant le site de <strong> TRANSAF SARL </strong>, vous consentez 
                                         à notre politique de confidentialité.
                             </Typography>
                   </Container>
                   {!isSmallScreen && isMobileMenuToggledState && <MobileMenuBox />}
          </Box>
        )
    }
    
    export default Body;
