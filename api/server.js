const express = require("express")
const helmet = require("helmet")
const server = express()
const cors = require("cors")

server.use(helmet())
server.use(express.json())
server.use(cors())

const authenticate = require("../auth/auth-middleware.js")
const authRouter = require("../auth/auth-router.js")
const verbsRouter = require("../conjugator-verbs/verbs-router.js")

server.use("/api/auth", authRouter)
server.use("/api/verbs", verbsRouter)

module.exports = server