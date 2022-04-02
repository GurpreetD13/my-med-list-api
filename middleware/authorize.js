const jwt = require('jsonwebtoken');

// Use this function 'authorize' as middleware in every route requiring auhtorization. See numbered steps

module.exports = (req, res, next) => {

    // 1. Get token from client's req.header: { authorization: `Bearer ${token}` } (second part of string)
    if (!req.header) {
        return res.status(400).json('Please login');
    }
    const token = req.header.split(' ')[1];

    // 2. verify token, if unverified: send error else
    // 3. if verified: decode token, call next()
    jwt.verify(token, 'secretKeyString', (err, decoded) => {
        if (err) {
            res.status(401).json('No/Invalid authorization token')
        } else {
            req.decoded = decoded;
            next();
        }
    });
}
