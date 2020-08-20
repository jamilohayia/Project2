// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", (req, res) => {
    // index page
    // if (req.user) {
    //   res.redirect("/indexlogged");
    // }
    res.render("index", {});
  });

  app.get("/login", (req, res) => {
    // log in page
    // if (req.user) {
    //   res.redirect("/index");
    // }
    res.render("login", {});
  });

  app.get("/album", (req, res) => {
    // album page
    // if (req.user) {
    //   res.redirect("/album");
    // }
    res.render("album", {});
  });

  app.get("/indexlogged", (req, res) => {
    // playlist page
    // if (req.user) {
    //   res.redirect("/indexlogged");
    // }
    res.render("indexlogged", { layout: "indexlogged.handlebars" });
  });

  app.get("/song", (req, res) => {
    // song page
    // if (req.user) {
    //   res.redirect("/indexlogged");
    // }
    res.render("song", {});
  });

  app.get("/signup", (req, res) => {
    // signup page
    // if (req.user) {
    //   res.redirect("signup");
    // }
    res.render("signup", {});
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/indexlogged", isAuthenticated, (req, res) => {});
};
