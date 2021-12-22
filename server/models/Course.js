var mongoose = require("mongoose");

/***
  required: if the field not specified (during a creation of a new teacher) It will throw the error message as a response
  lowercase: if there's a character that is not lowercase, it will be lowercased automaticly by mongoose before being saved
  immutable: if set to true, that means, it will not be changed after being initialized, & will not cause any error
 */

var CourseSchema = mongoose.Schema(
  {
    title: {
      type: String,
    },
    owner: {
      type: String,
    },
    ownerPicture: {
      type: String,
    },
    category: {
      type: String,
    },
    type: {
      type: String,
    },
    object:{
      type:String, 
     },
    price: {
      type: Number,
    },
    views: {
      type: Number,
    },
    likes: {
      type: Number,
    },
    description:{
      type: String,
    },
    comments: [],
    thumbnail: {
      type: String,
    },
    buyers: [],
    createdAt: {
      type: Date,
      immutable: true,
      default: () => Date.now(),
    },
    updatedAt: {
      type: Date,
      default: () => Date.now(),
    },
  },
  { versionKey: false } // to not save the __v attribute ... // Source: https://mongoosejs.com/docs/guide.html#versionKey
);

module.exports = mongoose.model("Course", CourseSchema);
