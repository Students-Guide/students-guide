const router = require("express").Router();
const Course = require("../models/Course")
const Likes = require("../models/likes")
const Student = require("../models/student")
const moment = require("moment")


router.get("/premium", (req, res) => {
  Course.find({ price: { $gt: 0}}, (err, courses) => {
    if (err) {
      console.log(err);
    } else {
      res.send(courses);
    }
  });
});


router.post("/post",  (req, res) => {
    console.log('req.body :' ,req.body)
 Course.create (req.body,(err,course)=>{
        if(err){
          console.log(err)
        }
        else{
          res.send(course)
        }
      })   
      })

      .get("/get/:id"  , async (req,res)=>{
    
        var id = req.params.id
        // console.log(typeof(id));
        var result = await Course.find({owner : id})
        
        res.send(result)
        
      })
      router.get("/getcourse/:id", (req,res)=>{
       Course.find({_id:req.params.id},(err,course)=>{
         if(err){
           console.log(err)
         }
         else res.send(course[0])
       })
      })
      
      router.delete("/deleteCourse/:id", (req,res)=>{
        console.log(req.params.id);
        Course.findOneAndDelete({_id:req.params.id},(err)=>{
          if(err){
            console.log(err)
          }
          else res.send('course deleted')
        })
       })
       
       router.put("/editCourse/:id",  (req, res) => {
      
         const data = ({
          title,
          description,
          price
        } = req.body);
      
        for (let k in data) {
          if (data[k] === "") {
            delete data[k];
          }
        }
        Course.findOneAndUpdate({ _id: req.params.id }, req.body, {
          new: true,
        },(err,result)=>{
          if(err){
            console.log(err)
          }
          else res.send(result)
        })
       })
       
router.post("/view/:id", async (req , res)=>{
   var id = req.params.id; 
   const course = await Course.findOne({_id : id});
   course.views+=1;
   const upDatedCourse = await Course.findByIdAndUpdate({_id : id} ,course, {new : true})
  res.send(upDatedCourse)
   
})
router.get("/liked/:id/:user", async (req,res)=>{
  var id = req.params.id;
  var user = req.params.user;
  var liked = await Likes.findOne({course:id,students:user})
   res.send(liked)
})

router.get("/like/:id/:user", async (req,res)=>{
  var id = req.params.id;
  var user = req.params.user;

  var liked = await Likes.findOne({course:id,students:user})
  if(!liked)
  {
    var newLiked = await Likes.create({course:id,students:user})
    var cors = await Course.findById({_id : id})
    cors.likes =  cors.likes+1
    var x = await Course.findByIdAndUpdate({_id : id} , cors , {new:true})
    res.send(x)
  }
})


router.get("/unlike/:id/:user", async (req,res)=>{
  var id = req.params.id;
  var user = req.params.user;
  var liked = await Likes.findOne({course:id,students:user})
  if(liked)
  {   
     var newLiked = await Likes.findOneAndRemove({course:id,students:user})
    var cors = await Course.findById({_id : id})
    cors.likes =  cors.likes-1
    var x = await Course.findByIdAndUpdate({_id : id} ,cors,{new:true})

    res.send(x)
 
  }
})
router.post("/comment/:id/:user", async (req,res)=>{
  var id = req.params.id;
  var user = req.params.user;

  var student  = await Student.findById({_id : user}) 
  var comment = {student : student.username , profilePicture :student.profilePicture ,comment:req.body.text,createdAt:Date.now()}
  console.log(comment)
  var corse = await Course.findById({_id :id})
  corse.comments.push(comment)
  var updated = await Course.findByIdAndUpdate({_id :id} ,corse, {new:true})
   
  res.send(updated.comments)
})


router.post("/addtopannel/:id/:user",async(req,res)=>{
  var id = req.params.id;
  var user = req.params.user;
  var corse = await Course.findById({_id :id})
  var student = await Student.findById({_id : user})
  student.pannel.push(corse)
  var newstudent = await Student.findByIdAndUpdate({_id :user},student, {new : true})
  res.send(newstudent)
})



      module.exports = router