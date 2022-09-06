const ip = require('ip')
console.log(ip.address())

const express = require('express')

const app = express()


const port = 666

app.use('/', express.static('public/'))

app.get('/ip', (req, res)=>{
res.json(ip.address())
console.log('yoooo')

})

app.listen(port, ()=>{
    console.log('server lytter på port ' + port)
})
