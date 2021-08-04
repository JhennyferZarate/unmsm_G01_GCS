const express = require('express');
const pool = require('../database');

//CARRITO DE COMPRAS
G_carrito = async(req, res) => {
    res.render('formulario/carrito');
    return next();
}

P_carrito = async(req, res) => {

    return next();
}

//FORMULARIO DE DATOS
G_formulario_datos = async(req, res) => {
    res.render('formulario/dato');
}

P_formulario_datos = async(req, res) => {

}

//FORMULARIO DE ENVIO
G_formulario_envio = async(req, res) => {
    res.render('formulario/envio');
}

P_formulario_envio = async(req, res) => {

}

//FORMULARIO DE PAGO
G_formulario_pago = async(req, res) => {
    res.render('formulario/pago');
}

P_formulario_pago = async(req, res) => {

}

module.exports = {
    G_carrito,
    P_carrito,
    G_formulario_datos,
    P_formulario_datos,
    G_formulario_envio,
    P_formulario_envio,
    G_formulario_pago,
    P_formulario_pago
};