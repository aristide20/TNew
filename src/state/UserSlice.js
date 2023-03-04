import { createSlice } from '@reduxjs/toolkit';
//import * as api from "../api/index";
				
const initialState = { 
	user:null,
	loggedIn: 0,
	commandes:[],
	vehicules:[],
	isMobileMenuToggled: false,
	loginStatut: false,
	loginError: false,
	loginButton: false
}
				
const UserSlice = createSlice({
				      name: "user",
					  initialState,
					  reducers: {
					         setLogin: (state, action) => { 
								state.user = action.payload;
								//state.token = action.payload.token;
							},
							setLogout: (state ) => { 
								state.user = null;
							},
							setLoggedIn: (state, action) => {
								state.loggedIn = action.payload;
							},
							loginStatut: (state, action) => { state.loginStatut=action.payload;},
							loginSuccess: (state) => { state.loginStatut = true;
							                          state.loginError= false },
							loginError: (state) => { state.loginStatut = true;
								                     state.loginError= true},
							testRegister: (state, action) => {
                                if(action.payload.user.fullName !== "") {
									if(action.payload.user.phoneNumber !== "") {
										if(action.payload.user.email !== "") {
											if(action.payload.user.password !== "") {
												if(action.payload.user.isPartner) {
													if(action.payload.vehicule.TypeVehicule !== "") {
														if(action.payload.vehicule.NomVehicule !== "") {
															if(action.payload.vehicule.Proprietaire !== "") {
																state.loginButton = true
															}
															else { state.loginButton = false }
														}
														else { state.loginButton = false }
													}
												} else {
													state.loginButton = true
												}
											}
											else { state.loginButton = false }
										}
										else { state.loginButton = false }
									}
									else { state.loginButton = false }
								}
								else { state.loginButton = false }
							},
							testLogin: (state, action) => {
								if(action.payload.email !== "") {
									if(action.payload.password !== "") {
										state.loginButton = true
									}
									else { state.loginButton = false }
								}
								else { state.loginButton = false }
							},
                             makeCommand: (state, action) => { 
								let tabCommandes = state.commandes
								tabCommandes.push(action.payload) ;
								state.commandes = tabCommandes;
								if(state.user) {
									try {
										//const AllCommandes = api.FetchCommands()
										//console.log(AllCommandes);
									} catch (error) {
										
									}
								}
							},
							 getCommands: (state, action) => {
									/* api.fetchCommands().then(
										(resp) => { state.commandes = resp.data.commandes;
											        console.log(state.commandes)
											        //console.log(resp.data);
												    // var data = resp.data.commandes;
													//console.log(data);
													//dispatch(getCommands(data))
													 })*/
								
								
							         },
                             deleteCommand: (state) => { 

							 },
                             modifyCommand: (state, action) => { 
								if(state.user){
									if(state.user.commandes) {
										 state.user.commandes = action.payload.commandes;
									}
									else {
										console.log("No command to modify")
									}
								}
								else {
									console.error("user commands don't exist :(")
								}
								
							},
							 AddVehicule: (state, action) => { 
								let data = action.payload.Immatriculation;
								let tab = state.vehicules;
								tab.push(data);
								state.vehicules = tab;
							},
							 deleteVehicule: (state) => { 

							 },
							 updateVehicule: (state, action) => { 
								if(state.user){
									if(state.user.vehicule) {
										 state.user.vehicule = action.payload.vehicule;
									}
									else {
										console.log(" the vehicule doesn't exist")
									}
								}
								else {
									console.error("user vehicule don't exist :(")
								}
							},
							setIsMobileMenuToggled: (state) => { state.isMobileMenuToggled = !state.isMobileMenuToggled }
					  }
				})
				
export const { setLogin, 
	           setLogout, 
			   makeCommand,  
			   deleteCommand,
			   getCommands, 
			   modifyCommand,
			   setLoggedIn, 
			   updateVehicule, 
			   AddVehicule,
			   testRegister,
			   testLogin,
			   loginStatut,
			   loginSuccess,
			   loginError,
			   setIsMobileMenuToggled} = UserSlice.actions;
export default UserSlice.reducer;