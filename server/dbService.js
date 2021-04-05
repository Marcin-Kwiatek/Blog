const mysql = require('mysql')
const dotenv = require('dotenv')
dotenv.config()
let instance = null

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DB_PORT,
})


connection.connect((err) => {
    if (err) {
        console.log(err.message)
    }
    console.log('db ' + connection.state)
})

class DbService {
    static getDbServiceInstance() {
        return instance ? instance : new DbService()
    }
    async getAllArticles() {
        try {
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM posts;"
                connection.query(query, (err, results) => {
                    if (err) reject(new Error(err.message))
                    resolve(results)
                })
            })
            return response
        } catch (error) {
            console.log(error)
        }
    }
    async insertArticle(article) {
        try {
            const responseAddArticle = await new Promise((resolve, reject) => {
                const queryAddArticle = "INSERT INTO posts (id, title, content, date) " +
                    `VALUES ('` + article.id + `','` + article.title + `','` + article.content + `',` + article.date + ` )`
                console.log(queryAddArticle)
                connection.query(queryAddArticle, (err, results) => {
                    if (err) reject(new Error(err.message))
                    resolve(results)

                })
            })
            return responseAddArticle
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = DbService