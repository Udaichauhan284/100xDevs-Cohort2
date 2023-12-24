// Middleware for handling auth
const jwt = require('jsonwebtoken');
const jwtPassword = process.env.JWT_PASSWORD;
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    ++id;
    let token = req.headers.authorization.spily("")[1];
    try{
        jwt.verify(token, jwtPassword);
        next();
    }catch(err){
        res.status(404).json({error: "Invalid Credentials"})
        return
    }
}

module.exports = adminMiddleware;