const User = require('../models/User')
const Token = require('../models/Token')

const bcrypt = require('bcrypt');

require('dotenv').config()


async function register (req, res) {
    try {
        // Get body of HTTP request
        const data = req.body
        console.log("🚀 ~ file: user-controller.js:13 ~ register ~ data:", data)

        // Use `bcrypt` to generate salt with 10 rounds
        const salt = await bcrypt.genSalt(parseInt(process.env.BCRYPT_SALT_ROUNDS))
        console.log("🚀 ~ file: user-controller.js:17 ~ register ~ salt:", salt)

        // Use Use `bcrypt` to take the password the user enter into textbox and then combine with salt to make hash
        data["password"] = await bcrypt.hash(data["password"], salt)

        // Send hashed password and user data to `create` in model
        const result = await User.create(data)
        console.log("🚀 ~ file: user-controller.js:25 ~ register ~ result:", result)

        // If user creation is succesful send 201 status code
        res.status(201).send(result)
    } catch (err) {
        res.status(400).json({"Error registering user": err.message})
    }
}

async function login (req, res) {
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


module.exports = {
    register, login
}        
