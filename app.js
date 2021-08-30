if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}
const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 3000
const routes = require('./routes/index')
app.use(cors())
app.use((req,res,next) => {
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE')
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
        next()
    })
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(routes)

app.listen(port, () => {console.log(`listening on ${port}`)})