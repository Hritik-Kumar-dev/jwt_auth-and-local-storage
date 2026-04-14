const jwt = require("jsonwebtoken");


function authmiddleware(req,res,next) {
  const token = req.headers.token;
   if (!token) {
     res.status(403).send({
       message: "you are not logged in ",
     });
     return;
   }
 
   const decoded = jwt.verify(token, "hritik123");
   const username = decoded.username;
   if (!username) {
     res.status(403).json({
       message: " malformed token ",
     });
     return;
   }


   req.username = username ; 
   next();
}
module.exports= {authmiddleware}