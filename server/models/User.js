const db = require('../database/db')

class User {
    constructor({user_id, username, password}) {
        this.id = user_id
        this.username = username
        this.password = password
    }

    static async getOneById(id){
        const response = await db.query("SELECT * FROM user_account WHERE user_id = $1", [id]);
        if (response.rows.length != 1) {
            throw new Error("Unable to locate user.")
        }
        return new User(response.rows[0]);
    }

    static async create(data) {

        // `data` needs to have `username` and `password` properties
        const { username, password } = data;

        // Insert new row into table and return it so we can grab ID of new user
        let response = await db.query("INSERT INTO user_account (username, password) VALUES ($1, $2) RETURNING user_id;", [username, password]);

        // Grab userID
        const newId = response.rows[0].user_id;

        //  Talk to getOneById to grab all of new user data
        const newUser = await User.getOneById(newId);

        // Return that data
        return newUser;
    }
}


module.exports = User
