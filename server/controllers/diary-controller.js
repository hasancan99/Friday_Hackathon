const Diary = require('../models/Diary')
const User = require('../models/User')

class DiaryController {
    static async getAllEntries(req, res){
        const { userid } = req.params
        try {
            const entries = await Diary.getAll(userid)
            res.status(200).json(entries)
        } catch (err) {
            res.status(500).json({error: "Something went wrong oops"})
        }
    }


}


module.exports = DiaryController