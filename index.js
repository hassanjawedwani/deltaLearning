const express = require('express');
const app = express();
const port = 8080;
app.listen(port, () => {
  console.log("Server is listening...");
})

const path = require("path");
app.set("views", path.join(__dirname, "/views"));

app.set("view engine", "ejs");



app.get("/", (req, res) => {
  res.render("home.ejs");
})  

app.get("/about", (req, res) => {
  res.send("about page");
})  

app.get("/dice", (req, res) => {
  const val =  Math.ceil(Math.random()*6) ;
  res.render("Dice", {val})
})  

app.get("/ig/:username", (req, res) => {
  const {username} = req.params;
  const instaData = require('./data.json');
  const data = instaData[username];
  console.log(data)
  res.render("insta", {data})
})  


