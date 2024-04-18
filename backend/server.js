const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')

// Finds the port environment variable or if not found then run on 5000
const port = process.env.PORT || 5000


const app = express()

// add middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// redirects the /api/goals http request to the goalRoutes.js file in routes folder
app.use('/api/goals', require('./routes/goalRoutes'))
app.use(errorHandler)


app.listen(port, () => console.log(`Server started on port ${port}`))

