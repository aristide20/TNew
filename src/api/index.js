//import axios from 'axios';
import axiosConfig from './axiosConfig';
//import { getCommands } from '../state/UserSlice';
//import { useDispatch } from 'react-redux';
//import { useEffect } from 'react';



//const url = 'http://localhost:3005/api/v1/transaf/auth/register';
//const url2 = 'http://localhost:3005/api/v1/transaf/auth/login';
//const url3 = 'http://localhost:3005/api/v1/transaf/vehicules';
//const url4 = 'http://localhost:3005/api/v1/transaf/commandes';
//const url5 = 'http://localhost:3005/api/v1/transaf/admin/users';





export const registerUser = async (userData) => { return await axiosConfig.post('/auth/register', userData) }
export const loginUser = async (userData) => { return await axiosConfig.post('/auth/login', userData) }
export const getAllUsers = async () => { await axiosConfig.get('/admin/users', { headers: {Accept: 'application/json',}} ) }
export const updateUser = async (data) => { await axiosConfig.put('/admin/users', data)}



export const createVehicule = async (vehicule) => { return await axiosConfig.post('/vehicules', vehicule)}
export const getAllVehicules = async () => { return await axiosConfig.get('/vehicules', { headers: {Accept:'application/json',}}) }



export const createCommand = async (commande) => { return await axiosConfig.post('/commandes', commande) }
export const getCommands = async () => { return await axiosConfig.get('/commandes', { headers: {Accept: 'application/json',}}) }



export const addEmailNewsletter = async (data) => { return await axiosConfig.post('/newsLetter', data)}
    