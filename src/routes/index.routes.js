const express = require('express');
const router = express.Router();
const pool = require('../database');
const Index = require('../controllers/index.controller');
const multer = require('multer');
const path = require('path'); 
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
        cb(null,file.originalname);
    }
});

const fileUpload = multer({
    storage: diskstorage
}).single('image') 

/**
 * Get + Post: Imagenes
 */
router.get('/admin/imagenes', async(req,res) =>{
    res.render('index/imagenes');
});

router.post('/admin/imagenes', fileUpload , async(req,res,next) => {
    const name = req.file.originalname
    const data = fs.readFileSync(path.join(__dirname, '../public/images/prendas/'+ req.file.filename))
    
    const Imagen = {
        modelo: name,
        ruta_imagen: data
    };
    
    await pool.query("INSERT INTO modelos SET ?",[Imagen]);
    
    res.redirect('/admin/imagenes');
});

module.exports = router;