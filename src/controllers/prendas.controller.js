const express = require('express');
const pool = require('../database');
const fs = require('fs');
const path = require('path');

//VESTIDOS
const G_vestidos = async(req, res) => {

    const prenda = "descripcion = 'vestido' ";
    //Este codigo llama a las prendas
    const Modelos = await pool.query(
    `
        SELECT
            prenda.id,
            estilos.estilo,
            precios.precio,
            descripciones.descripcion,
            modelos.modelo,
            colores.color
        FROM
            prenda
                INNER JOIN estilos
                    ON prenda.id_estilos = estilos.id
                INNER JOIN precios
                    ON prenda.id_precios = precios.id
                INNER JOIN descripciones
                    ON prenda.id_descripciones = descripciones.id
                INNER JOIN modelos
                    ON prenda.id_modelos = modelos.id
                INNER JOIN colores
                    ON modelos.id_colores = colores.id
        WHERE
            ${prenda}
    `);

    res.render('prenda/vestidos',{Modelos});
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

    const prenda = "descripcion = 'polo' ";
    //Este codigo llama a las prendas
    const Modelos = await pool.query(
    `
        SELECT
            prenda.id,
            estilos.estilo,
            precios.precio,
            descripciones.descripcion,
            modelos.modelo,
            colores.color
        FROM
            prenda
                INNER JOIN estilos
                    ON prenda.id_estilos = estilos.id
                INNER JOIN precios
                    ON prenda.id_precios = precios.id
                INNER JOIN descripciones
                    ON prenda.id_descripciones = descripciones.id
                INNER JOIN modelos
                    ON prenda.id_modelos = modelos.id
                INNER JOIN colores
                    ON modelos.id_colores = colores.id
        WHERE
            ${prenda}
    `);
    res.render('prenda/polos',{Modelos});
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
    const prenda = "descripcion = 'casaca' ";
    //Este codigo llama a las prendas
    const Modelos = await pool.query(
    `
        SELECT
            prenda.id,
            estilos.estilo,
            precios.precio,
            descripciones.descripcion,
            modelos.modelo,
            colores.color
        FROM
            prenda
                INNER JOIN estilos
                    ON prenda.id_estilos = estilos.id
                INNER JOIN precios
                    ON prenda.id_precios = precios.id
                INNER JOIN descripciones
                    ON prenda.id_descripciones = descripciones.id
                INNER JOIN modelos
                    ON prenda.id_modelos = modelos.id
                INNER JOIN colores
                    ON modelos.id_colores = colores.id
        WHERE
            ${prenda}
    `);
    res.render('prenda/casacas',{Modelos});
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
    const prenda = "descripcion = 'blusa' ";
    //Este codigo llama a las prendas
    const Modelos = await pool.query(
    `
        SELECT
            prenda.id,
            estilos.estilo,
            precios.precio,
            descripciones.descripcion,
            modelos.modelo,
            colores.color
        FROM
            prenda
                INNER JOIN estilos
                    ON prenda.id_estilos = estilos.id
                INNER JOIN precios
                    ON prenda.id_precios = precios.id
                INNER JOIN descripciones
                    ON prenda.id_descripciones = descripciones.id
                INNER JOIN modelos
                    ON prenda.id_modelos = modelos.id
                INNER JOIN colores
                    ON modelos.id_colores = colores.id
        WHERE
            ${prenda}
    `);
    res.render('prenda/blusas',{Modelos});
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
    const prenda = "descripcion = 'chompa' ";
    //Este codigo llama a las prendas
    const Modelos = await pool.query(
    `
        SELECT
            prenda.id,
            estilos.estilo,
            precios.precio,
            descripciones.descripcion,
            modelos.modelo,
            colores.color
        FROM
            prenda
                INNER JOIN estilos
                    ON prenda.id_estilos = estilos.id
                INNER JOIN precios
                    ON prenda.id_precios = precios.id
                INNER JOIN descripciones
                    ON prenda.id_descripciones = descripciones.id
                INNER JOIN modelos
                    ON prenda.id_modelos = modelos.id
                INNER JOIN colores
                    ON modelos.id_colores = colores.id
        WHERE
            ${prenda}
    `);
    res.render('prenda/chompas',{Modelos});
}

const P_chompas = async(req, res) => {
}

const G_chompas_und = async(req, res) => {
    res.render('prenda/chompas_und');
}

const P_chompas_und = async(req, res) => {
}

//JEANS
const G_jeans = async(req, res) => {
    const prenda = "descripcion = 'jean' ";
    //Este codigo llama a las prendas
    const Modelos = await pool.query(
    `
        SELECT
            prenda.id,
            estilos.estilo,
            precios.precio,
            descripciones.descripcion,
            modelos.modelo,
            colores.color
        FROM
            prenda
                INNER JOIN estilos
                    ON prenda.id_estilos = estilos.id
                INNER JOIN precios
                    ON prenda.id_precios = precios.id
                INNER JOIN descripciones
                    ON prenda.id_descripciones = descripciones.id
                INNER JOIN modelos
                    ON prenda.id_modelos = modelos.id
                INNER JOIN colores
                    ON modelos.id_colores = colores.id
        WHERE
            ${prenda}
    `);
    res.render('prenda/jeans',{Modelos});
}

const P_jeans = async(req, res) => {

}

const G_jeans_und = async(req, res) => {
    res.render('prenda/jeans_und');
}

const P_jeans_und = async(req, res) => {

}


//FALDAS
const G_faldas = async(req, res) => {
    const prenda = "descripcion = 'falda' ";
    //Este codigo llama a las prendas
    const Modelos = await pool.query(
    `
        SELECT
            prenda.id,
            estilos.estilo,
            precios.precio,
            descripciones.descripcion,
            modelos.modelo,
            colores.color
        FROM
            prenda
                INNER JOIN estilos
                    ON prenda.id_estilos = estilos.id
                INNER JOIN precios
                    ON prenda.id_precios = precios.id
                INNER JOIN descripciones
                    ON prenda.id_descripciones = descripciones.id
                INNER JOIN modelos
                    ON prenda.id_modelos = modelos.id
                INNER JOIN colores
                    ON modelos.id_colores = colores.id
        WHERE
            ${prenda}
    `);
    res.render('prenda/faldas',{Modelos});
}

const P_faldas = async(req, res) => {

}

const G_faldas_und = async(req, res) => {
    res.render('prenda/faldas_und');
}

const P_faldas_und = async(req, res) => {

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
    G_jeans,
    P_jeans,
    G_jeans_und,
    P_jeans_und,
    G_faldas,
    P_faldas,
    G_faldas_und,
    P_faldas_und
};