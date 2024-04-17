const express = require("express");
const router = express.Router();
const Answer = require("../models/sudoku.js");
const create2DArray = require("../public/js/find.js");
let User = require("../models/user.js");

router.get("/question", (req, res) => {
  if (!req.isAuthenticated()) {
    return res.render("login/signup.ejs");
  }
  let { id } = req.user;
  // ("success", "Welcome to sudoku solver");
  res.render("login/sudoku.ejs", { id });
});

router.get("/solution", (req, res) => {
  if (!req.isAuthenticated()) {
    req.session.redirectUrl = req.originalUrl;
    if (req.session.redirectUrl) {
      res.locals.redirectUrl = req.session.redirectUrl;
    }
    return res.render("login/signup.ejs");
  }
  res.render("login/solution.ejs");
});

router.post("/:id/new", async (req, res) => {
  if (!req.isAuthenticated()) {
    return res.render(res.locals.redirectUrl);
  }
  // let solution;
  let { id } = req.params;
  let ans = req.body;
  try {
    if (isObject(ans)) {
      let aray = [];
      aray.length = 81;
      for (let i = 0; i < 81; i++) {
        if (ans[i + 1].length > 0) {
          aray[i] = parseInt(ans[i + 1]);
        } else {
          aray[i] = 0;
        }
      }
      solution = create2DArray(aray);

      let newans = new Answer({
        answer: solution.toString(),
      });

      let user = await User.findById(id);
      user.answers.push(newans);
      await user.save();
      await newans.save();
      // await user.save();
    }
    res.redirect("/sudoku/solution");
  } catch (er) {
    res.send("<H1>Cannot submit empty Sudoku<H1>");
  }
});

router.get("/card", async (req, res) => {
  if (!req.isAuthenticated()) {
    return res.render("login/signup.ejs");
  }
  let { id } = req.user;
  let user = await User.findById(id);
  let arr = user.answers;
  let answers = [];
  let created = [];
  let name = user.username;
  for (x of arr) {
    let data = await Answer.findById(x);
    answers.push(data.answer);
    created.push(data.createdAt);
  }
  res.render("login/card.ejs", { answers, created, name });
});
function isObject(obj) {
  let a = "";
  for (let i = 0; i < 81; i++) {
    if (obj[i + 1].length > 0) {
      a += obj[i + 1];
    }
  }
  if (a.length > 0) {
    return true;
  } else {
    return false;
  }
}
module.exports = router;
