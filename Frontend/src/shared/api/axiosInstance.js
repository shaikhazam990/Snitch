import axios from "axios"

export const createApiInstance = (path) => axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}${path}`,
    withCredentials: true
})