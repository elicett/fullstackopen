//Part 2, subpart b. Adding styles to the react application, Exercise 2.16, (step 12): Notifications and server state. Info previously removed 
import axios from 'axios'
const baseUrl = '/api/persons'

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