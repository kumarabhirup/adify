const express = require('express')
const sendFilePath = require('../lib/sendFilePath')

const app = express()

app.use('/public', express.static('src/public'))

// Routes
app.get('/', (req, res) => {
  res.sendFile(sendFilePath('index.html'))
})

app.listen(process.env.PORT || 3001)
