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
}

P_vestidos = async(req, res) => {

}

//POLOS
G_polos = async(req, res) => {
    res.render('prenda/polos');
}

P_polos = async(req, res) => {

}

//ROPA INTERIOR
G_ropa_interior = async(req, res) => {
    res.render('prenda/ropainterior');
}

P_ropa_interior = async(req, res) => {

}

//SASTRE
G_sastre = async(req, res) => {
    res.render('prenda/sastre');
}

P_sastre = async(req, res) => {

}

//CHOMPAS
G_chompas = async(req, res) => {
    res.render('prenda/chompas');
}

P_chompas = async(req, res) => {
}

//PIJAMA
G_pijama = async(req, res) => {
    res.render('prenda/pijama');
}

P_pijama = async(req, res) => {

}

//PANTALONES
G_pantalones = async(req, res) => {
    res.render('prenda/pantalones');
}

P_pantalones = async(req, res) => {

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