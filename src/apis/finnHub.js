import axios from "axios"

const TOKEN = "ccanbhqad3i0kro329l0"

export default axios.create({
    baseURL: "https://finnhub.io/api/v1" , 
    params : {
        token: TOKEN
    }
})
