const jwt = require('jsonwebtoken');

const JWT_KEY = process.env.JWT_KEY;

const verificarToken = (token) => {
    try {
        let decoded = jwt.verify(token, JWT_KEY);

        if (decoded) {
            return decoded;
        } else {
            return false;
        }
    } catch (error) {
        return false;
    }
}

module.exports = {verificarToken};