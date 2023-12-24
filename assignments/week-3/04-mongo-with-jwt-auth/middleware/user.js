const jwt = require('jsonwebtoken');
const {User} = require('../db');
const jwtPassword = process.env.JWT_PASSWORD;
async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization?.replace("Dearer ", " ");
    try{
        const response = jwt.verify(toke, jwtPassword);
        const user = await User.find({username : response.username});
        req.user = user;
        next();
    }catch(err){
        res.status(404).json({error : "Invalid Credentials"})
        return 
    }
}

module.exports = userMiddleware;