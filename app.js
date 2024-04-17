const express = require("express");
const app = express();
const path = require("path");
const ejsMate = require("ejs-mate");
const session = require("express-session");
const sudoku = require("./routes/sudoku.js");
const passport = require("passport");
const localStratergy = require("passport-local");
const user = require("./routes/user.js");
const User = require("./models/user.js");

const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/SudokuSolver");
}
main()
  .then(() => console.log("Connected to db"))
  .catch((err) => console.log(err));

app.engine("ejs", ejsMate);
app.set("viewengine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: true }));

const sessionOption = {
  secret: "Secret",
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};

app.use(session(sessionOption));

// app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStratergy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// app.use((req, res, next) => {
//   res.locals.success = ("success");
//   next();
// });
app.use((req, res, next) => {
  res.locals.curUser = req.user;
  next();
});

app.get("/home", (req, res) => {
  res.render("./login/home.ejs");
});

app.use("/user", user);

app.use("/sudoku", sudoku);

app.listen(8080, (req, res) => {
  console.log("Server started");
});
