//import { createTheme } from "@mui/material";

export const color = {
    gray:{
      niveau0: "#e8ebf1f8",
      niveau20: "#bfc1c5f8",
      niveau40: "#96989cf8",
      niveau60: "#62656bf8",
      niveau80: "#454950f8",
      niveau100: "#383a3df8"
    },
    blue:{ 
      niveau0: "#1414ee",
      niveau20: "#1616c7",
      niveau40: "#0a0aaf",
      niveau60: "#0e0e88",
      niveau80: "#1565c0",
      niveau100: "rgb(0, 100, 142)"},
    white:{ 
      niveau0: "#ffffff",
      niveau20: "#fffefe",
      niveau40: "#ededee",
      niveau60: "#d8d8d8",
      niveau80: "#dddde6",
      niveau100: "#000000"},
  
}

export const textFont = {
    primary: {
        fontFamily: ["Roboto", "sans-serif"].join(",")
    },
    text: {},
    menu: {},
}

/* const theme = createTheme({
  palette:{ 
  primary: {
    medium: color.blue.niveau80,
    secondary: color.blue.niveau100
  },
  secondary: {
    medium: color.gray.niveau80,
    secondary: color.gray.niveau100
  },
  main: {
    medium: color.white.niveau80,
    secondary: color.white.niveau100
  }
}})*/

/*Neska Orange, [11/02/2023 12:06]
import * as FaIcons from "react-icons/fa"
import * as BiIcons from "react-icons/bi"
import * as GiIcons from "react-icons/gi"
import * as GoIcons from "react-icons/go"
const navBar = [
    {
       id:0 ,
       title: "",
       menu: [
            {
                idMenu: 0,
                name: "Dashboard",
                link:"/",
                icon: <BiIcons.BiHomeAlt />,
                active: true,
                open: false,
                subMenu:  []
            }
       ]
    },
    {
       id: 1,
       title: "Administration",
       menu: [
            {
                idMenu: 1,
                name: "Structures",
                link:"",
                icon: <FaIcons.FaBuilding />,
                active: false,
                open: false,
                subMenu:  [
                    {
                        id: 0,
                        name: "Structure",
                        icon:<BiIcons.BiChevronRight/>,
                        link:"structure/structure",
                        active: false 
                    },
                    {
                        id: 1,
                        name: "Room",
                        icon:<BiIcons.BiChevronRight/>,
                        link:"structure/room",
                        active: false 
                    },
                    {
                        id: 2,
                        name: "Material",
                        icon:<BiIcons.BiChevronRight/>,
                        link:"structure/material",
                        active: false 
                    },
                    {
                        id: 3,
                        name: "Teller",
                        icon:<BiIcons.BiChevronRight/>,
                        link:"structure/teller",
                        active: false 
                    }
                ] 
            },
            {
                idMenu: 2,
                name: "Users",
                link:"",
                icon:<FaIcons.FaUsersCog />,
                active: false,
                open: false,
                subMenu:  [
                    {
                        id: 0,
                        name: "User",
                        icon:<BiIcons.BiChevronRight/>,
                        link:"user/user",
                        active: false 
                    },
                    {
                        id: 1,
                        name: "Patient",
                        icon:<BiIcons.BiChevronRight/>,
                        link:"user/patient",
                        active: false 
                    },
                    {
                        id: 2,
                        name: "Profile",
                        icon:<BiIcons.BiChevronRight/>,
                        link:"user/profile",
                        active: false 
                    },
                    {
                        id: 3,
                        name: "Workflow",
                        icon:<BiIcons.BiChevronRight/>,
                        link:"user/workflow",
                        active: false 
                    }
                ]
            }
       ]
    },
    {
       id: 2,
       title: "Cash",
       menu: [
            {
                idMenu: 3,
                name: "Payment method",
                link:"payment",
                icon:<FaIcons.FaMoneyCheck />,
                active: false, 
                open: false,
                subMenu:  []
            },
            {
                idMenu: 4,
                name: "Assurance",
                link:"assurance",
                icon:<FaIcons.FaHandHoldingMedical/>,
                active: false,
                open: false,
                subMenu:  [] 
            },
            {
                idMenu: 5,
                name: "Collection & Disbursment",
                link:"collection",
                icon:<FaIcons.FaMoneyBill />,
                active: false,
                open: false,
                subMenu:  [] 
            }
       ]
    },
    {
       id: 3,
       title: "Patient path",
       menu: [
            {
                idMenu: 6,
                name: "Exams",
                link:"exam",
                icon:<FaIcons.FaBriefcaseMedical />,
                active: false,
                open: false,
                subMenu:  [] 
            },
            {
                idMenu: 7,
                name: "Prescrition",
                link:"prescription",
                icon:<FaIcons.FaFileMedical />,
                active: false,
                open: false,
                subMenu:  [] 
            },
            {
                idMenu: 8,
                name: "Consultation",
                link:"consultation",
                icon:<GiIcons.GiMedicalThermometer />,
                active: false,
                open: false,
                subMenu:  [] 
            },
            {
                idMenu: 9,
                name: "Programmation",
                link:"programmation",
                icon:<GoIcons.GoCalendar />,
                active: false,
                open: false,
                subMenu:  [] 
            }
       ]
    },
]

export default navBar*/