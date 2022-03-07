import jwt from 'jsonwebtoken';



const authenticateJWT = (req, res, next) => {
    
    const SECRET_TOKEN = process.env.SECRET_TOKEN;

    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, SECRET_TOKEN, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }

            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

export default authenticateJWT;