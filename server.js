var express = require('express');
const { on } = require('process');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
let socket = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


app.use('/css', express.static('css'));
app.use('/images', express.static('images'));
app.use('/js', express.static('js'));


io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('playSelect', (playId) => {
   console.log(playId);
   
  })
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});




socket.on('connect', function(connected) {
    let aryaBtn = document.querySelector('#aryaBtn');
    let branBtn = document.querySelector('#branBtn');
    let cerseiBtn = document.querySelector('#cerseiBtn');
    let jaimeBtn = document.querySelector('#jaimeBtn');
    let jonBtn = document.querySelector('#jonBtn');
    let samBtn = document.querySelector('#samBtn');
    let sansaBtn = document.querySelector('#sansaBtn');;
    let theonBtn = document.querySelector('#theonBtn');
    let tyrionBtn = document.querySelector('#tyrionBtn');
    let varysBtn = document.querySelector('#varysBtn');
    
    aryaBtn.addEventListener("click", function aryaTransform(){
        let createAryaImg = document.createElement("img");
        createAryaImg.src = "images/needle.png";
    });
    
    console.log(aryaTransform);
 });


let branTransform;
let cerseiTransform;
let jaimeTransform;
let jonTransform;
let samTransform;
let sansaTransform;
let theonTransform;
let tyrionTransform;
let varysTransform;


let Player1;
let Player2;


