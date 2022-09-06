let bg = 'lightblue'
function setup(){
    createCanvas(windowWidth, windowHeight)
    
    background(bg)

    //fetch server ip from node endpoint
    fetch('http://localhost/666/ip')
        .then(res => res.json())
        .then(json => select('#info').html(json))
}

function draw(){
    
}
