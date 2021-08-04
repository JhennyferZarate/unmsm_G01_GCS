const express = require('express');
const pool = require('../database');

usuarioGet = async(req, res) => {
    res.render('usuario/perfil');
}

usuarioPost = async(req, res) => {
    res.redirect('/perfil');
}

editarGet = async(req, res) => {
    const { id } = req.params;
    res.render('usuario/editar');
}

editarPost = async(req, res) => {
    const { id } = req.params;
    res.render('usuario/editar/' + id);
}

eliminar = async(req, res) => {
    const { id } = req.params;
    res.redirect('/perfil');
}

module.exports = { usuarioGet, usuarioPost, editarGet, editarPost, eliminar };