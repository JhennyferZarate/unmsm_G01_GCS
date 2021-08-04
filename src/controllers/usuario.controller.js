const express = require('express');
const pool = require('../database');

const usuarioGet = async(req, res) => {
    res.render('usuario/perfil');
}

const usuarioPost = async(req, res) => {
    res.redirect('/perfil');
}

const editarGet = async(req, res) => {
    const { id } = req.params;
    res.render('usuario/editar');
}

const editarPost = async(req, res) => {
    const { id } = req.params;
    res.render('usuario/editar/' + id);
}

const eliminar = async(req, res) => {
    const { id } = req.params;
    res.redirect('/perfil');
}

module.exports = { usuarioGet, usuarioPost, editarGet, editarPost, eliminar };