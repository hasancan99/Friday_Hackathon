const db = require('../database/db')

class DiaryEntry {
    constructor({post_id, user_id, title, content, created_at, last_edited}){
        this.id = post_id
        this.user_id = user_id
        this.title = title
        this.content = content
        this.created = created_at
        this.last_edited = last_edited
    }

    static async getAll(id){
        const response = await db.query('SELECT * FROM post WHERE user_id = $1 ORDER BY created_at DESC;', [id])
        if (response.rows.length === 0) {
            throw new Error("No entries available.")
        }
        return response.rows.map(g => new DiaryEntry(g));
    }

    static async getEntryByDate(id, date) {
        const response = await db.query('SELECT * FROM post WHERE user_id = $1 AND created_at = $2', [id, date])
        if(response.rows.length === 0) {
            throw new Error("No entries available for that date")
        }
        return response.rows.map(g => new DiaryEntry(g))
    }
} 

module.exports = DiaryEntry