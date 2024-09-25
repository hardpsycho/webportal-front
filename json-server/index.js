// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const path = require('path')

// eslint-disable-next-line no-undef, @typescript-eslint/no-var-requires
const jsonServer = require('json-server')
const server = jsonServer.create()
// eslint-disable-next-line no-undef
const router = jsonServer.router(path.resolve(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// Add custom routes before JSON Server router
server.get('/echo', (req, res) => {
    res.jsonp(req.query)
})

server.use(async (req, res, next) => {
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, 1000)
    })
    next()
})

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
    if (req.method === 'POST') {
        req.body.createdAt = Date.now()
    }
    // Continue to JSON Server router
    next()
})

// Use default router
server.use(router)
server.listen(5000, () => {
    console.log('JSON Server is running')
})
