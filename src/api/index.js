import axios from 'axios';
//import { getCommands } from '../state/UserSlice';
//import { useDispatch } from 'react-redux';
//import { useEffect } from 'react';

const url = 'http://localhost:3005/api/v1/transaf/auth/register';
const url2 = 'http://localhost:3005/api/v1/transaf/auth/login';
const url3 = 'http://localhost:3005/api/v1/transaf/vehicules';
const url4 = 'http://localhost:3005/api/v1/transaf/commandes';
const url5 = 'http://localhost:3005/api/v1/transaf/admin/users';





export const registerUser = async (userData) => { await axios.post(url, userData) }

export const loginUser = async (userData) => { return await axios.post(url2, userData) }

export const fetchUsers = async () => { 
         const {data} = await axios.get(url5, { headers: {Accept: 'application/json',}} )
         return data 
        }

export const createVehicule = async (vehicule) => { await axios.post(url3, vehicule)}
export const fetchVehicules = async () => { 
       const {data} = await axios.get(url3, { headers: {Accept:'application/json',}})
       return data 
    }



export const createCommand = async (commande) => { await axios.post(url4, commande) }
export const fetchCommands = async () => { const resp = await axios.get(url4, { headers: {Accept: 'application/json',}})
                                                        .then((resp) => {
                                                              
                                                        }
                                                            
                                                        )
                                                        .catch(

                                                        ) }
    //const dispatch= useDispatch();
   // var data = []; 
     
    