import axios from "axios";

export const ApiViacep = () => {
    const api = axios.create({
        baseURL: 'https://viacep.com.br/ws'
    })

    return api;
}

export const ApiIBGE = () => {
    const api = axios.create({
        baseURL: 'https://servicodados.ibge.gov.br/api/v1'
    })

    return api;
}