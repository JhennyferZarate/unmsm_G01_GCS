const express = require('express');
const router = express.Router();
const pool = require('../database');
const Index = require('../controllers/index.controller');
const multer = require('multer');
const fs = require('fs');

router.get('/', Index.index);

router.get('/nosotros', Index.nosotros);

router.get('/filtros', Index.error);

/**
 * Guardar en multer
 */
const diskstorage = multer.diskStorage({
    destination: path.join(__dirname, '../public/images/prendas'),
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-monkeywit-' + file.originalname)
    }
});

const fileUpload = multer({
    storage: diskstorage
}).single('image')

router.get('/admin/imagenes', fileUpload , async(req,res) => {
    const type = req.file.mimetype
    const name = req.file.originalname
    const data = fs.readFileSync(path.join(__dirname, '../public/images/prendas'+ req.file.filename))

    const Imagen = {
        modelo: 'name',
        color: 'rojo',
        ruta_imagen: data
    };
    
    await pool.query("INSET INTO modelos SET ?",[Imagen]);
});

router.post('/admin/imagenes', Index.Pimagenes);

module.exports = router;