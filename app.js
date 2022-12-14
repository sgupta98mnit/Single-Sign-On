const express = require('express')
const app = express()
const port = 3000
const session = require('express-session')
var CognitoService = require("./api/shopify/sso/cognitoService");
var googleService = require("./api/shopify/sso/googleService");
const passport = require('passport');
const client = require('./datbase');

client.connect();

app.use(session({
  secret: "secret",
  resave: false ,
  saveUninitialized: true ,
}));

app.use(passport.initialize());
app.use(passport.session());


app.listen(3000, () => console.log(`Server started on port 3000...`));
CognitoService(app, passport);
googleService(app, passport);

