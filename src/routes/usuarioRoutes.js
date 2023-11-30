const usuarioRouter = require('express').Router();

const {
    verUsuarios,
    verUsuario,
    crearUsuario,
    editarUsuario,
    eliminarUsuario,
} = require('./../controllers/UsuariosController.js');


// Ver usuarios
usuarioRouter.get('/usuarios', verUsuarios);

// Ver usuario
usuarioRouter.get('/usuario', verUsuario);

// Crear usuarios
usuarioRouter.post('/usuario', crearUsuario);

// Editar usuarios
usuarioRouter.put('/usuario', editarUsuario);

// Eliminar usuarios
usuarioRouter.delete('/usuario', eliminarUsuario);


module.exports = usuarioRouter; 