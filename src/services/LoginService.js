import jwt from 'jsonwebtoken';

const loginAdmin = (req, res) => {

    const ACCESS_TOKEN_SECRET = process.env.SECRET_TOKEN;
    const adminUser = process.env.ADMIN_USERNAME;
    const adminPassword = process.env.ADMIN_PASSWORD;

    const { username, password } = req.body;

    if (username === adminUser && password === adminPassword) {
        const token = jwt.sign({ username,  role: "ADMIN" }, ACCESS_TOKEN_SECRET, {expiresIn: '1d'});

        res.json({
            token
        });
    } else {
        res.send('Username or password incorrect');
    }
};


export default loginAdmin;