import Axios from 'axios'
import { baseURL } from '../env'
export const api = Axios.create({
  baseURL,
  timeout: 8000
})


export const movieApi = Axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  timeout: 5000,
  params: {
    api_key: '545c6ef058e65396849dfbbf381cbca3',
    sort_by: 'popularity.desc',
    "certification.lt": 'r'
  }
})
