import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 01cf607bfd3864df27da23225b7602cc8000dfd79ae6bd3ea503ba76a0dcc4a9'
    }
})
