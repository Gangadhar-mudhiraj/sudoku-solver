const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const passport = require("passport");
const localStratergy = require("passport-local");

router.get("/", (req, res) => {
  res.render("login/login.ejs");
});

router.post("/signup", async (req, res, next) => {
  let { email, username, password } = req.body;
  let user = new User({
    email: email,
    username: username,
  });
  registerUser = await User.register(user, password);
  // res.redirect("/sudoku/question");
  req.login(registerUser, (err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/sudoku/question");
  });
});
router.get("/login", (req, res) => {
  res.render("login/signup.ejs");
});

router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/user/login",
  }),
  async (req, res) => {
    
    res.redirect("/sudoku/question");
  }
);

router.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/user/login");
  });
});

module.exports = router;
