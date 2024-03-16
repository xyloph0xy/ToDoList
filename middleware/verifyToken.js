const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {

    const token = req.headers.authorization.split('Bearer ')[1];

    if(token == null) return res.status(401)
    
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) return res.sendStatus(403).json({
            msg: err.message
        });
        req.username = decoded.username;
        next();
    })
}

module.exports= verifyToken