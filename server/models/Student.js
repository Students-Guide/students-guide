var mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

/***
  required: if the field not specified (during a creation of a new teacher) It will throw the error message as a response
  lowercase: if there's a character that is not lowercase, it will be lowercased automaticly by mongoose before being saved
  immutable: if set to true, that means, it will not be changed after being initialized, & will not cause any error
 */

var StudentSchema = mongoose.Schema(
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
      lowercase: true,
    },
    email: {
      type: String,
      required: [true, "Please enter an email"],
      lowercase: true,
      validate: [isEmail, "Please enter a valid email"],
    },
    password: {
      type: String,
      required: [true, "Please enter a password"],
      minlength: [6, "Minimum password length is 8 characters"],
    },
    phone_number: {
      type: String,
    },
    education: {
      type: String,
    },
    profilePicture: {
      type: String,
    },
    pannel: [],
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
StudentSchema.statics.login = async function ( filter, plainTextPassword ) {

  const foundStudent = await this.findOne(filter);
  if (foundStudent) {
    const success = await bcrypt.compare(plainTextPassword, foundStudent.password);
    if (success) {
      return foundStudent;
    }
    throw Error("Incorrect password");
  }
  if("username" in filter) {
    throw Error("Incorrect username");
  } else if ("email" in filter) {
    throw Error("Incorrect email");
  }
};

StudentSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

module.exports = mongoose.model("Student", StudentSchema);
