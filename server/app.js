const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.post('/article', function(request, response) {

})

app.get('/allArticles', function(request, response) {
    response.json({
        success: true
    })
})

app.listen(process.env.PORT, function() { console.log('app is running') })