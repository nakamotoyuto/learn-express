import Axios from "axios";

const port = 8888
const host = 'localhost'

export const axiosInstance = Axios.create({
  baseURL: `http://${host}:${port}`,
  headers: {
    'Content-Type': 'application/json',
    xsrfHeaderName: 'X-CSRF-Token'
  },
  responseType: 'json'
})