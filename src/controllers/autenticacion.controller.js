const passport = require('passport');
const pool = require('../database');
const nodemailer = require('nodemailer');
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
    res.render('auten/recuperar');
}

const Rppost = async(req,res) =>{
    const {mailC} = req.body;

    const usuario = await pool.query('SELECT * FROM cliente where mailC = ?',[mailC]);

    if(usuario>0){
        /**
         * Enviar contraseña a su correo
         */
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: 'g1.gcs.unmsm@gmail.com',
                pass: 'G1.GCS.UNMSM'
            }
        });

        transporter.verify().then(() =>{
            console.log('Ready for send emails');
        });

        await transporter.sendMail({
            from: "'Recuperación de contraseña' <g1.gcs.unmsm@gmail.com>",
            to: mailC,
            subject: 'Recuperación de contraseña',
            html: `Su contraseña es: ${usuario.pass}`
        });
    } else {
        /**
          req.flash('El usuario no ha sido registrado');
         */
    }
    res.redirect('/ingreso');
}

/**
 * GET: Cerrar Sesion
 */

const Out = async(req, res, next) => {
    req.logOut();
    res.redirect('/');
}

module.exports = { Rget, Iget, Rpget, Rppost, Out };