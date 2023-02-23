


export const color = {
    
    black: "000000",
    red: "#FF5370",
    green: "#2FD8B6",
    yellow: "#FFB64D",
    blue: "#03084d",
    dark: "#263544",
    white: "white",
    default: "#868686",
    tan: "#C1C0B4",
    blueGray : "#f2f7fb",
    gray: "#808080",
    textDefault: "000000",
    formText: "#495057",
    formBorder: "#ccc",
    formBorderFocus: "#4099FF",
    //light
    blueLight: "#4099FFAB",
    redLight: "#FF5370BB",
    greenLight: "#2FD8B6AB",
    yellowLight: "#FFB64DAB",
    darkLight: "#263544AB",
    defaultLight: "#868686AB",
    tanLight: "#C1C0B4AB",
    blueGrayLight : "#f2f7fbAB",
    grayLight: "#808080AB",
    button:{
        
    }
}

export const boxShadow = {
    up : `0px -2px 2px 1px ${color.gray}50`,
    down: `0px 2px 2px 1px ${color.gray}50`,
    full: `
      2px 2px 0px 1px ${color.gray}05,
      -2px -2px 0px 1px ${color.gray}05,
      2px -2px 0px 1px ${color.gray}05,
      -2px 2px 0px 1px ${color.gray}05,
      0px 2px 0px 1px ${color.gray}05,
      2px 0px 0px 1px ${color.gray}05,
      0px -2px 0px 1px ${color.gray}05,
      -2px 0px 0px 1px ${color.gray}05
      `,
    formFocus: `0px 0px 0px 0.2rem rgba(0, 123, 255, 0.25)`
}


export const font = {
    errorMEssage: "0.75em",
}

export const size ={
    height:{
        container: "100vh",
        footer: "50px",
        header: "70px",
        footerM: "",
        input: "30px",
    },
    width:{
        container: "100%",
        contentBoxFull: "100%",
        formGroup: "100%"
    },
    padding:{
        content : "2em",
        contentBox : "1em",
        formGroup: "1em",
    },
    gap:{
        formGroup: "1em",
    }
}





