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
    response.json({ status: 200 })
})

app.get('/allArticles', function(request, response) {
    const db = dbService.getDbServiceInstance()
    const result = db.getAllArticles()
    result
        .then(data => {
            console.log(data)
            response.json({ data: data })
        })
        .catch(err => console.log(err))
})

app.listen(process.env.PORT, function() { console.log('app is running') })