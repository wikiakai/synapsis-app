import Axios, { AxiosRequestConfig } from 'axios'

const baseAxios = Axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
})

export default baseAxios
