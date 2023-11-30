const UsuariosController = {}

const lista_usuarios = [
    { nombre: 'Juan'},
    { nombre: 'Carlos'},
    { nombre: 'Pedro'}
];

// Ver usuarios
UsuariosController.verUsuarios = (req, res) => {
   return res.json(lista_usuarios);
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