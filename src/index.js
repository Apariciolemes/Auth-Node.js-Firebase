const express = require('express')
// const bodyParser = require('bodyParser')
const app = express()

app.get('/', (req, resp) => {
    resp.send('hello')
})

app.listen(3000, () => {
    console.log('Listen back-end')
})

