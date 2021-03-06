// Requiring necessary npm packages
const express = require("express");
const session = require("express-session");
// Requiring passport as we've configured it
const passport = require("./config/passport");
const handlebars = require("express-handlebars");
const mysql2 = require("mysql2");

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 8085;
const db = require("./models");

// Creating express app and configuring middleware needed for authentication
const app = express();
//Sets our app to use the handlebars engine

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// app.engine(
//   "handlebars",
//   handlebars({
//     extname: "handlebars",
//     defaultLayout: "main",
//     layoutsDir: __dirname + "/views/layouts/",
//   })
// );
// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "handlebars");
app.engine(
  "handlebars",
  handlebars({
    defaultLayout: "main",
    partialsDir: __dirname + "/views/partials/",
  })
);
app.set("view engine", "handlebars");

// Requiring our routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
