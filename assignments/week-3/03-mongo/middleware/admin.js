const { Admin } = require('../db');
// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const username = req.body.username;
    const isAdminExist = await Admin.exists({username : username});
    if(isAdminExist){
        console.log("Yes ADMIN Exist " + isAdminExist);
        next();
    }else{
        res.status(404).json({
            msg : "Check Your Credintials"
        })
        return; 
    }
    
}

module.exports = adminMiddleware;