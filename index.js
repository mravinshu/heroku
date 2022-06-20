const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Welcome Aalu");
});

app.get("/aalu", function (req, res) {
    res.send("Ice Cream says Hey!");
})

app.listen(process.env.PORT || 5000);