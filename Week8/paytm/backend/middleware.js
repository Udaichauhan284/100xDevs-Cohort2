const {JWT_SECRET} = require("./config");
const jwt = require("jsonwebtoken");

const authMiddleware = (req,res,next) => {
  const authMiddleware = req.headers.authorization;

  if(!authMiddleware || !authHeader.startsWith('Bearer ')){
    return res.status(403).json({});
  }

  const token = authHeader.split(' ')[1];

  try{
    const decoded = jwt.verify(token, JWT_SECRET);

    if(decoded){
      req.userId = decoded.userId;
      next();
    }else{
      return res.status(403).json({});
    }
  }catch(err){
    return res.status(403).json({});
  }
};
module.exports = {
  authMiddleware
}