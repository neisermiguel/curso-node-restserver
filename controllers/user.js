const { response } = require('express');

const usuariosGet = (req, res = response) => {
    res.json({
        msg:'get API - controlador'
    });
}
const usuariosPost = (req, res = response) => {
    const {nombre,apellido} = req.body;
    res.json({
        msg:`post API - controladors`,
        nombre,
        apellido
    });
}
const usuariosPut = (req, res = response) => {
    let id = req.params.id;
    res.json({
        msg:'put API - controlador',
        id
    });
}
const usuariosDelete = (req, res = response) => {
    res.json({
        msg:'delete API - controlador'
    });
}
const usuariosPatch = (req, res = response) => {
    res.json({
        msg:'patch API - controlador'
    });
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch
}