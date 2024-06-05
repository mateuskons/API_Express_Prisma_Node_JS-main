const express = require('express')

require("dotenv/config")


// Index das routes
const routes = require('./routes')


const app = express()
app.use(express.json())


app.use(routes)


const PORT = process.env || 3333
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`))