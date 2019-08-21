import axios from 'axios'

export default function flickr(method, params) {

    return axios({
        method: 'get',
        url: 'https://api.flickr.com/services/rest',
        params: {
            api_key: process.env.VUE_APP_API_KEY,
            format: 'json',
            nojsoncallback: 1,
            ...params,
            method: `flickr.${method}`
        }
    })
}