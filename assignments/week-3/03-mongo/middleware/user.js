const { User } = require('../db');
async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const username = req.headers.username;
    const isUserExist = await User.exists({username : username});
    if(isUserExist){
        console.log("Yes User Exists " + isUserExist);
        next();
    }else{
        res.status(404).json({
            msg : "User Dosnt Exists"
        })
    }
}

module.exports = userMiddleware;