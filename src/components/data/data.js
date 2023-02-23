import logo from "../../assets/logo.png";
import DraftsIcon from '@mui/icons-material/Drafts';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import { Close } from "@mui/icons-material";
//import {color, textFont} from "../../theme";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import MailIcon from '@mui/icons-material/Mail';
//import BusinessIcon from '@mui/icons-material/Business';
import GroupsIcon from '@mui/icons-material/Groups';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PostAddIcon from '@mui/icons-material/PostAdd';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import HailIcon from '@mui/icons-material/Hail';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import RuleIcon from '@mui/icons-material/Rule';
import PlaceIcon from '@mui/icons-material/Place';
import image01 from "../../assets/dumper.png";
import image02 from "../../assets/pelleteuse.png";
import image03 from "../../assets/niveleuse.png";
import image04 from "../../assets/mini-chargeuse-1.png";
import image05 from "../../assets/tractopelle.png";
import image06 from "../../assets/bulldozer.png";
import image07 from "../../assets/chargeuse.png";
import image08 from "../../assets/decapeuse-scraper.png";
import image09 from "../../assets/rouleau-compresseur.png";
import camion01 from "../../assets/camionAmpliroll.jpg";
import camion02 from "../../assets/camionBenne30t.jpg";
import camion03 from "../../assets/camionCalabrese.jpg";
import camion04 from "../../assets/camionBenneBasculante.jpg";
import camion05 from "../../assets/camionCiterne.jpg";
import camion06 from "../../assets/camionPlateau.jpg";
import camion07 from "../../assets/camionPorteChar.jpg";
import camion08 from "../../assets/camionRemorque.jpg";
import camion09 from "../../assets/camionGrumier.jpg";
import camion10 from "../../assets/camionToupie.jpg";




export const camionsData = {
    camion1: {nom: "Camion citerne",
               image: camion05,
               usage: "Le camion-citerne, avec sa cuve, est utilisé pour transporter des liquides ou encore des produits gazeux pour l'industrie chimique et agroalimentaire notamment. Le camion-citerne peut avoir une cuve très différente suivant les produits qu'il transporte."
            },
    camion2: {nom: "Camion benne 30t",
               image: camion02,
               usage: "Que ce soit pour transporter des outils, des matériaux ou évacuer les déchets d'un chantier chez un client, un camion benne est toujours utile."
            },
    camion3: {nom: "Camion grumier  ",
               image: camion09,
               usage: "Un grumier est un camion poids lourd utilisé dans le cadre du transport du bois, notamment des grumes"},
    camion4: {nom: "Camion Ampliroll",
               image: camion01,
               usage: "Un Ampliroll est un camion doté d'un système de bras de levage hydraulique doté d'un crochet qui permet de charger et de déposer des caisses, caissons, berces…."
            },
    camion5: {nom: "camion Plateau ",
               image: camion06,
               usage: "Ce poids lourd est un camion de transport destiné à transporter des produits volumineux, voire de grande longueur (poutre, automobiles...). Des ridelles disposées sur celui-ci permettent de mieux maintenir la marchandise."
            },
    camion6: {nom: "Camion porte char",
               image: camion07,
               usage: "Le camion porte char est nécessaire pour le transport des charges non conventionnelles. Effectivement, les marchandises à transporter ont un aspect très particulier et un poids supérieur à la normale"
            },
    camion7: {nom: "Camion toupie  ou bétonnière",
               image: camion10,
               usage: "Un camion malaxeur ou bétonnière portée, appelé communément camion toupie, désigne un malaxeur de béton monté sur un camion ou une remorque destiné à livrer un mélange de béton de ciment frais et homogène1. Le camion est pour l'essentiel pourvu d'un réservoir rotatif en forme de toupie et incliné suivant un axe presque horizontal"
            },
    camion8: {nom:"camion calabrese",
               image: camion03,
               usage: "Si vous réalisez des chantiers importants avec une grande quantité de matériel ou de déchets à transporter, c'est Le camion qu'il vous faut. En effet, ce véhicule comme son nom l'indique est un semi-remorque qui tracte une benne. Sa capacité de charge est donc la plus élevée."
            },
    camion9: {nom: "camion Benne Basculante",
               image: camion04,
               usage: "La caisse de chargement du camion à benne basculante contrôlée par le mécanisme de levage hydraulique peut être démontée ou inclinée à un angle pour décharger la cargaison par elle-même ou par niveau. Principalement utilisé pour transporter des matériaux en vrac (tels que du sable, de la terre, des minéraux, etc.) ou des matériaux complets en vrac, principalement utilisés dans les mines, les chantiers de construction, etc. Il peut être divisé en camions à benne spéciaux, camions à benne ordinaires et décharge minière camions."
            },
    camion10: {nom: "camion Remorque conteneur",
               image: camion08,
               usage: "Elles servent à transporter de la marchandise ou du matériel sur de longues ou courtes distances. La grandeur de la remorque et de la semi-remorque peuvent varier, mais doivent toutefois respecter les normes du Code de la route. Selon leur grosseur"
            },        
    }


export const AdminNavBarData = {
    label01:"Commandes",
    label02:"Clients",
    label03:"Partenaires",
    label04:"Logout",
    logo: logo,
    Icon1: <AccountCircleIcon />
}

export const NavBarUserData = {
    label01: "commandes",
    label02: "Logout",
    label03: "Devenir Partenaire",
    label04: "Liste vehicules",
    label05: "Blog",
    label06: "profile"
}

export const NavBarData = {
    logo: logo,
    logoName: "Transport & Services d'Afrique",
    largeBoxMenu: {
        label01: "A Propos de Nous",
        label02: "Expediteurs",
        label03: "Transporteurs",
        label04: "BTP",
        label05: "Blog",
        label06Icon: <DraftsIcon />,
        label07Icon: <AccountCircleIcon />,
        label08: "Commander",
    },
    smallBoxMenu: {
        Icon: <MenuIcon />,
        close: <Close />,
        label01: "A Propos de Nous",
        label02: "Expediteurs",
        label03: "Transporteurs",
        label04: "BTP",
        label05: "Blog",
        label06: "Ecrivez-Nous",
        label06Icon: <DraftsIcon />,
        label07: "connexion/Inscription",
        label07Icon: <AccountCircleIcon />,
        label08: "Commander",
    }
}

export const FooterData = {
    logoTitle: {
        logo: logo,
        title: NavBarData.logoName
    },
    contacts: {
        title: "Nos Contacts",
        logo: logo,
        logoFacebook: <FacebookIcon />,
        logoAppel: <PhoneInTalkIcon />,
        logoMail: <MailIcon />,
        logoWhatsapp: <WhatsAppIcon />,
        contactAppel: "+237 620 79 46 61",
        contactWhatsapp: "+237 651 21 87 97",
        contactEmail: "infos@transaf.com",
        facebookPage: "Transaf/Facebook"
     },
     entreprise: {
        title: "Notre Entreprise",
        lienEquipe: "Notre Equipe dynamique",
        equipeIcon: <GroupsIcon />,
        lienServices: "Nos Services",
        serviceIcon: <MiscellaneousServicesIcon />,
        lienValeurAjoutee: "Notre valeur Ajoutee",
        plusIcon: <PostAddIcon />,
        lienCarrieres: "Nos Carrieres",
        carreerIcon: <GroupAddIcon />
     },
     SAV: {
        title: "Services Clientele",
        lienBlog: "Transaf Blog",
        blogIcon: <Diversity2Icon />,
        client: "Espace Clients",
        clientIcon: <InsertEmoticonIcon />,
        partenaires: "Espace Partenaires",
        partnerIcon: <HailIcon />,
        politique: "Politique de Confidentialite",
        ruleIcon: <RuleIcon />
     },
     Agences: {
        title: "Nos Agences",
        agenceIcon: <PlaceIcon/>,
        agence01: "Douala- Cameroun",
        agence02: "Bientot en RCA & au Tchad",
        agence03: "Guinee , Gabon et Congo"
     },
     Autor: {
        autorword: "Copyright ©2023 All rights reserved",
        autorSignature: "Powered by KemmaarSolutions/Racine"
     }

}



export const BTP = {
    btp01: {
        nom: "La chargeuse",
        image: image07,
        usage: "La chargeuse, ou le chargeur, qui fait partie de la catégorie des engins de terrassement, est l’un des véhicules de chantier les plus couramment utilisés. Elle peut être sur pneus ou sur chenilles et est pourvue d’un large godet sur l’avant pouvant pivoter et effectuer des mouvements verticaux. À l’aide de cette benne, la chargeuse peut transporter une grande quantité de matériaux comme du gravier, de la terre ou encore des déchets. On l’utilise le plus souvent pour déblayer, remblayer ou terrasser un terrain, mais aussi pour des travaux de manutention."
    },
    btp02: {
        nom: "La mini-chargeuse",
        image: image04,
        usage: ""
    },
    btp03: {
        nom: "La pelleteuse",
        image: image02,
        usage: "La pelle hydraulique, ou pelleteuse, est l’engin de chantier polyvalent par excellence. Elle peut tout faire ou presque : creuser et déblayer le sol, déplacer des matériaux, niveler un terrain, et extraire des matériaux. Cette machine est utile aussi bien pour les chantiers d’assainissement, de terrassement que de forage et de démolition. La pelleteuse se reconnaît par son long bras composé d’un godet, d’une flèche et d’un balancier, et par sa tourelle pivotante à 360°. Certains modèles sont montés sur un châssis à pneus et d’autres à chenilles. Comme pour la chargeuse, il existe aussi des pelleteuses très compactes, que l’on appelle alors mini-pelle."
    },
    btp04: {
        nom: "La/le tractopelle",
        image:image05,
        usage: "À mi-chemin entre la chargeuse et la pelleteuse, le (ou la) tractopelle combine les fonctions de ces deux véhicules ; on l’appelle d’ailleurs parfois chargeuse-pelleteuse. Très versatile, cet engin de chantier possède ainsi une benne sur le devant et une pelle articulée à l’arrière.Il est plutôt adapté aux petits chantiers, bien que cela varie suivant ses dimensions et le volume de sa pelle. Son usage concerne ainsi les travaux d’excavation, de remblayage, de manutention et de creusement de tranchée."
    },
    btp05: {
        nom: "Le bulldozer ",
        image: image06,
        usage: "Très utile au nivellement des terrains, le bulldozer (ou bouteur), est une sorte de puissant tracteur monté sur des roues ou des chenilles. Il est équipé d’une puissante lame frontale qui se manipule au moyen de deux bras articulés.En position basse, elle s’abaisse afin de racler le sol et pousser des matériaux. En position haute, la lame se relève et sert dans ce cas au transport. Le bulldozer aide également au déboisage des surfaces végétales et permet de pousser un scraper afin de faciliter l’extraction des matériaux."
    },
    btp06: {
        nom: "Le scraper (décapeuse)",
        image: image08,
        usage: "La décapeuse, ou scraper, joue un rôle majeur dans la réalisation des travaux de terrassement et d’arasement des sols, et plus particulièrement dans l’extraction de matériaux meubles. Cet engin de chantier est muni d’une grande benne (ou caisse), elle-même dotée d’un tiroir extracteur, qui s’abaisse et s’enfonce dans le sol. En général, le scraper s’utilise de pair avec le bulldozer qui le pousse afin de lui fournir davantage d’énergie."
    },
    btp07: {
        nom: "Le rouleau compresseur ",
        image:image09,
        usage: "Avec son cylindre géant fixé à l’avant, le rouleau compresseur (ou compacteur) est immédiatement reconnaissable sur les chantiers du bâtiment. Très lourd, il permet de lisser un terrain en compressant des couches de matériaux à entre elles grâce à l’émission de vibrations.On le nomme un “tandem” lorsqu’il possède deux rouleaux, l’un à l’avant et l’autre à l’arrière de l’engin. Il en existe également de taille plus modeste pour les petites surfaces, que l’on appelle des compacteurs à plaque vibrante."
    },
    btp08: {
        nom: "Le dumper",
        image: image01,
        usage: "Le dumper, de l’anglais “déverser”, permet donc de transporter des matériaux non conditionnés (gravats, terre, sable…) puis de les décharger à un autre endroit. Cet engin de chantier se présente sous la forme d’un véhicule motorisé monté sur 4 roues ou sur chenilles et équipé d’une benne à basculement rotatif sur l’avant. Il peut être rigide ou articulé.Certains modèles disposent d’un godet d’auto-chargement ; pour la plupart cependant, le chargement doit se faire à l’aide d’un autre engin, souvent une pelleteuse ou une mini-pelle. On confond beaucoup le dumper avec le tombereau, une machine très similaire mais dont la benne est en fait située à l’arrière."
    },
    btp09: {
        nom: "La niveleuse",
        image: image03,
        usage: "La vocation d’une niveleuse, comme son nom l’indique, est de niveler les couches de matériaux sur un sol ou sur une chaussée. Elle s’arme pour cela d’une grande lame pivotante, dont on peut régler la hauteur suivant la nature de la surface.La niveleuse comporte 6 roues, quatre à l’arrière et deux sur l’avant, et parfois des dents métalliques pour mieux labourer le terrain. Pour de meilleures performances, il est de temps en temps nécessaire de l’utiliser en association avec un compacteur."
    },
    btp10: {
        nom: "",
        image: "",
        usage: ""
    },
}

