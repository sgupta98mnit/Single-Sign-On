const express = require('express')
const app = express()
const port = 3000
const session = require('express-session')
const passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;

app.use(session({
  secret: "secret",
  resave: false ,
  saveUninitialized: true ,
}))

app.use(passport.initialize()) // init passport on every route call
app.use(passport.session())    //allow passport to use "express-session"

// passport.use(new GoogleStrategy({
//   clientID:     "GOOGLE_CLIENT_ID",
//   clientSecret: "GOOGLE_CLIENT_SECRET",
//   callbackURL: "http://localhost:3001/auth/google/callback",
//   passReqToCallback   : true
// }, () => {} ));

CognitoOAuth2Strategy = require('cognito-passport-oauth2');

const options = {
  callbackURL: 'http://localhost:4001/auth/callbacks', //Your callback url
  clientDomain: 'https://yourdomain.auth.eu-west-1.amazoncognito.com', //Your cognito user pool domain
  clientID: 'your cognito app client id',
  clientSecret: 'your cognito app client secret',
  region: 'eu-west-1', //your region
  passReqToCallback: true
};

app.listen(3000, () => console.log(`Server started on port 3000...`));

app.get('/auth/google',
  passport.authenticate('google', { scope:
      [ 'email', 'profile' ] }
));

passport.use('cognito', new CognitoOAuth2Strategy(options, () => {}));

app.get('/auth/login', passport.authenticate('cognito'));