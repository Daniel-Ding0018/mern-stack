const asyncHandler = require('express-async-handler')

const Goal = require('../models/goalModel')
// File to control http

// @desc    Get goals request, links to goalRoutes.js
// @route   GET /api/goals
// @access  Private
const getGoals = asyncHandler(async (req, res)=> {
    const goals = await Goal.find()

    res.status(200).json(goals)
})

// @desc    Create goals request, links to goalRoutes.js
// @route   Create /api/goals
// @access  Private
const setGoal = asyncHandler(async (req, res)=> {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }

    const goal = await Goal.create({
        text: req.body.text
    })

    res.status(200).json(goal)
})

// @desc    Set goals request, links to goalRoutes.js
// @route   SET /api/goals/:id
// @access  Private
const updateGoal = asyncHandler(async (req, res)=> {
    const goal = await Goal.findById(req.params.id)

    if(!goal){
        throw new Error('Goal not found')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(updatedGoal)
})

// @desc    Delete goals request, links to goalRoutes.js
// @route   DELETE /api/goals
// @access  Private
const deleteGoal = asyncHandler(async (req, res)=> {
    const goal = await Goal.findById(req.params.id)

    if(!goal){
        throw new Error('Goal not found')
    }

    await goal.deleteOne()

    res.status(200).json({id: req.params.id})
})



module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}