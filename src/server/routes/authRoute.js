import {OAuth2Strategy as GoogleStrategy} from 'passport-google-oauth';
import User from '../models/User';
import googleAuth from '../config/authConfig';
import logger from '../logger';


export default function setup(app, passport){
    setupSession(passport);
    setupGoogleStrategy(passport);
    setupRoute(app, passport);
}

function setupGoogleStrategy(passport){
    passport.use(new GoogleStrategy(
        googleAuth,
        function(accessToken, refreshToken, profile, done) {
            let googleId = profile.id,
                displayName = profile.displayName,
                email = profile.emails[0].value,
                photo = profile.photos[0].value;
            User.findOrCreate({googleId}, {displayName, email, photo}, function(err, user){
                if(err){
                    done(err, null);
                }else{
                    done(null, user);
                }
            })
        }
    ));
}

function setupSession(passport){
    passport.serializeUser(function(user, done) {
      done(null, user._id);
    });

    passport.deserializeUser(function(id, done) {
        var findById = (id) => {
            return User.findById(id);
        }
        Promise.resolve(id).then(findById).then((user) => {
            var { _id, googleId, displayName, email, photo } = user;
            done(null, {
                _id,
                googleId,
                displayName,
                email,
                photo
            })
        })
        .catch(error => logger.log('error', 'Error when deserializing the user: ' + error));
    });
}



function setupRoute(app, passport){
    app.get('/auth/google', passport.authenticate('google', { scope: ['openid email profile'] }));
    app.get('/auth/google/callback',
        passport.authenticate('google', {
            failureRedirect: '/'
        }),
        function(req, res) {
            // Authenticated successfully
            res.redirect('/');
        }
    );

    app.get('/logout', function(req, res) {
        req.session.destroy();
        res.json({
            authenticated: false,
            _id: null,
            googleId: null,
            displayName: null,
            email: null,
            photo: null
        });
    });
}
