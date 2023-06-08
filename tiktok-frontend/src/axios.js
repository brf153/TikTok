import axios from "axios";

const instance = axios.create({
    baseURL: 'https://tik-tok-kappa.vercel.app/'
})

export default instance