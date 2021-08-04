const express = require('express');
const pool = require('../database');

usuarioGet = async(req, res) => {
    res.render('usuario/perfil');
    return next();
}

usuarioPost = async(req, res) => {
    res.redirect('/perfil');
    return next();
}

editarGet = async(req, res) => {
    const { id } = req.params;
    return render('perfil/editar/'+ id);
}

editarPost = async(req, res) => {
    const { id } = req.params;
    const {nombre, apellido1, apellido2, dni, telefono, mail, pass, medidas}=req.body;
    const newuser={
        nombre,
        apellido1,
        apellido2,
        dni,
        telefono,
        mail,
        pass,
        medidas,
    }
    req.flash("success", "Datos ac")
    res.redirect("/perfil");
    return next();
}

eliminar = async(req, res) => {
    const { id } = req.params;
    res.redirect('/perfil');
    return next();
}

module.exports = { usuarioGet, usuarioPost, editarGet, editarPost, eliminar };