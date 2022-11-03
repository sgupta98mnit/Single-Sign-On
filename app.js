const express = require('express')
const app = express()
const port = 3000
const session = require('express-session')
var CognitoService = require("./api/shopify/sso/shopifyService");
const passport = require('passport');
app.use(session({
  secret: "secret",
  resave: false ,
  saveUninitialized: true ,
}));

app.use(passport.initialize());
app.use(passport.session());


app.listen(3000, () => console.log(`Server started on port 3000...`));
CognitoService(app, passport);

