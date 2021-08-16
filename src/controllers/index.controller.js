const express = require('express');
const pool = require('../database');

const index = async(req, res) => {
    res.render('index/index');
}

const nosotros = async(req, res) => {
    res.render('index/nosotros');
}

const info = async(req, res) => {
    res.render('info');
}

const error = async(req, res) => {
    res.render('index/error');
}

const aux1 = async(req, res) => {
    res.render('index/aux1');
}

const aux2 = async(req, res) => {
    res.render('index/aux2');
}
const aux3 = async(req, res) => {
    res.render('index/aux3');
}

module.exports = { index, nosotros, info, error, aux1, aux2, aux3 };