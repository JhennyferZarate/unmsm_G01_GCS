const passport = require('passport');
const pool = require('../database');
const {transporter} = require('../lib/mailer');
const helpers = require('../lib/helpers');
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
    res.render('auten/recuperar_pass');
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
        res.redirect('/ingreso');
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
 * GET + POST: cambio de contraseña
 */
const Cget = async(req, res) => {
    res.render('auten/cambio_pass');
}

const Cpost = async(req, res) => {
    const { id } = req.params;
    //const { id } = req.user.id;
    //const user = pool.query("SELECT * FROM cliente WHERE id = ?",[id]);
    //const userid = user[0].id_user;

    const { pass } = req.body;
    pass = await helpers.encryptPassword(pass);
    await pool.query("UPDATE user_cliente set pass = ? WHERE id = ?",[pass,userid]);
    //await pool.query("UPDATE user_cliente set pass = ? WHERE id = ?",[pass,userid]);
    res.redirect('/ingreso');
}

/**
 * GET: Cerrar Sesion
 */
const Out = async(req, res, next) => {
    req.logOut();
    res.redirect('/');
}

module.exports = { Rget, Iget, Cget, Cpost, Rpget, Rppost, Out };