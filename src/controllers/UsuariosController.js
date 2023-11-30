const UsuarioModel = require('./../models/UsuarioModel.js');

const UsuariosController = {}

// Ver usuarios
UsuariosController.verUsuarios = async (req, res) => {
    try {
      const listaUsuarios = await UsuarioModel.findAll();

      return res.json(listaUsuarios);
} catch (error) {
    return res.status(500).json({
        mensaje: 'Ocurrio un error interno',
        error: error
    });
}
}


// Ver usuario
UsuariosController.verUsuario = (req, res) => {
    return res.json({ mensaje: 'Ruta: ver usuario'});
 }

// Crear usuario
UsuariosController.crearUsuario = (req, res) => {
    return res.json({ mensaje: 'Ruta: crear usuario'});
 }

// Editar usuarios
UsuariosController.editarUsuario = (req, res) => {
    return res.json({ mensaje: 'Ruta: editar usuario'});
 }

// Eliminar usuarios
UsuariosController.eliminarUsuario = (req, res) => {
    return res.json({ mensaje: 'Ruta: eliminar usuario'});
 }


module.exports = UsuariosController;