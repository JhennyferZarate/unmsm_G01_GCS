const express = require('express');
const router = express.Router();
const pool = require('../database');
const Prenda = require('../controllers/prendas.controller');

//VESTIDOS
router.get('/vestidos', Prenda.G_vestidos);
router.post('/vestidos', Prenda.P_vestidos);

//POLOS
router.get('/polos', Prenda.G_polos);
router.post('/polos', Prenda.P_polos);

//CASACAS
router.get('/casacas', Prenda.G_casacas);
router.post('/casacas', Prenda.P_casacas);

//BLUSAS
router.get('/blusas', Prenda.G_blusas);
router.post('/blusas', Prenda.P_blusas);

//CHOMPAS
router.get('/chompas', Prenda.G_chompas);
router.post('/chompas', Prenda.P_chompas);

//FALDAS
router.get('/faldas', Prenda.G_pijama);
router.post('/faldas', Prenda.P_pijama);

//JEANS
router.get('/jeans', Prenda.G_jeans);
router.post('/jeans', Prenda.P_jeans);

module.exports = router;