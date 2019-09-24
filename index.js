const server = require('./api/server.js')

const PORT = process.env.PORT || 8000

server.listen(PORT, () => {
    console.log(`\n=== listening on port ${PORT} ===\n`)
})