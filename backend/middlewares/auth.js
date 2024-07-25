const jwt = require('jsonwebtoken');

const secretkey = "lock"

const protect = async (req,res,next) => {
    let token;
     
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {

        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, secretKey)
            req.user = decoded;
            next();
        } catch (error) {
            res.status(401).json({
                success: false,
                message: 'Token is invalid or expired'
            })
        }
    }
    if (!token) {
        res.status(401).json({
            message: 'Token is invalid or expired'
        })
    }
}
const authorize = (role) => {
    return (req, res, next) => {
        if (req.user.role == role)  {
            next();
        } else {
            return res.status(403).json({
                message: 'This user is not authorised to call this specific API'
            })
        }
    }
}



Module.exports = { protect, authorize }