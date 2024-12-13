import axios from "axios"

export const api = axios.create({
    //rodar api: npm start
    baseURL: "http://192.168.10.104:3333", //lembrar de conferir o ip dependendo da rede conectada
    timeout: 700, //caso em 700ms nao inicie, a api é desligada
})