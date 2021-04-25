const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')
const dbService = require('./dbService')

dotenv.config()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.post('/article', function(request, response) {
    console.log(request.body)
    const db = dbService.getDbServiceInstance()
    const result = db.insertArticle(request.body, )
    response.json({ status: 200, })
})

app.get('/allArticles', function(request, response) {
    let pageNumber = request.query.pageNumber
    const db = dbService.getDbServiceInstance()
    const result = db.getAllArticles(pageNumber)
    result
        .then(data => {
            response.json({ data: data })
        })
        .catch(err => console.log(err))
})

app.get('/article', function(request, response) {
    let id = request.query.id
    const db = dbService.getDbServiceInstance()
    const result = db.getArticle(id)
    result
        .then(data => {
            response.json({ data: data })
        })
        .catch(err => console.log(err))
})
app.get('/articlesCount', function(request, response) {
    const db = dbService.getDbServiceInstance()
    const result = db.getArticlesCount()
    result
        .then(data => {
            response.json({ data: data })
        })
        .catch(err => console.log(err))
})


app.listen(process.env.PORT, function() { console.log('app is running') })