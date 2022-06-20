const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("WORKING!!!");
});

app.get("/aalu", function (req, res) {
    res.send("Aalu is a good dog");
})

app.listen(process.env.PORT || 5000);