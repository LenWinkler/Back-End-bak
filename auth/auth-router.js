const router = require("express").Router()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const secret = require("../config/secret.js")
const Users = require("../users/users-model.js")

function generateToken(user) {
    const payload = {
        subject: user.id,
        username: user.username
    }
    const options = {
        expiresIn: "1d"
    }
    return jwt.sign(payload, secret.key, options)
}

router.post("/register", (req, res) => {
    if (req.body.name && req.body.email && req.body.password) {
        let user = req.body
        const hash = bcrypt.hashSync(user.password, 8)
        user.password = hash

        Users.addUser(user)
            .then(saved => {
                res
                    .status(201)
                    .json(saved)
            })
            .catch(err => {
                res
                    .status(500)
                    .json({ message: "There was an error adding that user.", err })
            })
    } else {
        res
            .status(400)
            .json({ message: "Please enter name, email, and password." })
    }
})

router.post("/login", (req, res) => {
    if (req.body.email && req.body.password) {
        let { email, password } = req.body
        Users.findBy({ email })
            .first()
            .then(user => {
                if (user && bcrypt.compareSync(password, user.password)) {
                    const token = generateToken(user)
                    res
                        .json({ message: `Welcome, ${user.name}.`, token })
                } else {
                    res
                        .status(401)
                        .json({ message: "Not vailed credentals." })
                }
            })
    } else {
        res.status(400).json({ message: "Please enter email and password." })
    }
})

module.exports = router