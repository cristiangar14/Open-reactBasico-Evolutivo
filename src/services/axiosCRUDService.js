import axios from 'axios';

/**
 * Login Method to REQREs endpoint
 * @params {tring} email
 * @params {tring} password
 */

let url = 'https://reqres.in/api'
export const login = (email, password) => {
    const body = {
        email,
        password
    }
    
    // Returns the response whit a Promise
    return axios.post(`${url}/login`, body)
}

// TODO Obtain all users

export const getAllUsers = () => {
    return axios.get(`${url}/users`)
}

// TODO Obtain all paged users

export const getAllPagedUsers = (page) => {
    return axios.get(`${url}/users?page=${page}`)
}
// TODO Obtain User by id
// TODO Create user
// TODO update user
// TODO delete user