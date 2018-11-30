const User = require('../models/User')
const passport = require('passport')
// const passportLocalMongoose = passport.passportLocalMongoose

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


module.exports = passport;