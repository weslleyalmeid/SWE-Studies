import axios from 'axios'

const api = axios.create({
    baseURL: 'https://the-one-api.dev/v2'
})

api.interceptors.request.use( async config => {
    const token = '5Rkm9Psh55CEm7OtgWw_'

    config.headers.Authorization = `Bearer ${token}`

    return config
})

export default api