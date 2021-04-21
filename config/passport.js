const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const db = require("../models");

passport.use(new LocalStrategy({usernameField:'email'},
    function(email, password, done) {
        db.User.findOne({
            email: email
        }, function(err, user) {
            console.log("User: ", user)
            if (err) {
                console.log("something went wrong\n",err);
                return done(err)
            }
            if (!user) {
                return done(null, false, {message: "User not found"});
            }
            if (!user.validPassword(password, user.password)) {
                return done(null, false, {message: "invalid password"});
            } else {
                return done(null, user)
            }
        });
    }
  ));

passport.serializeUser(function(user, done) {
    done(null, user._id);
});

passport.deserializeUser(function(_id, done) {
    db.User.findById({_id:_id}, function(err, user) {
        done(err, user);
    });
});


module.exports = passport;