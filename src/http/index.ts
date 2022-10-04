import axios from 'axios'
import env from 'react-native-config'
const { API_URL } = env

export const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL
})
