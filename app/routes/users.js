const express = require('express')
const router = express.Router()
    //const checkOrigin = require('../middleware/origin')
    //const checkAuth = require('../middleware/auth')
    //const checkRoleAuth = require('../middleware/roleAuth')
const { getItems, getItem, createItem, deleteItem, updateItem } = require('../controlles/users')
    //const { validateCreate } = require('../validators/users')

router.get('/', getItems)
router.get('/:id', getItem)
router.post('/', createItem)
router.patch('/:id', updateItem)
router.delete('/:id', deleteItem)

// router.get('/', checkAuth, checkRoleAuth(['admin']), getItems)

// router.get('/:id', checkOrigin, getItem)

// //TODO: Donde recibimos data
// router.post('/', checkOrigin, validateCreate, createItem)

// router.patch('/:id', updateItem)

// router.delete('/:id', deleteItem)


module.exports = router