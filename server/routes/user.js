const express = require ('express')
const UserController = require('../controllers/user-controller')

const router = express.Router()

router.get('/:id', UserController.getOneById)




module.exports = router