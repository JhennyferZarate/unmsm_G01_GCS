const express = require('express');
const pool = require('../database');

index = async(req, res) => {
    res.render('index/index');
}

nosotros = async(req, res) => {
    res.render('nosotros');
}

info = async(req, res) => {
    res.render('info');
}

error = async(req, res) => {
    res.render('error');
}


module.exports = { index, nosotros, info, error };