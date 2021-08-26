const express = require('express');
const pool = require('../database');
const fs = require('fs');
const path = require('path');
const { deepStrictEqual } = require('assert');
const { formatWithOptions } = require('util');

const index = async(req, res) => {
    const modelos = await pool.query("SELECT * FROM modelos");

    console.log(modelos);
    
    for(i=0;i<modelos.length;i++){
        fs.writeFileSync(path.join(__dirname,'../public/images/dbimagenes/' + modelos[i].id + '-' + modelos[i].modelo + '.png'),modelos[i].ruta_imagen)
    }
    
    /*
    modelos.map(
        fs.writeFileSync(path.join(__dirname,'../public/images/dbimagenes/' + modelos.id + '-' + modelos.modelo + '.png'),modelos.ruta_imagen)
    );
    */
    

    const imagenes = fs.readdirSync(path.join(__dirname, '../public/images/prendas/'));

    const Imagenes = new Array();

    for(i=0;i<imagenes.length;i++){
        var aux = {
            "name": imagenes[i]
        }
        Imagenes.push(aux);
    }
    //console.log(Imagenes);
    res.render('index/index',{Imagenes});
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

module.exports = { index, nosotros, info, error };
