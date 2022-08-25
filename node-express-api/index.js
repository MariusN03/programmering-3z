//hent ip library
const ip = require('ip')
console.log(ip.address())
//hent library express og gem objekt i en kontstant
const express = require('express')
//opret en variabel til express serveren
const app = express()
//definer en port
const port = 2650
//vi laver en meget simpel database
const weekDays = {
    'mandag': 'jeg er træt',
    'tirsdag': 'jeg har det udmærket wuhuu kort dag ;)',
    'onsdag': 'lang dag midt på ugen... mild sur røv',
    'torsdag': 'jeg har det så fint, det jo lillefredag',
    'fredag': 'jeg er udmattet men weekenden kommer jo om hjørnet',
    'lørdag': 'jeg har det fantastisk og føler mig fri',
    'søndag': 'friheden er lækker og har det godt men det snart mandag og det knuser mig inderligt'
}
//start webserver på port
app.get('/*', (req, res)=>{
    console.log('serveren fik besøg i roden')
    if(req.params[0]){
        console.log('wow nogen bruger API!!!: ' + req.params[0])
        if(weekDays[req.params[0]]){
            res.send(weekDays[req.params[0]])
        }else{
            res.send(req.params[0] + ' is not an API endpoint')
        }
    }else{
        res.send('du besøger min rød')
    }
    
})
app.listen(port, ()=>{
    console.log('server lytter på port 2650')
})