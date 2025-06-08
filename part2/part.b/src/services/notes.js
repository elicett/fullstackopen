//Part 2, subpart b. altering data on the server, Exercise 2.13, (step 8)
import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    return axios.get(baseUrl)
}

const create = (newObject) => {
    return axios.post(baseUrl, newObject)
}

export default {
    getAll: getAll, 
    create: create
}