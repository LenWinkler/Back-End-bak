const jwt = require("jsonwebtoken")

const secret = require("../config/secret.js")

module.exports = (req, res, next) => {
    const token = req.headers.authorization
    if (token) {
        jwt.verify(token, secret.key, (err, decodedToken) => {
            if (err) {
                res.status(401).json({ message: "The token not vaild or has been expired" })
            } else {
                next()
            }
        })
    } else {
        res.status(400).json({ message: "No token provided." })
    }
}