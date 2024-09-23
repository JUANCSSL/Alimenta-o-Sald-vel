import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhos:3000'
});

export const getBreakfast = () => api.get('/breakfast');
export const getLunch = () => api.get('/lunch');
export const getDinner = () => api.get('/dinner');