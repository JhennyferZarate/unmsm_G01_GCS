const express = require('express');
const router = express.Router();
const pool = require('../database');
const Prenda = require('../controllers/prendas.controller');

//ROPA DE BAÑO
router.get('/prenda/RopaBanio', Prenda.G_ropa_banio);
router.post('/prenda/RopaBanio', Prenda.P_ropa_banio);

//VESTIDOS
router.get('/prenda/Vestidos', Prenda.G_vestidos);
router.post('/prenda/Vestidos', Prenda.P_vestidos);

//POLOS
router.get('/prenda/Polos', Prenda.G_polos);
router.post('/prenda/Polos', Prenda.P_polos);

//ROPA INTERIOR
router.get('/prenda/RopaInterior', Prenda.G_ropa_interior);
router.post('/prenda/RopaInterior', Prenda.P_ropa_banio);

//SASTRE
router.get('/prenda/Sastre', Prenda.G_sastre);
router.post('/prenda/Sastre', Prenda.P_sastre);

//CHOMPAS
router.get('/prenda/Chompas', Prenda.G_chompas);
router.post('/prenda/Chompas', Prenda.P_chompas);

//PIJAMA
router.get('/prenda/Pijama', Prenda.G_pijama);
router.post('/prenda/Pijama', Prenda.P_pijama);

//PANTALONES
router.get('/prenda/Pantalones', Prenda.G_pantalones);
router.post('/prenda/Pantalones', Prenda.P_pantalones);

module.exports = router;