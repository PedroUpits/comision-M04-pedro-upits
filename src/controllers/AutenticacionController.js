const jwt = require('jsonwebtoken');

const AutenticacionController = {}

const JWT_KEY = process.env.JWT_KEY;

const usuarios = [
    {id: 1, usuario: 'Lord', contrasenia: '123456'},
    {id: 2, usuario: 'Lady', contrasenia: 'abcdf'},
]

AutenticacionController.autenticar = (req, res) => {
   const usuario = req.body.usuario;

   // Simular autenticacion
   
}


AutenticacionController.registrar = (req, res) => {
    // Simular registro...
}

AutenticacionController.verificarToken = (req, res) => {
    const token = req.body.token;

    try {
        let decoded = jwt.verify(token, JWT_KEY);

        res.json({datos: decoded});
} catch (error) {
    res.status(500).json({
        mensaje: 'Se ha generado un error',
        error: error,    
});
}

    

    res.json({datos: decoded});
}


module.exports = AutenticacionController;