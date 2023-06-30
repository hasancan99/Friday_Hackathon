const express = require ('express')
const DiaryController = require('../controllers/diary-controller')

const router = express.Router()


router.get('/:userid&:year&:month&:day', DiaryController.getEntryByDate)
router.get('/:userid&:year', DiaryController.getEntryByYear)
router.get('/:userid', DiaryController.getAllEntries)




module.exports = router