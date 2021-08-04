const express = require('express');
const router = express.Router();
const passport = require('passport');
const { isLoggedIn, isNotLoggedIn } = require('../lib/auth');
const Auth = require('../controllers/autenticacion.controller')

router.get('/registro', isNotLoggedIn, Auth.Rget);

router.post('/registro', isNotLoggedIn, passport.authenticate('local.signup', {
    successRedirect: '/perfil',
    failureRedirect: '/registro',
    failureFlash: true
}));

router.get('/ingreso', isNotLoggedIn, Auth.Iget);

router.post('/ingreso', isNotLoggedIn, (req, res, next) => {
    passport.authenticate('local.signin', {
        successRedirect: '/perfil',
        failureRedirect: '/ingreso',
        failureFlash: true
    })(req, res, next);
});


router.get('/salir', isLoggedIn, Auth.Out);

module.exports = router;