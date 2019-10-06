import { GraphQLServer } from 'graphql-yoga'
import * as cookieParser from 'cookie-parser'
import * as bodyParser from 'body-parser'
import * as jwt from 'jsonwebtoken'
import * as cors from 'cors'

// temporary
import express from 'express'

require('dotenv').config()

const server = express()
server.use(cookieParser())
server.use(bodyParser.json({ limit: '50mb' }))
server.use(
  bodyParser.urlencoded({
    limit: '50mb',
    extended: true,
    parameterLimit: 50000,
  })
)

// Routes
server.get('/hi', (req, res) => {
  res.send('<h1>Hooray!</h1>')
})

server.listen(process.env.PORT || 3006)
