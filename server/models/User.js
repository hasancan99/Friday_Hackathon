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
}


module.exports = User