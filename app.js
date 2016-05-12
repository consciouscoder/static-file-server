
// Requires \\
var express = require('express')
var bodyParser = require('body-parser')
var logger = require('morgan')
var fs = require('fs')

// Create Express App Object \\
var app = express()

// Application Configuration \\
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))


// Routes \\
app.get('/', function(req, res) {
    res.header('Content-Type', 'text/html')
    
    // var fileContents = fs.readFileSync('data.txt')
    fs.readFile('data.txt', function(err, data) {  
        if (err) res.send ('Error!')
        res.send(data)
    })
})

app.get('/:filename', function(req, res) {
    res.header('Content-Type', 'text/html')
    
    var filename = req.params.filename
    
    fs.readFile(filename, function(err, data) {  
        if (err) res.send ('Error!')
        res.send(data)
    })    
})

// Creating Server and Listening for Connections \\
var port = process.env.PORT || 3000
app.listen(port, function(){
  console.log('Server running on port ' + port)
})