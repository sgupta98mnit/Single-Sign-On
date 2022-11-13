var GoogleStrategy = require('passport-google-oauth20').Strategy;

module.exports = function(app, passport) {
    app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] }));

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

  passport.use(new GoogleStrategy({
    clientID: "59967376013-1k493slj93dd1emeivit28ts0aaacebk.apps.googleusercontent.com",
    clientSecret: "AnbFB1i3zYz1uvskErSEdExY",
    callbackURL: "http://localhost:3000/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    console.log("access token: " + accessToken);
    console.log("refresh token: " + refreshToken);
    console.log(profile);
    done(null, null);
  }
));
}