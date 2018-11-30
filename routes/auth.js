const express = require('express');
const router = express.Router();
const User = require('../models/User');
const passport = require('passport');

router.get('/signup',(req, res, next)=>{
  res.render('auth/signup');
})

router.post('/signup',(req, res, next)=>{
  User.register(req.body, req.body.password)
    .then(user => {
      res.send("Bienvenido");
    })
    .catch(e => {
      console.log(e);
    })
})

module.exports = router;