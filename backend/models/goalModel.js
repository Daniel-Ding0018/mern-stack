const mongoose = require('mongoose')

// Making a mongodb schema
const goalSchema = mongoose.Schema({
    text: {
        type: String,
        required: [true, 'Please add a text value']
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Goal', goalSchema)