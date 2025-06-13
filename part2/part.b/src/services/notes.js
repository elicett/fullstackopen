//Part 2, subpart b. altering data on the server, Exercise 2.14, (step 9): Buttom to delete data
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

export default {
    getAll: getAll, 
    create: create,
    erase: erase
}