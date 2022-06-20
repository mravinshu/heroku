const express = require("express");
const app = express();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false })

const fs = require('fs');
 

app.get("/", function (req, res) {
  res.send("Welcome Aalu");
});

app.get("/aalu", function (req, res) {
    res.send("Ice Cream says Hey!");
})

app.post("/msg",jsonParser, async (req,res) => {
    try {
      fs.writeFileSync('msg.txt', "\n"+req.body.msg, { flag: 'a+' }, err => {});
      res.send("Message Sent");
    } catch (err) {
      console.error(err);
    }
})

app.get("/msg", function (req, res) {
  res.send(fs.readFileSync('msg.txt', 'utf8'));
})

app.listen(process.env.PORT || 5000);