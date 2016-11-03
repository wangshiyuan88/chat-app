import { Strategy as LocalStrategy } from 'passport-local';
import User from '../models/User';


export default function setup(app, passport){
    setupSession(passport);
    setupLocal(passport);
    setupRoute(app, passport);
}

function setupLocal(passport){
    passport.use(new LocalStrategy(
      function(username, password, done) {
        User.findOne({ username: username }, function (err, user) {
          if (err) { return done(err); }
          if (!user) { return done(null, false); }
          return user.comparePassword(password)? done(null, user) : done(null, false)
        });
      }
    ));
}

function setupSession(passport){
    passport.serializeUser(function(user, done) {
      done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });
}

function setupRoute(app, passport){
    app.post('/login', passport.authenticate('local'), function(req, res){
        res.send('authenticated');
    })
}
