const router = require("express").Router();
const Course = require("../models/Course");
const Student = require("../models/student");

router.get("/studentData/:id", (req, res) => {
  Student.find({ _id: req.params.id }, (err, student) => {
    if (err) {
      console.log(err);
    } else res.send(student[0]);
  });
});

router.get("/myPannel/:id", (req, res) => {
  Student.find({ _id: req.params.id }, (err, student) => {
    if (err) {
      console.log(err);
    } else res.send(student[0].pannel);
  });
});

router.delete("/deleteFromMyPannel/:idStudent/:idCours", async (req,res)=>{
  const {idStudent,idCours} =  req.params
  var student = await Student.findById({_id : idStudent});
 
   student.pannel=student.pannel.filter(element=>{
    element._id!==idCours
    })

  var updatedStudent = Student.findByIdAndUpdate({_id:idStudent},student , {new: true})
   res.send(updatedStudent)
 })

 
router.get("/", (req, res) => {
  Course.find({}, (err, course) => {
    if (err) {
      console.log(err);
    } else {
      res.send(course);
    }
  });
});

router.get("/studentData/:id", (req, res) => {
  Student.find({ _id: req.params.id }, (err, student) => {
    if (err) {
      console.log(err);
    } else res.send(student[0]);
  });
});

router.put("/editProfilPicture/:id", (req, res) => {
  console.log(req.body.profilePicture);
  console.log(req.params.id);
  Student.findOneAndUpdate(
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
router.get("/free", async (req, res) => {
  var courses = await Course.find({ price: 0 });
  res.send(courses);
});

router.put("/editProfil/:id", async (req, res) => {
  const data = ({
    firstName,
    lastName,
    username,
    password,
    email,
    education,
    phoneNumber,
  } = req.body);

  for (let k in data) {
    if (data[k] === "") {
      delete data[k];
    }
  }

  var user = await Student.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
  }).select("-password");
  console.log(user);

  res.send(user);
});

router.put("/changePassword/:id", async (req, res) => {
  console.log(req.body);
  console.log(req.params);
  const auth = ({ oldPassword, newPassword } = req.body);
  var result = await Student.findById({ _id: req.params.id });
  const success = await bcrypt.compare(auth.oldPassword, result.password);
  if (success) {
    var hash = await bcrypt.hash(auth.newPassword, 12);
    const user = await Student.findOneAndUpdate(
      { _id: req.params.id },
      { password: hash },
      { new: true }
    ).select("-password");
    res.send(user);
  } else {
    res.send("error");
  }
});

router.post("/addToPannel/:course/:user", async (req, res) => {
  var courseId = req.params.course;
  var userId = req.params.user;
  var course = await Course.findById({ _id: courseId });
  var student = await Student.findById({ _id: userId });
  student.pannel.push(course);
  var newStudent = await Student.findByIdAndUpdate({ _id: userId }, student, {
    new: true,
  });
  res.send(newStudent);
});

module.exports = router;
