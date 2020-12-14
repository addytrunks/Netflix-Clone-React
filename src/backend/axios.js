import axios from 'axios'

// instance.get('/foo-bar') 
// https://api.themoviedb.org/3/foo-bar
const instance = axios.create({
    baseURL:'https://api.themoviedb.org/3'
})

export default instance