// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const path = require('path')
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const fs = require('fs')

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

/* server.use(async (req, res, next) => {
    const { body, path } = req
    console.log('body', body)
    console.log('path', path)
    // console.log('req', req)
    if ( path === '/auth/sign-in') {

    }
    next()
}) */

// Эндпоинт для логина
server.post('/auth/sign-in', (req, res) => {
    try {
        const {
            body: { email, password }
        } = req
        // eslint-disable-next-line no-undef
        const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'))
        const { users = [] } = db

        const userFromBd = users.find((user) => user.email === email && user.password === password)

        if (userFromBd) {
            return res.json({
                accessToken:
                    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE3Mjc2Mjc5OTQsImV4cCI6MTc1OTE2Mzk5NCwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsImlkIjoiMSJ9._ZMXi2CECKrnYFuRinWv60PNCOO8jX82080du9AFeHY'
            })
        }

        return res.status(403).json({ message: 'User not found' })
    } catch (e) {
        console.log(e)
        return res.status(500).json({ message: e.message })
    }
})

server.post('/auth/sign-out', (req, res) => {
    return res.status(200).json({ message: 'ok' })
})

server.use((req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(403).json({ message: 'AUTH ERROR' })
    }

    next()
})

// Use default router
server.use(router)
server.listen(5000, () => {
    console.log('JSON Server is running')
})

/*
eyJ1c2VybmFtZSI6ICJhMTNiNDRjOGE3ZGM0ZmQzOTJjMWVhOTc2YzVjN2QwNiIsICJuYW1lIjogIkFub255bW91cyBHYW55bWVkZSIsICJkaXNwbGF5X25hbWUiOiAiQW5vbnltb3VzIEdhbnltZWRlIiwgImluaXRpYWxzIjogIkFHIiwgImNvbG9yIjogbnVsbH0=|e279ad45c379df470a229be641dc9b03f3fba3e704516dbbaf523086dccd1991

*/
