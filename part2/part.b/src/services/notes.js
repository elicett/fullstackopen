//Part 2, subpart b. altering data on the server, Exercise 2.15, (step 10): Updating number to an existing contact 
import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    return axios.get(baseUrl)
}

const create = (newObject) => {
    return axios.post(baseUrl, newObject)
}

const erase = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
}

const replace = (editNumber) => {
    return axios.put(`${baseUrl}/${editNumber.id}`, editNumber)
}

export default {
    getAll: getAll, 
    create: create,
    erase: erase,
    replace:replace
}