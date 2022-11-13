
const CognitoOAuth2Strategy = require('cognito-passport-oauth2');

const options = {
    callbackURL: 'http://localhost:3000/auth/cognito/callback', //Your callback url
    clientDomain: 'https://sumit123.auth.us-east-2.amazoncognito.com', //Your cognito user pool domain
    clientID: '3cnb2ttph3glt66ehc73c5670c',
    clientSecret: '1dr58cqt0k4i8qj324opr7v887bc2hdtikjlpfv0hv4dssoaqvhu',
    region: 'us-east-2', //your region
    passReqToCallback: true,
    scope: ['profile', 'openid', 'aws.cognito.signin.user.admin']
};

module.exports = function(app, passport) {
  function verify(accessToken, refreshToken, profile, done) {
    // for (const [key, value] of Object.entries(accessToken)) {
    //   console.log(`${key}: \n`);
    // }
    console.log(accessToken);
      console.log("refresh token: " + refreshToken);
      console.log("profile: " + profile);
      // done(err, user);
    
  }
      
      passport.use('cognito', new CognitoOAuth2Strategy(options, verify));
      
      app.get('/cognito/login', passport.authenticate('cognito', {scope: ['profile', 'openid', 'aws.cognito.signin.user.admin']}));
      
      app.get('/auth/cognito/callback',
        passport.authenticate('cognito'),
        (req,res) => res.send(req.user)  
      )
      
      passport.serializeUser((user, done) => done(null, user));
      passport.deserializeUser((obj, done) => done(null, obj));
      
};