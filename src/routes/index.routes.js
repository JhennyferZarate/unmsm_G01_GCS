const express = require('express');
const router = express.Router();
const pool = require('../database');
const Index = require('../controllers/index.controller');

router.get('/', Index.index);

router.get('/nosotros', Index.nosotros);

router.get('/filtros', Index.error);

router.get('/aux1', Index.aux1);

router.get('/aux2', Index.aux2);

router.get('/aux3', Index.aux3);

router.get('/admin/imagenes', Index.imagenes);

module.exports = router;