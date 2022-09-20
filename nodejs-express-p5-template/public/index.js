let bg = 'lightblue'
let clientSocket
let state = 'enterName'
let userName

function setup(){
    createCanvas(windowWidth, windowHeight)
  

    background(bg)

    //fetch server ip from node endpoint
    fetch('http://localhost:666/ip')
        .then(res => res.json())
        .then(json => {
            select('#info').html(json.ip + ':' + json.port)

    })
    //io kommer fra socket.io library
    clientSocket = io.connect()
    
    
    select('#nameButton').mousePressed(()=>{
        console.log('ny burger')
        clientSocket.emit('newUser', select('#name').value())
        select('#nameBox').addClass('hide')
        select('#chatBox').removeClass('hide')
        userName = select('#name').value()
    })

    clientSocket.on('newMessage', message => {
        let p
        if(message.userName ==userName ){
            p = createElement('p', message.message)
            p.addClass('me')
        }else{
            p = createElement('p', message.userName + ': ' + message.message)
        }
        
        select('#chat').child(p)
        select('#chat').elt.scrollTop = select('#chat').elt.scrollHeight
    })
    
}


function draw(){
    
}

function keyPressed(key){
    let message = select('#message').value()
    if(key.key=='Enter'&& message != ''){
        
        console.log(message)
        select('#message').value('')
        clientSocket.emit('chat', {'userName':userName, 'message': message})
    }
}

function mousePressed(){
    let green = map(mouseX,0,windowWidth, 0 ,255)
    fill(0, green, 0)
    //ellipse(mouseX, mouseY, 20)
}