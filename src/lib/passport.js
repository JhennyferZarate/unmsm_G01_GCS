const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const pool = require('../database');
const helpers = require('./helpers');

passport.use('local.signin', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async(req,email,password,done) => {
    const rows = await pool.query('SELECT * FROM users WHERE codigo = ?', [codigo]);
    if (rows.length > 0) {
        const user = rows[0];
        //const validPassword = await helpers.matchPassword(contrasena, user.contrasena)
        if (validPassword) {
            done(null, user);
        } else {
            done(null, false, req.flash('message', 'Contraseña Incorrecta'));
        }
    } else {
        return done(null, false, req.flash('message', 'El usuario no existe'));
    }
}));

passport.use('local.signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async(req,email,password,done) => {
    console.log(email);
    console.log(password);
    return done(null, false);
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async(id, done) => {
    const rows = await pool.query('SELECT * FROM cliente WHERE id = ?', [id]);
    done(null, rows[0]);
});