// import syntax
const express = require('express')
const router = express.Router()
const connectDB = require('../config/db')
const {getGoals, setGoal, updateGoal, deleteGoal} = require('../controllers/goalController')

// Run the connection to mongoDB in backend/config/db.js
connectDB()

// 1 liner doing the below code snippet
router.route('/').get(getGoals).post(setGoal)

/*
// Setting up the get request, in controller folder has implementation
router.get('/', getGoals)

// Setting up the post request
router.post('/', setGoal)
*/

// 1 liner doing the below code snippet
router.route('/:id').delete(deleteGoal).put(updateGoal)

/*
// Setting up the put request
router.put('/:id', updateGoal)

// Setting up the delete
router.delete('/:id', deleteGoal)
*/

module.exports = router