import { createSlice } from '@reduxjs/toolkit';
import * as api from "../api/index";

const initialState = {
    commanditaire: "",
    contact: "",
    villeDepart: "",
    lieuDepart:"",
    jourDepart: "",
    heureDepart: "",
    villeArrivee:"",
    lieuArrivee: "",
    jourArrivee:"",
    heureArrivee: "",
    typeVehicule:"",
    nomVehicule:"",
    isEnCours: false,
    isDone: false,
    isEnAttente: false,
    isAvorted: false
}

const CommandSlice = createSlice({
    name:"commande",
    initialState,
    reducers: {
           setCommand: (state, action) => {
                  state.commanditaire = action.payload.commanditaire;
                  state.contact = action.payload.contact;
                  state.villeDepart = action.payload.villeDepart;
                  state.villeArrivee = action.payload.villeArrivee;
                  state.jourDepart = action.payload.jourDepart;
                  state.typeVehicule = action.payload.typeVehicule;
                  state.nomVehicule = action.payload.nomVehicule;
           },
           validateCommande: (state) => {
                  state.isEnAttente = false
           },
           testValidation: (state, action) => {
               if(action.payload.contact !== "") {
                   if(action.payload.villeDepart !== "") {
                      if(action.payload.villeArrivee !== "") {
                         if(action.payload.nomVehicule !== "") {
                               state.isEnAttente = true
                         } else {
                            state.isEnAttente = false
                         }
                      } else {
                        state.isEnAttente = false
                     }
                   }else {
                    state.isEnAttente = false
                 }
               }else {
                state.isEnAttente = false
             }
           },
           createCommand: (state, action) => {
                try {
                    api.createCommand(action.payload)
                } catch (error) {
                    console.log(error)
                }
                 
           }
    }
})

export const { setCommand, testValidation,  createCommand } = CommandSlice.actions;
export default CommandSlice.reducer;