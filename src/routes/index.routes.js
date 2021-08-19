const express = require('express');
const router = express.Router();
const pool = require('../database');
const Index = require('../controllers/index.controller');

router.get('/', Index.index);

router.get('/nosotros', Index.nosotros);

router.get('/filtros', Index.error);

router.get('/admin/imagenes', Index.imagenes);

module.exports = router;