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
    const {
        nomC,
        apeC,
        apecC2,
        dniC,
        telfC,
        mailC,
        pass,
        altura,
        busto,
        cintura,
        cadera
    } = req.body;

    const nuevoU = {
        nomC,
        apeC,
        apecC2,
        dniC,
        telfC,
        mailC,
        pass
    };

    const nuevoM = {
        altura,
        busto,
        cintura,
        cadera
    };

    const medida = await pool 

    await pool.query("UPDATE cliente SET ? WHERE idCliente = ?",[nuevoU,id]);

    res.render('usuario/editar/' + id);
}

const eliminar = async(req, res) => {
    const { id } = req.params;
    res.redirect('/perfil');
}

module.exports = { usuarioGet, usuarioPost, editarGet, editarPost, eliminar };