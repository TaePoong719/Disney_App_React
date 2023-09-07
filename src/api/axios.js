import axios from 'axios'

const instance = axios.create({
  baseURL:"https://api.themoviedb.org/3",
  params: {
    api_key: 'f72ec714340e99ec008435f4aeac2d1e', 
    language: 'ko-KR'
  }
})

export default instance