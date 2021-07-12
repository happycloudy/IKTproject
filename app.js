const express = require('express')
const next = require('next')
const path = require('path')

const bodyParser = require('body-parser')

const port = 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()




app.prepare().then(() => {
    const server = express()
    server.use(bodyParser.urlencoded({ extended: false }))
    server.use(bodyParser.json());
    server.use('/introduction',express.static(__dirname + '/introduction'))

    server.get('*', (req, res) => {
        if(req.path === '/introduction'){
            res.sendFile(path.join(__dirname + '/introduction/content/index.html'))
        }else{
            return handle(req, res)
        }
    })

    server.listen(port, (err) => {
        if (err) throw err
        console.log('> Read on http://localhost:' + port)
    })
})
