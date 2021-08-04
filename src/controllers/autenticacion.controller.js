const passport = require('passport');

const Rget = async(req, res) => {
    res.render('auten/registro');
}

const Rpost = async(req, res) => {
    passport.authenticate('local.signup', {
        successRedirect: '/perfil',
        failureRedirect: '/registro',
        failureFlash: true
    })
}

const Iget = async(req, res) => {
    res.render('auten/ingreso');

}

const Ipost = async(req, res, next) => {
    passport.authenticate('local.signin', {
        successRedirect: '/perfil',
        failureRedirect: '/ingreso',
        failureFlash: true
    })(req, res, next);
}

const Out = async(req, res, next) => {
    req.logOut();
    res.redirect('/');
}

module.exports = { Rget, Rpost, Iget, Ipost, Out };