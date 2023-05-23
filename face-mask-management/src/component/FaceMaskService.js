import axios from 'axios';
const showList = async () => {
    try {
        return await axios.get('http://localhost:3000/faceMask').then(next => next.data);
    } catch (error) {
        throw error
    }
}

const showListLayer = async () => {
    try {
        return await axios.get('http://localhost:3000/layer').then(next => next.data);
    } catch (error) {
        throw error
    }
}
const deleteFaceMask = async (id) => {
    await axios.delete('http://localhost:3000/faceMask/' + id)
}
const addFaceMask = async (faceMask) => {
    await axios.post('http://localhost:3000/faceMask', faceMask)
}
const getFaceMaskById = async (id) => {
    return await axios.get('http://localhost:3000/faceMask/' + id).then(next => next.data)
}
const updateFaceMask = async (faceMask) => {
    await axios.put('http://localhost:3000/faceMask/' + faceMask.id, faceMask)
}
const faceMaskService = {
    showList,
    deleteFaceMask,
    getFaceMaskById,
    updateFaceMask,
    addFaceMask,
    showListLayer
}
export default faceMaskService;