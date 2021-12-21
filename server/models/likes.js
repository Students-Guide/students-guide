const mongoose = require("mongoose");



const likeSchema = mongoose.Schema(
  {
    course: String,//id
    students: [String]//array of id
  },

);

module.exports = mongoose.model("Likes", likeSchema);
