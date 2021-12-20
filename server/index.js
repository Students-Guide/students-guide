/********************* Requires *********************/
var express = require("express");
var app = express();
var cors = require("cors");
app.use(cors({ credentials: true, sameSite: true }));
const { port, database, keys } = require("./config/settings");
const passport = require("passport");
const passportSetup = require("./config/passport-setup");

const cookieSession = require("cookie-session");
const mongoose = require("mongoose");

/***************** Including Routes *****************/
const auth = require("./routers/auth-routes");
const courses = require("./routers/courses");
const teachers = require("./routers/teachers");
const students = require("./routers/students");

/********************* Database *********************/
mongoose.Promise = global.Promise;
mongoose
  .connect(database.mongodb.uri)
  .then((result) =>
    app.listen(port, () =>
      console.log(`listening on port http://localhost:${port} !`)
    )
  )
  .catch((err) => console.log(err));

/******************** Middleware ********************/

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// setting up the age of the cookie & the key to encrypt the cookie before sending it to the browser
app.use(
  cookieSession({
    // maxAge: 24 * 60 * 60 * 1000, // day in milliseconds
    maxAge: 10 * 1000, // 10 seconds in milliseconds
    keys: [keys.session.cookieKey],
  })
);

// initialize passport to avoid: TypeError: req.logIn is not a function
app.use(passport.initialize());
app.use(passport.session()); // important too if we want to make the passport.deserializeUser() execute the callback function

/********************** Routes **********************/

app.use("/auth", auth);
app.use("/courses", courses);
app.use("/teachers", teachers);
app.use("/students",students);
/**** Middleware that Catch the "Wrong Endpoint" ****/

// Catch 404 errors and forward them to error handler
app.use((req, res, next) => {
  const err = new Error("Not found");
  err.status = 404;
  // next(err);
});

/************** Error handler function **************/
// Error handler function
app.use((err, req, res, next) => {
  const error = app.get("env") === "development" ? err : {};
  const status = err.status || 500;

  // respond to client
  res.status(status).json({
    error: {
      message: error.message,
    },
  });
  // Respond to ourselves
  console.error(err);
});

/**************** Listening Requests ****************/

// app.listen(port, function () {
//   console.log(`listening on port http://localhost:${port} !`);
// });
