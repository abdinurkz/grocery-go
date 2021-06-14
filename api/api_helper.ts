import axios from 'axios'
import { host } from './config'
import { getValueFor } from '../helpers/persist'


const result = getValueFor('go')

console.log(result);



const axiosApi = axios.create({
    baseURL: host,
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwOTlmZTNmNjY3ZTJlMjdiMmQ5MGRjNiIsImlhdCI6MTYyMzAwMjE5NywiZXhwIjoxNjI1NTk0MTk3fQ.h5A3e3Z5cvU0l_td30etpGNFt0g85mpcx_Z12mMW1aQ`,
    },
})




export async function get(url, config = {}) {
    return await axiosApi.get(url, { ...config }).then(response => response.data)
}

export async function post(url, data, config = {}) {
    return axiosApi
        .post(url, { ...data }, { ...config })
        .then(response => response.data)
}

export async function put(url, data, config = {}) {
    return axiosApi
        .put(url, { ...data }, { ...config })
        .then(response => response.data)
}

export async function del(url, config = {}) {
    return await axiosApi
        .delete(url, { ...config })
        .then(response => response.data)
}

export async function patch(url, data, config = {}) {
    return axiosApi
        .patch(url, { ...data }, { ...config })
        .then(response => response.data)
}
