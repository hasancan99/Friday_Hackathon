const express = require ('express')
const DiaryController = require('../controllers/diary-controller')

const router = express.Router()

router.get('/:userid', DiaryController.getAllEntries)



module.exports = router