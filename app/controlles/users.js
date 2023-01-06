const { httpError } = require('../helpers/handleError')
const userModel = require('../models/users')

//TODO: localhost:3000/api/1.0/users -> Lista
const getItems = async(req, res) => {
    try {
        const listAll = await userModel.find({})
            //res.send({ list: [1, 2, 3] })
        res.send({ data: listAll })
    } catch (e) {
        httpError(res, e)
    }
}

//TODO: localhost:3000/api/1.0/users/:id -> Detalle
const getItem = (req, res) => {

}

const createItem = async(req, res) => {
    try {
        const { name, age, email } = req.body
        const resDetail = await userModel.create({
            name,
            age,
            email
        })
        res.send({ data: resDetail })
    } catch (e) {
        httpError(res, e)
    }
}


const updateItem = (req, res) => {

}

const deleteItem = (req, res) => {

}

module.exports = { getItem, getItems, deleteItem, createItem, updateItem }