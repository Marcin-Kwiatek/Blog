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
app.delete('/deleteArticle', function(request, response) {
    let idDeleteArticle = request.query.id
    const db = dbService.getDbServiceInstance()
    const result = db.deleteArticle(idDeleteArticle)
    result
        .then(data => {
            response.json({ data: data })
        })
        .catch(err => console.log(err))
})
app.patch('/updateArticle', function(request, response) {
    const db = dbService.getDbServiceInstance()
    const result = db.updateArticle(request.body, )
    response.json({ status: 200, })
})

app.listen(process.env.PORT, function() { console.log('app is running') })