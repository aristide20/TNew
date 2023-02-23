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
    const isMobileMenuToggledState = useSelector((state) => state.UserReducer.isMobileMenuToggled);
   // const backgroundcolor = color.blue.niveau100;
    const size = isSmallScreen2 ? "65%" : "90%";
        
        return(
          <Box position="relative" sx={{backgroundColor: "white", width:"100%", minHeight:"700px"}} >
                   <CssBaseline />
                   <Container sx={{paddingTop: "50px", 
                                   paddingBottom: "50px",
                                   display:"flex",
                                   flexDirection:"column", 
                                   justifyContent:"center", 
                                   alignItems:"center",
                                   width:size }}>
                             <Typography variant="h5" text-align='center' 
                                         sx={{marginBottom:"30px"}}>
                                         Regles de Confidentialite TRANSAF
                             </Typography>
                             <Typography variant="h6" text-align='center' 
                                         sx={{ fontWeight:"bold", marginBottom: "20px" }}>
                                         Introduction
                             </Typography>
                             <Typography variant="paragraph"  
                                         sx={{ marginBottom: "10px", textAlign:'justify' }}>
                                         La protection de vos données personnelles est importante pour nous. 
                                         Nous nous engageons à ne collecter que les données dont nous avons besoin 
                                         pour vous assurer un service optimal, à en assurer la confidentialité et 
                                         la sécurité, y compris lorsque nous faisons appel à des prestataires et à 
                                         faciliter l’exercice de vos droits sur vos données.
                             </Typography>
                             <Typography variant="paragraph"  
                                         sx={{ marginBottom: "10px", textAlign:'justify' }}>
                                         Nous respectons la loi du n° 2013-450 du 19 juin 2013 relative à la protection 
                                         des données à caractère personnel.
                             </Typography>
                             <Typography variant="paragraph" 
                                         sx={{ marginBottom: "10px", textAlign:'justify'  }}>
                                         La présente politique de confidentialité décrit les données personnelles que 
                                         nous recueillons, comment elles sont utilisées et vos droits à cet égard. 
                                         Elle s'applique à tout utilisateur qui accède à l'application et qui utilise 
                                         les services proposés sur l'application
                             </Typography>
                             <Typography variant="paragraph"  
                                         sx={{ marginBottom: "10px", textAlign:'justify' }}>
                                         Nous nous réservons le droit de modifier la présente politique de 
                                         confidentialité à tout moment. La version la plus actuelle de la présente 
                                         politique régit notre utilisation de vos informations et sera toujours 
                                         disponible sur l’application ou sur demande auprès de TRANSAF.
                             </Typography>
                             <Typography variant="paragraph"
                                         sx={{ marginBottom: "10px", textAlign:'justify' }}>
                                         Si nous devions apporter une modification substantielle à cette politique 
                                         de confidentialité, nous nous engageons à vous la notifier via votre adresse 
                                         email.
                             </Typography>
                             <Typography variant="h6" text-align='center' 
                                         sx={{ fontWeight:"bold", marginBottom: "20px" }}>
                                         RESPONSABLE DE TRAITEMENT DE DONNEES
                             </Typography>
                             <Typography variant="paragraph"  
                                         sx={{ marginBottom: "10px", textAlign:'justify' }}>
                                         TRANSAF <br />
                                         Société qnonyme à responsabilité limité <br />
                                         Siege social: Douala, Camroun <br />
                                         Representée par Monsieur Charles, Directeur Général 
                             </Typography>
                             <Typography variant="h6" text-align='center' 
                                         sx={{ fontWeight:"bold", marginBottom: "20px" }}>
                                         LES DONNEES QUE NOUS COLLECTONS
                             </Typography>
                             <Typography variant="paragraph"  
                                         sx={{ marginBottom: "10px", textAlign:'justify' }}>
                                         Dans le cadre de l’utilisation de nos services et de votre navigation 
                                         sur notre application, Transaf collecte plusieurs catégories de données 
                                         dont vous trouverez le détail ci-dessous. Ces données proviennent :
                             </Typography>
                             <Typography variant="paragraph"  
                                         sx={{ marginBottom: "10px", textAlign:'justify' }}>
                                         <ul> 
                                             <li>
                                                  Des informations que vous nous communiquez lorsque vous vous 
                                                  inscrivez sur notre application, ou lorsque vous échangez avec 
                                                  TRANSAF. Ces informations personnelles sont :
                                                  <ul> 
                                                      <li>
                                                          Des données permettant votre identification (nom, prénom, email, mot de passe, 
                                                          code postal)
                                                      </li>
                                                      <li>
                                                           Des données sur votre véhicule (nom, et catégorie du véhicule, immatriculation)
                                                      </li>
                                                      <li>
                                                           Données permettant l'envoie des mails
                                                      </li>
                                                  </ul>
                                             </li>
                                             <li>
                                                  Du token d'identification généré par le serveur TRANSAF. <br />
                                                  Il s'agit d'une liste de caractères uniques utilisée lors des 
                                                  communications avec le serveur pour vous identifier.
                                             </li>
                                             <li>
                                                  Des données de localisation. <br />
                                                  Nous vous demandons l'autorisation pour collecter sur notre application 
                                                  les données précises de localisation de votre mobile via le système 
                                                  d'autorisation que le système d'exploitation de votre mobile utilise. 
                                                  Si vous autorisez la collecte de ces données, vous pouvez revenir 
                                                  ultérieurement sur votre choix en changeant les paramètres de localisation 
                                                  de votre téléphone portable. Cependant, cela entrainera votre déconnexion 
                                                  de l'application.
                                             </li>
                                             <li>
                                                 Des données de navigation (cookies et adresse IP). <br />
                                                 Nous utilisons des cookies pour améliorer l'accès à notre application 
                                                 et l'expérience de l'utilisateur.
                                             </li>
                                         </ul>
                             </Typography>
                             <Typography variant="h6" text-align='center' 
                                         sx={{ fontWeight:"bold", marginBottom: "20px" }}>
                                         DUREE DE CONSERVATION DES DONNEES
                             </Typography>
                             <Typography variant="paragraph"  
                                         sx={{ marginBottom: "10px", textAlign:'justify' }}>
                                         TRANSAF conserve vos informations tant que votre compte reste actif, à moins 
                                         que vous ne demandiez leur suppression ou celle de votre compte. Dans 
                                         certains cas, nous pouvons conserver des informations vous concernant en 
                                         raison de la loi ou à d'autres fins, même si vous supprimez votre compte.
                             </Typography>
                             <Typography variant="paragraph"  
                                         sx={{ marginBottom: "10px", textAlign:'justify' }}>
                                         Ainsi, les données utilisées à des fins de prospection commerciale peuvent 
                                         être conservées pendant un délai de cinq ans à compter de la suppression 
                                         de votre compte.
                             </Typography>
                             <Typography variant="paragraph"  
                                         sx={{ marginBottom: "10px", textAlign:'justify' }}>
                                         Par ailleurs, les données permettant d'établir la preuve d'un droit ou d'un 
                                         contrat, ou conservées au titre du respect d'une obligation légale, peuvent 
                                         faire l'objet d'une politique d'archivage intermédiaire sous une durée 
                                         indéterminées.
                             </Typography>
                             <Typography variant="h6" text-align='center' 
                                         sx={{ fontWeight:"bold", marginBottom: "20px" }}>
                                         FINALITE
                             </Typography>
                             <Typography variant="paragraph"  
                                         sx={{ marginBottom: "10px", textAlign:'justify' }}>
                                         TRANSAF procède au traitement de vos données à caractère personnel pour des 
                                         finalités déterminées, explicites et légitimes.
                             </Typography>
                             <Typography variant="paragraph"  
                                         sx={{ marginBottom: "10px", textAlign:'justify' }}>
                                         En particulier, ces données sont destinées à :
                                         <ul>
                                            <li>
                                                 La création et la gestion de votre compte ;
                                            </li>
                                            <li>
                                                 L'utilisation de nos services ;
                                            </li>
                                            <li> 
                                                Vous adresser des communications pertinentes et adaptées à vos besoins 
                                                directement en lien avec les services du site ;
                                            </li>
                                            <li>
                                                Sécuriser le site ainsi que les données et échanges intervenant sur le 
                                                site ;
                                            </li>
                                            <li>
                                                Faire évoluer nos services pour vous offrir de nouvelles fonctionnalités et nous 
                                                adapter à vos besoins ;
                                            </li>
                                            <li>
                                                Communiquer avec vous ;
                                            </li>
                                         </ul>
                             </Typography>
                             <Typography variant="h6" text-align='center' 
                                         sx={{ fontWeight:"bold", marginBottom: "20px" }}>
                                         SECURITE DES DONNEES
                             </Typography>
                             <Typography variant="paragraph"  
                                         sx={{ marginBottom: "10px", textAlign:'justify' }}>
                                         Kamtar met en œuvre les mesures techniques et organisationnelles appropriées 
                                         afin de garantir la sécurité, la confidentialité, l'intégrité et la disponibilité 
                                         des services et protéger les données contre la destruction, la perte, l'altération, 
                                         la divulgation non autorisée de données à caractère personnel transmises, conservées 
                                         ou traitées d'une autre manière, ou l'accès non autorisé à de telles données.
                             </Typography>
                             <Typography variant="paragraph"  
                                         sx={{ marginBottom: "10px", textAlign:'justify' }}>
                                         Kamtar s'engage à mettre en œuvre tous les moyens disponibles pour assurer la 
                                         sécurité et la confidentialité de ces données, en particulier :
                                         <ul>
                                            <li>
                                                 Nous chiffrons la plupart de nos services à l'aide du protocole https pour les 
                                                 applications web ;
                                            </li>
                                            <li>
                                                L'accès à votre compte se fait au moyen d'un identifiant et d'un mot de passe sécurisé ;
                                            </li>
                                            <li>
                                                L'accès aux données personnelles est strictement réservé aux salariés 
                                                et filiales de Kamtar qui ont besoin d'y accéder afin de les traiter en 
                                                notre nom. Ces personnes sont soumises à de strictes obligations de 
                                                confidentialité.
                                            </li>
                                         </ul>
                             </Typography>
                             <Typography variant="h6" text-align='center' 
                                         sx={{ fontWeight:"bold", marginBottom: "20px" }}>
                                         LES DROITS DES UTILISATEURS
                             </Typography>
                             <Typography variant="paragraph"  
                                         sx={{ marginBottom: "10px", textAlign:'justify' }}>
                                         Chaque fois que Kamtar traite des Données Personnelles, elle prend toutes les 
                                         mesures raisonnables pour s'assurer de l'exactitude et de la pertinence 
                                         celles-ci au regard des finalités pour lesquelles Kamtar les traites.
                             </Typography>
                             <Typography variant="paragraph"  
                                         sx={{ marginBottom: "10px", textAlign:'justify' }}>
                                         Conformément à la réglementation ivoirienne en vigueur, les Utilisateurs de 
                                         Transaf transport disposent des droits suivants :
                                         <ul>
                                            <li>
                                                Droit d'accès et de rectification, de mise à jour, de complétude des données des 
                                                Utilisateurs ;
                                            </li>
                                            <li>
                                                Droit de verrouillage ou d'effacement des données des Utilisateurs à 
                                                caractère personnel, lorsqu'elles sont inexactes, incomplètes, équivoques, 
                                                périmées, ou dont la collecte, l'utilisation, la communication ou la 
                                                conservation est interdite ;
                                            </li>
                                            <li>
                                                Droit à la limitation du traitement des données des Utilisateurs ;
                                            </li>
                                            <li>
                                                Droit d'opposition au traitement des données des Utilisateurs ;
                                            </li>
                                         </ul>
                             </Typography>
                             <Typography variant="paragraph"  
                                         sx={{ marginBottom: "10px", textAlign:'justify' }}>
                                         Si l'Utilisateur souhaite savoir comment Kamtar utilise ses Données Personnelles,
                                         demander à les rectifier ou s'oppose à leur traitement, l'Utilisateur peut 
                                         contacter Kamtar par courrier électronique à l'adresse suivante : 
                                         infos@transaf.com. Dans ce cas, l'Utilisateur doit indiquer les Données Personnelles
                                          qu'il souhaiterait que Kamtar corrige, mette à jour ou supprime, en s'identifiant 
                                          de manière précise avec une copie d'une pièce d'identité (carte d'identité ou 
                                          passeport) ou tout autre élément permettant de justifier de son identité. 
                                          Les demandes de suppression de Données Personnelles seront soumises aux obligations 
                                          qui sont imposées à Kamtar par la loi, notamment en matière de conservation ou 
                                          d'archivage des documents. Enfin, les Utilisateurs de Kamtar transport peuvent 
                                          déposer une réclamation auprès des autorités de contrôle.
                             </Typography>
                   </Container>
                   {!isSmallScreen && isMobileMenuToggledState && <MobileMenuBox />}
          </Box>
        )
    }
    
    export default Body;
