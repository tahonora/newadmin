
import axios from 'axios'
import { Environment } from '../../../environment'
import { errorInterceptor, ResponseInterceptor } from './interceptors'

const ApiInsta = axios.create({
  baseURL: Environment.URL_INSTA,  
})

ApiInsta.interceptors.response.use(
  (response) => ResponseInterceptor(response),
  (error) => errorInterceptor(error),
)

export {ApiInsta}

