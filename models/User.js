const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
  name: String,
  email: String,
  // password: String,
  isLaunderer: {
    type: String,
    enum: ['on', 'off'],
    default: 'on'
  },
  fee: {
    type: Number,
    default: null
  }
}, {
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: "updatedAt"
  }
})

userSchema.plugin(passportLocalMongoose, { usernameField: 'email'});
module.exports = mongoose.model("User", userSchema);