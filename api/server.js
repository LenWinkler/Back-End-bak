const express = require("express")
const helmet = require("helmet")
const server = express()
const cors = require("cors")

server.use(helmet())
server.use(express.json())
server.use(cors())

const authenticate = require("../auth/auth-middleware.js")
const authRouter = require("../auth/auth-router.js")

server.use("/api/auth", authRouter)

module.exports = server