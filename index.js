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

app.get("/*", (req, res) => {
  res.send("4040");
})  
 
//helo