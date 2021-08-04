const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const pool = require('../database');
const helpers = require('./helpers');

passport.use('local.signin', new LocalStrategy({
    usernameField: 'mailC',
    passwordField: 'pass',
    passReqToCallback: true
}, async(req, mailC, pass, done) => {
    const rows = await pool.query('SELECT * FROM cliente WHERE mailC = ?', [mailC]);
    if (rows.length > 0) {
        const user = rows[0];
        const validPassword = await helpers.matchPassword(pass, user.pass)
        if (validPassword) {
            done(null, user);
        } else {
            done(null, false);
        }
    } else {
        return done(null, false);
    }
}));

passport.use('local.signup', new LocalStrategy({
    usernameField: 'mailC',
    passwordField: 'pass',
    passReqToCallback: true
}, async(req, mailC, pass, done) => {
    const { 
        nomC,
        apeC,
        apeC2,
        dniC,
        telfC 
    } = req.body;
    
    let newUser = {
        nomC,
        apeC,
        apeC2,
        dniC,
        telfC,
        mailC,
        pass,
        Medidas_idMedidas: 1
    };

    const rows = await pool.query('SELECT * FROM cliente WHERE mailC = ?', [mailC]);
    if (rows>0) {
        return done(null,false);
    } else {
        newUser.pass = await helpers.encryptPassword(pass);
        const result = await pool.query('INSERT INTO cliente SET ? ', newUser);
        newUser.idCliente = result.insertId;
        return done(null, newUser);
    }
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async(id, done) => {
    const rows = await pool.query('SELECT * FROM cliente WHERE id = ?', [id]);
    done(null, rows[0]);
});