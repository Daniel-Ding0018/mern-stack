const asyncHandler = require('express-async-handler')

// File to control http

// @desc    Get goals request, links to goalRoutes.js
// @route   GET /api/goals
// @access  Private
const getGoals = asyncHandler(async (req, res)=> {
    res.status(200).json({message: 'Get Goals'})
})

// @desc    Create goals request, links to goalRoutes.js
// @route   Create /api/goals
// @access  Private
const setGoal = asyncHandler(async (req, res)=> {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }
})

// @desc    Set goals request, links to goalRoutes.js
// @route   SET /api/goals/:id
// @access  Private
const updateGoal = asyncHandler(async (req, res)=> {
    res.status(200).json({message: `Update goal ${req.params.id}`})
})

// @desc    Delete goals request, links to goalRoutes.js
// @route   DELETE /api/goals
// @access  Private
const deleteGoal = asyncHandler(async (req, res)=> {
    res.status(200).json({message: `Delete goal ${req.params.id}`})
})



module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}