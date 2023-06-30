const Diary = require('../models/Diary')
const User = require('../models/User')

class DiaryController {
    static async getAllEntries(req, res){
        const { userid } = req.params
        try {
            const entries = await Diary.getAll(userid)
            res.status(200).json(entries)
        } catch (err) {
            res.status(500).json({error: `Something went wrong oops - ${err}`})
        }
    }

    static async getEntryByDate(req,res) {
        console.log(req.params)
        const day = req.params.day
        const month = req.params.month
        const year = req.params.year
        const userId = req.params.userid
        const date = year + '-' + month + '-' + day
        console.log(date)
        try {
            const entries = await Diary.getEntryByDate(userId, date)
            res.status(200).json(entries)
        } catch (err) {
            res.status(500).json({error: `Yeah man smtg went wrong - ${err}`})
        }
    }


}


module.exports = DiaryController