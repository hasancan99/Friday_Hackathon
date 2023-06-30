const User = require('../models/User')

class UserController{
    static async getOneById(req, res) {
        const{ id } = req.params
        try {
            const user = await User.getOneById(id)
            if (user){
                res.status(200).json(user)
            } else {
                res.status(404).json({error: `User not found!`})
            }

        } catch (err){
            res.status(500).json({error:`Oops! Something went wrong - ${err}`})
        }
    }
}

module.exports = UserController