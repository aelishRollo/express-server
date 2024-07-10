const express = require('express')
const app = express()
const PORT = 8000


let myObject = {            //This is an arbitrary object that will be served
    name: 'Prometheus',
    age: 9001,
    bipedal: true
}


app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html')
    console.log('You are at the main route!')
})

app.get('/api', (req,res) => {                  //when user goes to /api it serves myObject, 
    res.json(myObject)                          //and it does so using: res.json(myObject)
    console.log('User made a request, yo')
})


app.listen(PORT,(req,res) => {                      //make the server listen on PORT
    console.log(`Server listening on ${PORT}`)
})
