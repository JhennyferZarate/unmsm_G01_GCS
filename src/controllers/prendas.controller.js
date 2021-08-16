const express = require('express');
const pool = require('../database');

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

//CASACAS
const G_casacas= async(req, res) => {
    res.render('prenda/ropainterior');
}

const P_casacas = async(req, res) => {

}

//BLUSAS
const G_blusas = async(req, res) => {
    res.render('prenda/sastre');
}

const P_blusas = async(req, res) => {

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

//JEANS
const G_jeans = async(req, res) => {
    res.render('prenda/pantalones');
}

const P_jeans = async(req, res) => {

}

module.exports = {
    G_casacas,
    P_casacas,
    G_vestidos,
    P_vestidos,
    G_polos,
    P_polos,
    G_blusas,
    P_blusas,
    G_chompas,
    P_chompas,
    G_pijama,
    P_pijama,
    G_jeans,
    P_jeans
};