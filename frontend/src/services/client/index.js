import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL;

export const Axios = axios.create({ baseURL: baseUrl });
