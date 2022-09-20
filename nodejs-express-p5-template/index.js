const ip = require('ip')
console.log(ip.address())

const socketLib = require('socket.io')

let colors = ['red', 'blue', 'purple', 'green', 'brown', 'pink', 'yellow', 'cyan']

const express = require('express')

const app = express()

//json array til brugere
let users = []

const port = 666

const server = app.listen(port, ()=>{
    console.log('server lytter på port ' + port)
})

const serverSocket = socketLib(server)

app.use('/', express.static('public/'))

app.get('/ip', (req, res)=>{
    res.json(
        {
            'ip': ip.address(),
            'port': port
        }
    )
    console.log('yoooo')

})

serverSocket.sockets.on('connection', socket => {
    console.log('new socket established, super cool')
    //socket.on er en eventlistener på nye beskeder fra klienter
    socket.on('chat', message => {
        console.log(message)
        //når serveren modtager besked så sender den dem rundt til alle via newMessage
        serverSocket.sockets.emit('newMessage', message)        
    })

    socket.on('newUser', user =>{
        users.push({'name': user,'id':socket.id})
        console.log(users)
    })
})
