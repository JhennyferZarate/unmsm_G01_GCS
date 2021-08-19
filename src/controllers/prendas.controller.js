const express = require('express');
const pool = require('../database');

//VESTIDOS
const G_vestidos = async(req, res) => {
    res.render('prenda/vestidos');
}

const P_vestidos = async(req, res) => {

}

const G_vestidos_und = async(req, res) => {
    res.render('prenda/vestidos_und');
}

const P_vestidos_und = async(req, res) => {

}


//POLOS
const G_polos = async(req, res) => {
    res.render('prenda/polos');
}

const P_polos = async(req, res) => {

}

const G_polos_und = async(req, res) => {
    res.render('prenda/polos_und');
}

const P_polos_und = async(req, res) => {

}


//CASACAS
const G_casacas = async(req, res) => {
    res.render('prenda/casacas');
}

const P_casacas = async(req, res) => {

}

const G_casacas_und = async(req, res) => {
    res.render('prenda/casacas_und');
}

const P_casacas_und = async(req, res) => {

}


//BLUSAS
const G_blusas = async(req, res) => {
    res.render('prenda/blusas');
}

const P_blusas = async(req, res) => {

}

const G_blusas_und = async(req, res) => {
    res.render('prenda/blusas_und');
}

const P_blusas_und = async(req, res) => {

}


//CHOMPAS
const G_chompas = async(req, res) => {
    res.render('prenda/chompas');
}

const P_chompas = async(req, res) => {
}

const G_chompas_und = async(req, res) => {
    res.render('prenda/chompas_und');
}

const P_chompas_und = async(req, res) => {
}


//PIJAMA
const G_pijama = async(req, res) => {
    res.render('prenda/pijama');
}

const P_pijama = async(req, res) => {

}

const G_pijama_und = async(req, res) => {
    res.render('prenda/pijama_und');
}

const P_pijama_und = async(req, res) => {

}


//JEANS
const G_jeans = async(req, res) => {
    res.render('prenda/jeans');
}

const P_jeans = async(req, res) => {

}

const G_jeans_und = async(req, res) => {
    res.render('prenda/jeans_und');
}

const P_jeans_und = async(req, res) => {

}


module.exports = {
    G_casacas,
    P_casacas,
    G_casacas_und,
    P_casacas_und,
    G_vestidos,
    P_vestidos,
    G_vestidos_und,
    P_vestidos_und,
    G_polos,
    P_polos,
    G_polos_und,
    P_polos_und,
    G_blusas,
    P_blusas,
    G_blusas_und,
    P_blusas_und,
    G_chompas,
    P_chompas,
    G_chompas_und,
    P_chompas_und,
    G_pijama,
    P_pijama,
    G_pijama_und,
    P_pijama_und,
    G_jeans,
    P_jeans,
    G_jeans_und,
    P_jeans_und
};