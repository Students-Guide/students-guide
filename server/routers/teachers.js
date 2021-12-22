const router = require("express").Router();
const Teacher = require("../models/teacher");
const Course = require("../models/Course");
const bcrypt = require("bcrypt");

router.get("/teacherData/:id", (req, res) => {
  Teacher.find({ _id: req.params.id }, (err, teacher) => {
    if (err) {
      console.log(err);
    } else res.send(teacher[0]);
  });
});

router.put("/editProfil/:id", async (req, res) => {
  try {
    const data = {
      firstName,
      lastName,
      username,
      password,
      email,
      profileDescription,
      phoneNumber,
    } = req.body;
  
    for (let k in data) {
      if (data[k] === "") {
        delete data[k];
      }
    }
  
    var user = await Teacher.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    }).select("-password");
    console.log(user);
  
    res.send(user);
  } catch (error) {
    console.log(error)
  }
});

router.put("/changePassword/:id", async (req, res) => {
  console.log('hhhhhhhhh',req.body);
  console.log('kkkkkkkkk',req.params);
  const auth = ({ oldPassword, newPassword } = req.body);
  var result = await Teacher.findById({ _id: req.params.id });
  const success = await bcrypt.compare(auth.oldPassword, result.password);
  if (success) {
    var hash = await bcrypt.hash(auth.newPassword, 12);
    const user = await Teacher.findOneAndUpdate(
      { _id: req.params.id },
      { password: hash },
      { new: true }
    ).select("-password");
    res.send(user);
  } else {
    res.send("error");
  }
});

router.put("/editProfilPicture/:id", (req, res) => {
  console.log(req.body.profilePicture);
  console.log(req.params.id);
  Teacher.findOneAndUpdate(
    { _id: req.params.id },
    { profilePicture: req.body.profilePicture },
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

module.exports = router;
