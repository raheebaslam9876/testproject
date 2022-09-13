import axios from 'axios'
const KEY = 'AIzaSyAmudqxCcuNLPAGRKXyFVs28dlTV7hzy1g'
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResult: 25,
        type: 'video',
        key: KEY
    }
})