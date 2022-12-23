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

// Obtain all users

export const getAllUsers = () => {
    return axios.get(`${url}/users`)
}

// Obtain all paged users

export const getAllPagedUsers = (page) => {
    return axios.get(`${url}/users?page=${page}`)
}
// Obtain User by id

export const getUserById = (id) => {
    return axios.get(`${url}/users/${id}`)
}

// Create user

export const createUser = (name, job) => {
    const body = {
        name,
        job
    }
    
    // Returns the response whit a Promise
    return axios.post(`${url}/users`, body)
}

// update user
export const updateUser = (id, name, job) => {
    const body = {
        name,
        job
    }
    
    // Returns the response whit a Promise
    return axios.put(`${url}/users/${id}`, body)
}

// TODO delete user
export const deleteUser = (id) => {
    return axios.delete(`${url}/users/${id}`)
}
