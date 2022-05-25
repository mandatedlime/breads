// Dependencies
const express = require('express')
const { append } = require('express/lib/response')
const app = express()


// configuration
require('dotenv').config()
const PORT = process.env.PORT
console.log(PORT)

// ROUTES
app.get('/', (req, res) => {
    res.send('nomming at port', PORT);
})

//Breads
const breadsController = require('./controllers/breads_controller')
app.use('/breads', breadsController)

//LISTEN
app.listen(PORT, () => {
    console.log('nommin at port', PORT);
})