import axios, { AxiosInstance } from 'axios'

const coindeskClient: AxiosInstance = axios.create({
    baseURL: 'https://api.coindesk.com/v1'
});

const restapiexampleClient: AxiosInstance = axios.create({
    baseURL: 'http://dummy.restapiexample.com'
});

export { coindeskClient, restapiexampleClient }