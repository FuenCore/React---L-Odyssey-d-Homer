const express = require("express");
const router = express.Router();
const connection = require("../helpers/db");

const bcrypt = require("bcrypt");

const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const jwt = require("jsonwebtoken");
const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;

passport.use(new LocalStrategy({
  usernameField: "email",
  passwordField: "password",
  session: false
},
  function(email, password, cb) {
    connection.query(`SELECT * FROM users WHERE email="${email}"`, (err, user) => {
      if(err) {
        return cb(err);
      } if (!user) {
        return cb(null, false, {flash: "Invalid email"})
      }
      let isSame = bcrypt.compareSync(password, user[0].password)
      if(!isSame) {
        return cb(null, false, { flash: "Invalid password"})
      }
      return cb(null, user);
    }
    )
  }
))

passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: "pass"
}, function(jwtPayload, cb) {
  return cb(null, jwtPayload)
})
)

router.post('/signin', (req, res) => {
  passport.authenticate("local", (err, user, info) => {
    const userData = {
      email: user[0].email,
      password: user[0].password
    };
    if(err) return res.status(500).send(err);
    if(!user) return res.status(400).json({ message: info.message});
    const token = jwt.sign(userData, "pass");
    return res.json({ user, token })
  })(req, res)
})

// router.post('/signin', function(req, res) {
//   passport.authenticate('local',(err, user, info) => { 
//     if(err) return res.status(500).send(err) 
//     if (!user) return res.status(400).json({message: info.message});  
//     return res.json({user}); 
//  })(req, res)
// });

router.post("/signup", function(req, res, next) {
  let hash = bcrypt.hashSync(req.body.password, 10);
  const form  = {
    email: req.body.email,
    password: hash,
    firstname: req.body.firstname,
    lastname: req.body.lastname
  };
  const request = `INSERT INTO users SET ?`;
      connection.query(request, form, function(error, results, fields) {  
  if (error)
    res.status(500).json({ flash:  error.message });
  else
    res.status(200).json({ flash:  "User has been signed up !" });
    res.end()
  })
});
    
module.exports = router;
