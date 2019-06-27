const path = require('path')

const sendFilePath = pathName => path.join(__dirname, '../public', pathName)

module.exports = sendFilePath
