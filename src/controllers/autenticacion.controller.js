const passport = require('passport');

const Rget = async(req, res) => {
    res.render('auten/registro');
}

const Iget = async(req, res) => {
    res.render('auten/ingreso');

}

const Out = async(req, res, next) => {
    req.logOut();
    res.redirect('/');
}

module.exports = { Rget, Iget, Out };