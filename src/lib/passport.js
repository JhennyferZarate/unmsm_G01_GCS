const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const pool = require('../database');
const helpers = require('./helpers');

passport.use('local.signin', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async(req,email,password) => {
    const rows = await pool.query('SELECT * FROM cliente WHERE mailC = ?', [email]);
    if (rows.length > 0) {
        const user = rows[0];
        console.log(user);
        //const validPassword = await helpers.matchPassword(password, user.password);
        /*
        if (validPassword) {
            done(null, user);
        } else {
            done(null, false);
        }
        */
    } else {
        return done(null, false);
    }
}));

passport.use('local.signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async(req,email,password) => {
    const info = req.body;
    console.log(info);
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async(id, done) => {
    const rows = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
    done(null, rows[0]);
});