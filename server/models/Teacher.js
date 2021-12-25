var mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

/***
  required: if the field not specified (during a creation of a new teacher) It will throw the error message as a response
  lowercase: if there's a character that is not lowercase, it will be lowercased automaticly by mongoose before being saved
  immutable: if set to true, that means, it will not be changed after being initialized, & will not cause any error
 */

var TeacherSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please enter your first name"],
    },
    lastName: {
      type: String,
      required: [true, "Please enter your family name"],
    },
    username: {
      type: String,
      required: [true, "Please enter a username"],
      unique: [
        true,
        "There's already an account registered with that username",
      ],
      lowercase: true, // that means, it will be automatically lowercased
    },
    email: {
      type: String,
      required: [true, "Please enter an email"],
      lowercase: true, // that means, it will be automatically lowercased
      validate: [isEmail, "Please enter a valid email"],
    },
    password: {
      type: String,
      required: [true, "Please enter a password"],
      minlength: [6, "Minimum password length is 8 characters"],
    },
    phoneNumber: {
      type: Number,
    },
    profileDescription: {
      type: String,
    },
    profilePicture: {
      type: String,
      default:
        "https://imgr.search.brave.com/DB3fdGIXuni2RG9nqNz2IRXGdEOaFtDcSfmFFwXxdug/fit/1200/1200/ce/1/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvcHJl/dmlld3MvMDAwLzM3/OC84OTYvb3JpZ2lu/YWwvYmxvY2stdXNl/ci12ZWN0b3ItaWNv/bi5qcGc",
    },
    github: {
      type: String,
    },
    facebook: {
      type: String,
    },
    linkedin: {
      type: String,
    },
    courses: [],
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

// prettier-ignore
TeacherSchema.statics.login = async function ( filter, plainTextPassword ) {

  const foundTeacher = await this.findOne(filter);
  if (foundTeacher) {
    const success = await bcrypt.compare(plainTextPassword, foundTeacher.password);
    if (success) {
      return foundTeacher;
    }
    throw Error("Incorrect password");
  }
  throw Error("Incorrect username or email");
};

TeacherSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

module.exports = mongoose.model("Teacher", TeacherSchema);
