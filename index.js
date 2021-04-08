var express = require('express');
var app = express();
var path = require('path');
var bodyparser = require('body-parser');
var cors = require('cors');
require('dotenv').config();
var mongoose = require('mongoose');
var twitts = require('./api-routes/twitts');
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(process.env.MONGODBURL,(err,result) =>{
    if(err) {
        console.log(err,333)
    }else{
        console.log('Database connected successfully');
    }

})
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use('/twitts',twitts);
app.get("/", function (req, res) {
    res.send("Welcome to twitter bot")
    })

app.listen(3000,() =>{
    console.log(`bot is listining on ${process.env.PORT}`)
})
