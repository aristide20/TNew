import { createSlice } from '@reduxjs/toolkit';
import * as api from "../api/index";

const initialState = {
    Immatriculation:"", 
    TypeVehicule:"",
    NomVehicule:"",
    Proprietaire:"",
    isReadytowork:true,
    courses:[],
    isWorkingNow: false,
    isDeleted: false,
    isValidate: false
}

const VehiculeSlice = createSlice({
    name:"vehicule",
    initialState,
    reducers: {
           setvehicule: (state, action) => {
                  state.Proprietaire = action.payload.Proprietaire;
                  state.contact = action.payload.contact;
                  state.Immatriculation = action.payload.Immatriculation;
                  state.TypeVehicule = action.payload.typeVehicule;
                  state.NomVehicule = action.payload.nomVehicule;
           },
           validateVehicule: (state) => {
                  state.isReadytowork = false
           },
           testValidation: (state, action) => {
                   if(action.payload.Proprietaire !== "") {
                      if(action.payload.Immatriculation !== "") {
                         if(action.payload.nomVehicule !== "") {
                               state.isValidate = true
                         } else {
                            state.isValidate = false
                         }
                      } else {
                        state.isValidate = false
                     }
                   }else {
                    state.isValidate = false
                 }
           },
           createVehicule: (state, action) => {
                try {
                    api.createCommand(action.payload).then((resp) => { state = {...state, ...resp.data}
                                                   console.log(state)}
                                          ).catch((error) => console.log(error))
                } catch (error) {
                    console.log(error)
                }
                 
           }
    }
})

export const { setVehicule, testValidation,  createVehicule } = VehiculeSlice.actions;
export default VehiculeSlice.reducer;