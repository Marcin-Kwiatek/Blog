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
    async getAllArticles(pageNumber) {
        try {
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM posts ORDER BY date DESC LIMIT " + (pageNumber - 1) * 3 + ",3"
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
    async getArticle(idArticle) {
        try {
            const responseAddArticle = await new Promise((resolve, reject) => {
                const queryAddArticle = "SELECT * FROM posts WHERE id =" + idArticle
                console.log(queryAddArticle)
                connection.query(queryAddArticle, (err, results) => {
                    if (err) reject(new Error(err.message))
                    resolve(results[0])

                })
            })
            return responseAddArticle
        } catch (error) {
            console.log(error)
        }
    }
    async getArticlesCount() {
        try {
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT count(*) FROM posts"
                connection.query(query, (err, results) => {
                    if (err) reject(new Error(err.message))
                    resolve(results[0]["count(*)"])
                })
            })
            return response
        } catch (error) {
            console.log(error)
        }
    }
    async deleteArticle(idDeleteArticle) {
        try {
            const response = await new Promise((resolve, reject) => {
                const query = "DELETE FROM posts WHERE ID = " + idDeleteArticle
                console.log(query)
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
    async updateArticle(update) {
        try {
            console.log(update)
            const response = await new Promise((resolve, reject) => {
                const query = "UPDATE posts SET title=" + update.title + ",content=" + update.content + " WHERE ID = " + update.id
                console.log(query)
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
}

module.exports = DbService