import axios from 'axios';
//import { useEffect } from 'react';

const url = 'http://localhost:3005/api/v1/transaf/auth/register';
const url2 = 'http://localhost:3005/api/v1/transaf/auth/login';
const url3 = 'http://localhost:3005/api/v1/transaf/vehicules';
const url4 = 'http://localhost:3005/api/v1/transaf/commandes';


export const registerUser = async (userData) => { await axios.post(url, userData) }

export const loginUser = async (userData) => { return await axios.post(url2, userData) }

export const createVehicule = async (vehicule) => { await axios.post(url3, vehicule)}
export const getAllVehicules = async () => { await axios.get(url3) }

export const createCommand = async (commande) => { await axios.post(url4, commande) }
export const getAllCommands = async () => { await axios.get(url4) }