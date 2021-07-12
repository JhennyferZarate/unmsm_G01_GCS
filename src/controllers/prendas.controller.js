const express = require('express');
const pool = require('../database');

//ROPA DE BAÑO
G_ropa_banio = async(req, res) => {
    res.render('prenda/ropabaño');
    return next();
}

P_ropa_banio = async(req, res) => {

    return next();
}

//VESTIDOS
G_vestidos = async(req, res) => {
    res.render('prenda/vestidos');
    return next();
}

P_vestidos = async(req, res) => {

    return next();
}

//POLOS
G_polos = async(req, res) => {
    res.render('prenda/polos');
    return next();
}

P_polos = async(req, res) => {

    return next();
}

//ROPA INTERIOR
G_ropa_interior = async(req, res) => {
    res.render('prenda/ropainterior');
    return next();
}

P_ropa_interior = async(req, res) => {

    return next();
}

//SASTRE
G_sastre = async(req, res) => {
    res.render('prenda/sastre');
    return next();
}

P_sastre = async(req, res) => {

    return next();
}

//CHOMPAS
G_chompas = async(req, res) => {
    res.render('prenda/chompas');
    return next();
}

P_chompas = async(req, res) => {
    return next();
}

//PIJAMA
G_pijama = async(req, res) => {
    res.render('prenda/pijama');
    return next();
}

P_pijama = async(req, res) => {

    return next();
}

//PANTALONES
G_pantalones = async(req, res) => {
    res.render('prenda/pantalones');
    return next();
}

P_pantalones = async(req, res) => {

    return next();
}

module.exports = {
    G_ropa_banio,
    P_ropa_banio,
    G_vestidos,
    P_vestidos,
    G_polos,
    P_polos,
    G_ropa_interior,
    P_ropa_interior,
    G_sastre,
    P_sastre,
    G_chompas,
    P_chompas,
    G_pijama,
    P_pijama,
    G_pantalones,
    P_pantalones
};