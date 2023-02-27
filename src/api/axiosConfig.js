import axios from 'axios';

const instance = axios.create({baseURL: 'https://transaf-api.onrender.com'});


export default instance;

//'http://localhost:5005/api/v1/transaf'