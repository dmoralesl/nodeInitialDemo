import jwt from 'jsonwebtoken';



const authenticateJWT = (req, res, next) => {
    
    const SECRET_TOKEN = process.env.SECRET_TOKEN;

    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, SECRET_TOKEN, (err, user) => {
            if (err) {
                return res.status(403).send({
                    message: 'Token invalid'
                });
            }

            req.user = user;
            next();
        });
    } else {
        res.status(401).send({
            message: 'Token header not provided'
        });
    }
};

export default authenticateJWT;