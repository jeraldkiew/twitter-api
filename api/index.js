// Import dependencies
const express = require('express')

// Create app instance
const app = express()

// Define JSON as return type
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.json({ message: 'hello world' })
})

module.exports = {
  path: '/api',
  handler: app,
}