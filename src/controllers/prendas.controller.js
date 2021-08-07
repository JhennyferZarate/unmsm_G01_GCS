const express = require('express');
const pool = require('../database');

//ROPA DE BAÑO
const G_ropa_banio = async(req, res) => {
    res.render('prenda/ropabaño');
    return next();
}

const P_ropa_banio = async(req, res) => {

    return next();
}

//VESTIDOS
const G_vestidos = async(req, res) => {
    res.render('prenda/vestidos');
}

const P_vestidos = async(req, res) => {

}

//POLOS
const G_polos = async(req, res) => {
    res.render('prenda/polos');
}

const P_polos = async(req, res) => {

}

//ROPA INTERIOR
const G_ropa_interior = async(req, res) => {
    res.render('prenda/ropainterior');
}

const P_ropa_interior = async(req, res) => {

}

//SASTRE
const G_sastre = async(req, res) => {
    res.render('prenda/sastre');
}

const P_sastre = async(req, res) => {

}

//CHOMPAS
const G_chompas = async(req, res) => {
    res.render('prenda/chompas');
}

const P_chompas = async(req, res) => {
}

//PIJAMA
const G_pijama = async(req, res) => {
    res.render('prenda/pijama');
}

const P_pijama = async(req, res) => {

}

//PANTALONES
const G_pantalones = async(req, res) => {
    res.render('prenda/pantalones');
}

const P_pantalones = async(req, res) => {

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