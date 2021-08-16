const passport = require('passport');
const pool = require('../database');
const {transporter} = require('../lib/mailer');
const { getMaxListeners } = require('../database');

/**
 * GET: registro de usuario
 */

const Rget = async(req, res) => {
    res.render('auten/registro');
}
/**
 * GET: inicio de cesion
 */

const Iget = async(req, res) => {
    res.render('auten/ingreso');
}

/**
 * GET + POST: recuperar contraseña
 * Rp : recuperar contraseña
 */

const Rpget = async(req,res) =>{
    res.status(400).json({message: 'Get recuperar password'});
}

const Rppost = async(req,res) =>{
    const {mailC} = req.body;

    const usuario = await pool.query('SELECT * FROM user_cliente WHERE mailC = ?',[mailC]);
    const user = usuario[0];
    if(usuario.length > 0){
        /**
         * Enviar contraseña a su correo
         */
        try{
            await transporter.sendMail({
                from: "'Recuperación de contraseña' <g1.gcs.unmsm@gmail.com>",
                //to: user.mailC,
                to: user.mailC, 
                subject: 'Recuperación de contraseña',
                html: `Hola, tu contraseña es: `
                // falta método de recuperar contraseña
            });
        } catch (error) {
            emailStatus = error;
            return res.status(400).json({ 
                message:'Algo salio mal',
                error: emailStatus
            });
        }
        res.status(400).json({message: 'Se envio el correo'});
    } else {
        res.status(400).json({
            message: 'No se envio el correo',
            mailC: `${mailC}`
        });
        /**
         * req.flash('El usuario no ha sido registrado');
         */
    }
    //res.redirect('/ingreso');
}

/**
 * GET: Cerrar Sesion
 */

const Out = async(req, res, next) => {
    req.logOut();
    res.redirect('/');
}

module.exports = { Rget, Iget, Rpget, Rppost, Out };