
// function to handle the error requests
const errorHandler = (err, req, res, next) => {
    // if there is a status code use that, otherwise its 500
    const statusCode = res.statusCode ? res.statusCode : 500

    // set the status code
    res.status(statusCode)

    // send json as output
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    })
}



module.exports = {
    errorHandler
}