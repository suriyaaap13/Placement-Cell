const passport = require('passport');
const User = require('../models/user');
const LocalStrategy = require('passport-local').Strategy;
const md5 = require('md5');

passport.use(new LocalStrategy({
        usernameField: 'email',
        passReqToCallback: true
    },
    function(req, email, password, done) {
      User.findOne({ email: email }, function (err, user) {
        // if (err) { req.flash('error', 'Invalid Username/Password'); return done(null, false); }
        if (!user||user.password!==md5(password)) {console.log('Error', 'Invalid Username/Password'); return done(null, false); }
        return done(null, user);
      });
    }
));

// used to serialize the user for the session
passport.serializeUser(function(user, done) {
    done(null, user.id); 
});

// used to deserialize the user
passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

passport.checkAuthentication = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/users/signin');
}

passport.setAuthenticatedUser = function(req, res, next){
    if(req.isAuthenticated()){
        // req.user contains the current signed in user from the session cookie 
        // and we are just sending it to the locals for the views
        res.locals.user = req.user;
    }
    next();
}

module.exports = passport;