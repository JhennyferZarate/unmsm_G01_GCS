const express = require('express');
const pool = require('../database');

/**
 * GET + POST: perfil de usuario
 */
const usuarioGet = async(req, res) => {

    const id = req.user.id;
    const cliente = await pool.query("SELECT * FROM cliente WHERE id = ?",[id]);
    
    let idU = cliente.id_user;
    let idI = cliente.id_info;
    let idT = cliente.id_tamaño;

    const Info = await pool.query("SELECT * FROM user_info WHERE id = ?",[idI]);
    const Tamaño = await pool.query("SELECT * FROM tamaño WHERE id = ?",[idT]);


    //res.status(200).json({tamaño:Tamaño[0], info:Info[0]});
    res.render('usuario/perfil',{tamaño:Tamaño[0], info:Info[0]});
}

const usuarioPost = async(req, res) => {
    res.redirect('/perfil');
}

/**
 * GET + POST: editar perfil de usuario
 */
const editarGet = async(req, res) => {
    const { id } = req.params;
    
    res.render('usuario/editar_perfil');
}

const editarPost = async(req, res) => {
    /**
     * id del cliente
     */
    const {id} = req.params;
    console.log(`estamos en editar perfil: ${id}`);
    const clientes = await pool.query("SELECT * FROM cliente WHERE id = ?",[id]);
    const cliente = clientes[0];

    if(clientes.length > 0){
        /**
         * Recuperar idU, idI, idT
         */
        const idU = cliente.id_user;
        const idI = cliente.id_info;
        let idT = cliente.id_tamaño;

        /*
        console.log(idI);
        console.log(idU);
        console.log(idT);
        */
        
        /**
         * parametos de la persona
         */
        let {
            nomC,
            apeC,
            apeC2,
            dniC,
            telfC,
            mailC,
            pass,
            busto,
            cintura,
            cadera
        } = req.body;

        const rows = await pool.query('SELECT * FROM user_cliente WHERE mailC = ?', [mailC]);
        if (!(rows.length > 0)){
            /**
             * Actualizar usuario
             */
            const editU = {
                mailC,
                pass
            };

            await pool.query("UPDATE user_cliente SET ? WHERE id = ?",[editU,idU]);
            /**
             * Actulizar info
             */
            const editI = {
                nomC,
                apeC,
                apeC2,
                dniC,
                telfC
            };

            await pool.query("UPDATE info_cliente SET ? WHERE id = ?",[editI,idI]);

            /**
             * Actualizar medida
             */
            if (idT != undefined || idT != null) {
                busto = parseFloat(busto).toFixed(2);
                cintura = parseFloat(cintura).toFixed(2);
                cadera = parseFloat(cadera).toFixed(2);
                //console.log('idT != null');
                const editT = {
                    busto,
                    cintura,
                    cadera
                };
                await pool.query("UPDATE tamaño SET ? WHERE id = ?",[editT,idT]);
            } else {
                busto = parseFloat(busto).toFixed(2);
                cintura = parseFloat(cintura).toFixed(2);
                cadera = parseFloat(cadera).toFixed(2);

                const editT = {
                    busto,
                    cintura,
                    cadera
                };

                const nuevoT = await pool.query("INSERT INTO tamaño SET ?",[editT]);
                editT.id = nuevoT.insertId;
                idT = editT.id;

                /**
                 * Actualizar cliente
                 */
                const editC = {
                    id_info:idI,
                    id_user:idU,
                    id_tamaño:idT
                };

                await pool.query("UPDATE cliente SET ? WHERE id = ?",[editC,id]);
            }
            
        }else{
            //res.redirect('/perfil/editar/' + id);
        }
        //res.status(200).json({message: 'todo ok'});
        //res.redirect('/perfil/');
    }else{
        //res.redirect('/perfil/editar/' + id);
        //res.status(200).json({message: 'todo mal'});
    }   
}

const eliminar = async(req, res) => {
    const { id } = req.params;
    res.redirect('/perfil');
}

module.exports = { usuarioGet, usuarioPost, editarGet, editarPost, eliminar };