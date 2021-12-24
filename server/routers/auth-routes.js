const router = require("express").Router();
const passport = require("passport");
const Teacher = require("../models/teacher");
const Student = require("../models/student");
const ResetPassword = require("../models/resetPassword");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const { maxAge, secret } = require("../config/settings");
const { simplifyError } = require("../helpers/errorParser");
const { loginParser } = require("../helpers/loginParser");
const { nodeMailer } = require("../helpers/nodeMailer");

const createToken = (id) => {
  return jwt.sign({ id }, secret, {
    expiresIn: maxAge,
  });
};

// prettier-ignore
router.post("/teacher/signin", async (req, res, next) => {
  const { username_or_email , password } = req.body
  let filter = loginParser(username_or_email.toLowerCase()) // login should always be lowercase

  try {

    const loggedInTeacher = await Teacher.login(filter, password)  // hashed password is inside this constant
    const foundTeacher = await Teacher.findById(loggedInTeacher._id).select("-password") // no hashed password here

    const token = createToken(foundTeacher._id)
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 , sameSite: true })
    const response = {data:foundTeacher , jwt: token}
    res.status(201).json(response)
  } catch (error) {
    console.log(error);
    res.status(201).json(simplifyError(error))
  }

})

// prettier-ignore
router.post("/student/signin", async (req, res, next) => {
  const { username_or_email, password } = req.body
  let filter = loginParser(username_or_email.toLowerCase())  // login should always be lowercase

  try {
    const loggedInStudent = await Student.login(filter, password) // hashed password is inside this constant
    const foundStudent = await Student.findById(loggedInStudent._id).select("-password") // no hashed password here

    const token = createToken(foundStudent._id)
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000, sameSite: true })
    const response = {data:foundStudent, jwt:token}
    res.status(201).json(response);

  } catch (error) {
    res.json(simplifyError(error))
  }

})

// signup / registration for Teachers & Students
// prettier-ignore
router.post("/signup", async (req, res, next) => {

  let { firstName, lastName, username, email, role, password , courses, subject, text, html} = req.body;
  console.log(req.body)
  if (!subject) subject = "Welcome to students guide";
  if (!text) text = "";
  const init_HTML_Message = (firstName, lastName) =>
  `<p>Dear ${firstName} ${lastName}, Welcome to students guide Website!</p>
  <p>You are now part of the students guide family! Get ready to depart on an exciting journey with us!</p>
  <p>To make things extra special for you, starting today, we will send you a series of exclusive emails with amazing tips and tricks to get the most out of your account.</p>
  <p>Get ready!</p>
  <p>Not sure where to start? Make sure to visit our free courses!</p>
  <p>If you prefer something more personal, you can always contact our support team through live chat or at.</p>
  <p>Best,</p>
  <p>The students guide team</p>`;
  if (!html) {
    html = init_HTML_Message(
      firstName,
      lastName,
    );
  }
    const newMail = { email, subject, text, html };

  try {
    if(role.toLowerCase() === "false"){
      const savedTeacher = await Teacher.create({ firstName, lastName, username, email, password , courses })
      const foundTeacher = await Teacher.findById(savedTeacher._id).select("-password")
      nodeMailer(newMail);
      res.status(201).json(foundTeacher)

    } else if (role.toLowerCase() === "true") {
      const savedStudent = await Student.create({ firstName, lastName, username, email, password })
      const foundStudent = await Student.findById(savedStudent._id).select("-password")
      nodeMailer(newMail);
      res.status(201).json(foundStudent)
    }

  } catch (error) {
    res.status(400).json(simplifyError(error))
  }

})

router.get("/resetpassword/:hash", async (req, res) => {
  const { hash } = req.params;
  res.send(hash);
});

router.post("/resetpassword/", async (req, res) => {
  try {
    const { password, hash } = req.body;
    const foundResetPassword = await ResetPassword.findOne({ hash });
    console.log(foundResetPassword, "AAAAAAAAAAAAAAAAA");
    const foundTeacher = await Teacher.findOne({
      email: foundResetPassword.email,
    });
    if (foundResetPassword && foundResetPassword.role === "teacher") {
      const hashedPassword = await bcrypt.hash(password, 10);
      const updatedTeacher = await Teacher.findByIdAndUpdate(
        { _id: foundTeacher._id },
        { password: hashedPassword },
        { new: true }
      ).select("-password");

      res.json(updatedTeacher);
    } else if (foundResetPassword && foundResetPassword.role === "student") {
      const hashedPassword = await bcrypt.hash(this.password, 10);
      const updatedStudent = await Student.findByIdAndUpdate(
        { _id: foundResetPassword.id },
        { password: hashedPassword },
        { new: true }
      ).select("-password");

      res.json(updatedStudent);
    }
  } catch (error) {
    console.log(error);
  }
});

router.post("/forgotpassword", async (req, res) => {
  // Retreive data from req.body with destructuring
  let { role, email, subject, text, html } = req.body; // if you rename one of these variable, the sever will brake
  //
  // if the email is not specified from the font-end side, it will take a default testing email:
  if (!email) email = "achraf.karmous@gmail.com";
  //
  // if the subject is not specified from the font-end side, it will take a default value as a boilerplate:
  if (!subject) subject = "Reset password instructions";
  //
  // if the text is not specified from the font-end side, it will take a default value as a boilerplate:
  if (!text) text = ""; // this is at the same time useless & usefull later, the text variable should be specified (even as an empty value), because, if we pass the content of the html variable as a text, the content of html will be shown with the html tags hardcoded
  //
  // if the html is not specified from the font-end side, it will take a default value as a boilerplate: (ARROW FUNCTION !!!!)
  const init_HTML_Message = (firstName, lastName, hash_link) =>
    `<p>Hello ${firstName} ${lastName}</p>
    <p>Someone has requested a link to change your password, and you can do this through the link below.</p>
    <a href="http://localhost:4200/resetpassword/${hash_link}">Change my password</a>
    <p>If you didn't request this, please ignore this email.</p>
    <p>Your password won't change until you access the link above and create a new one.</p>`;

  // generate a new  random hash_link
  let hash_link = require("crypto").randomBytes(64).toString("hex");

  // check if the one who requested for reseting password is a teacher or a student:
  // if the teacher requested for reseting password & tye email is at least not falsy value
  if (role.toLowerCase() === "teacher" && email) {
    // look inside the database if that email is registred
    let foundTeacher = await Teacher.findOne({ email });

    // here, we're sure that we got a response from mongodb but ...
    // before we reset the password, we must be sure that the email already exists
    if (foundTeacher) {
      // if the hash_link already exists in the databse, then generate a new hash_link
      while (await ResetPassword.findOne({ hash: hash_link })) {
        // generate a new random hash_link (very long haxadecimal string)
        hash_link = require("crypto").randomBytes(64).toString("hex");
      }

      // creating a new password reseter
      const resetPassword = {
        id: foundTeacher._id,
        role: role.toLowerCase(),
        email,
        hash: hash_link,
      };

      // save the password reseter into the database
      const createdResetPassword = await ResetPassword.create(resetPassword);

      // if the html is not specified from the font-end side, it will take a default value as a boilerplate
      if (!html) {
        html = init_HTML_Message(
          foundTeacher.firstName,
          foundTeacher.lastName,
          hash_link
        );
      }

      // we create a newMail settings, which take, the email of person who lost his password, the subject of the mail, the text & the html that will be shown when the person receive an email from our server
      const newMail = { email, subject, text, html };
      //
      // this function will send an email directly to the user

      nodeMailer(newMail);
      //
      // send a response to the front end saying that the server did his job
      res
        .status(201)
        .json(
          "We've sent to you an email containing new link for reseting password for your teacher account"
        );
    } else {
      res.send("That email is not registered");
    }
  } else if (role.toLowerCase() === "student" && email) {
    // look inside the database if that email is registred
    let foundStudent = await Student.findOne({ email });
    // here, we're sure that we got a response from mongodb but ...
    // before we reset the password, we must be sure that the email already exists
    if (foundStudent) {
      // if the hash_link already exists in the databse, then generate a new hash_link
      while (!(await ResetPassword.findOne({ hash: hash_link }))) {
        // generate a new random hash_link (very long haxadecimal string)
        hash_link = require("crypto").randomBytes(64).toString("hex");
      }

      // creating a new password reseter
      const resetPassword = {
        id: foundStudent._id,
        role: role.toLowerCase(),
        email,
        hash: hash_link,
      };

      // save the password reseter into the database
      const createdResetPassword = await ResetPassword.create(resetPassword);

      // if the html is not specified from the font-end side, it will take a default value as a boilerplate
      if (!html) {
        html = init_HTML_Message(
          foundStudent.firstName,
          foundStudent.lastName,
          resetPassword
        );
      }

      // we create a newMail settings, which take, the email of person who lost his password, the subject of the mail, the text & the html that will be shown when the person receive an email from our server
      const newMail = { email, subject, text, html };
      //
      // this function will send an email directly to the user
      nodeMailer(newMail);
      //
      // send a response to the front end saying that the server did his job
      res
        .status(201)
        .json(
          "We've sent to you an email containing new link for reseting password for your student account"
        );
    } else {
      res.send("That email is not registered");
    }
  }

  // followed this guide: https://mailtrap.io/blog/nodemailer-gmail/
});

// auth with google
/***********************************************************************************
    explanation: when a user click on "signin with google +"
    the router.get("/google", ...) will execute the middleware passport.authenticate()
    using the google authentication strategy ("google" as a 1st parameter)
    and redirect the user to the login interface of google
    then when the user succeded to signin with google,
    google will redirect the user to this endpoint /auth/google/redirect
/***********************************************************************************/
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

// callback route for google to redirect to ...
/***********************************************************************************
    explanation: when a user is redirected to /auth/google/redirect after been
    logged in with google authentication ...
    This router.get("/google/redirect", ...) will execute 2 middlewares:

    1) The passport.authenticate() which exchange the code in the url,
    with a user data from google, then the google will send back the data to the server,
    that same user's data, will be attached to the request of the next middleware

    2) Then the callback function at the 3rd parameter, is recieving the response
    from the google as a request (1st parameter of the callback function),
    and must give to the user a response
/***********************************************************************************/
router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
  console.log("object", req.user);
  // res.send(req.user)
  res.redirect("/profile");
});

// auth logout (when a user click on logout)
router.get("/logout", (req, res) => {
  // handle with passport
  // res.send("logging out")
  req.logout(); // this method will kill the cookie life / make it expired
  res.cookie("jwt", "", { maxAge: 1 });
  res.redirect("/");
  // res.status(201).json("disconnected")
});

module.exports = router;
