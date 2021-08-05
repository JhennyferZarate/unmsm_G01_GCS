const express = require('express');
const router = express.Router();
const passport = require('passport');
const { isLoggedIn, isNotLoggedIn } = require('../lib/auth');
const Auth = require('../controllers/autenticacion.controller')

/**
 * Registro de usuario
 */
// GET
router.get('/registro', isNotLoggedIn, Auth.Rget);
// POST
router.post('/registro', isNotLoggedIn, passport.authenticate('local.signup', {
    successRedirect: '/perfil',
    failureRedirect: '/registro',
    failureFlash: true
}));

/**
 * Inicio de sesión por usuario
 */
// GET
router.get('/ingreso', isNotLoggedIn, Auth.Iget);
// POST
router.post('/ingreso', isNotLoggedIn, (req, res, next) => {
    passport.authenticate('local.signin', {
        successRedirect: '/perfil',
        failureRedirect: '/ingreso',
        failureFlash: true
    })(req, res, next);
});

/**
 * Cambio de Contraseña
 */
// GET
router.get('/cambio-pass', isNotLoggedIn, Auth.Rpget);
// POST
router.post('/cambio-pass', isNotLoggedIn, Auth.Rppost);

/**
 * Cerrar sessión
 */
// GET
router.get('/salir', isLoggedIn, Auth.Out);

module.exports = router;