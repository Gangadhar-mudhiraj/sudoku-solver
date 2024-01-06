const express = require("express");
const app = express();
const path = require("path");

// getting-started.js
// const mongoose = require('mongoose');

// main().catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb://127.0.0.1:27017/test');

//   // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
// }

app.set("viewengine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => {
    res.send("Listening to server");
});
app.get("/sudoku", (req, res) => {
    res.render("index.ejs");
});
app.get("/game", (req, res) => {
    res.render("game.ejs");
});
app.get("/history", (req, res) => {
    res.render("history.ejs");
})
app.listen(8080, (req, res) => {
    console.log("Server started");
})