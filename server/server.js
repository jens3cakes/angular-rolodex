require('dotenv').config();
const http = require('http')

const express = require('express');
const app = express();
const PORT = process.env.EXPRESS_HOST_PORT || 8989;
const path = require('path')

const Contact = require('../server/db/Models/Contact');
const User = require('../server/db/Models/User');

const contactsRoute = require('./routes/contactsRoute');
const usersRoute = require('./routes/userRoute')

const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const session = require('express-session');
const LocalStrategy = require('passport-local').Strategy;
const redis = require('connect-redis')(session);

app.use(express.static(path.join(__dirname + 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
  
  store: new redis({
    url: process.env.REDIS_URL,
    logErrors: true
  }),
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize(console.log('init')));
app.use(passport.session(console.log('session')));

passport.serializeUser((username, done) => {
  console.log(username)

  done(null, username)
});

passport.deserializeUser((user, cb) => {
  console.log('deserialize', user)
  return cb(null, user)
})

passport.use('local', new LocalStrategy((username, password, done) => {
  new User()
    .where({ username })
    .fetch()
    .then((user) => {
      console.log(user)
      if (!user) {
        return done(null, false, { message: `Incorret userename/password.` })
      }
      else {
        let userObj = user.serialize();
        bcrypt.compare(password, userObj.password)
          .then((res) => {
            if (res) { return done(null, userObj); }
            else {
              return done(null, false, { message: `Invalid username/password` })
            }
          });
      }
    });
}));

app.post('/api/users/login',passport.authenticate('local', {failureRedirect: '', failureMessage: 'Username or password, error.'}),
function(req, res){
  res.send(req.user)

})
app.use('/api/contacts', contactsRoute);
app.use('/api/users', usersRoute)



app.get('/smoke', (req, res) => {
  res.send('Here is the fire')
})

const server = http.createServer(app);


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})