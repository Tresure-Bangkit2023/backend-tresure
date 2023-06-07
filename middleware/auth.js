const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const verifyToken = (req, res, next) => {
    try{
        if(req.headers.authorization){
            const token = req.headers.authorization.split(' ')[1];
        
            if (!token) {
                return res.status(403).json({ message: 'Access denied.' });
              }
            
            jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
                if (error) {
                    console.error(error);
                    return res.status(403).json({ message: 'Failed to authenticate token.' });
                }
        
                req.user = decoded;
                next();
                });
            }
        
        else{
            return res.status(403).json({ message: 'Access denied.' });
        }
    }
    catch(error){
        return res.status(500).json({ error: 'Internal server error!' });
    }
};

module.exports = verifyToken;
