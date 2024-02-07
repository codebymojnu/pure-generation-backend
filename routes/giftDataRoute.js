const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const giftDataController = require('../controllers/giftDataController');
const verifyToken = require('../middlewares/verifyToken');

function isAdmin(req, res, next) {
    const token = req.header('Authorization');

    if (!token) return res.status(401).json({ message: 'Access denied' });

    try {
        const decoded = jwt.verify(token, 'mdmojnumiah');
        const isAdmin = decoded.isAdmin; // Assuming isAdmin is a property in your token payload
        console.log(isAdmin);
        if (isAdmin === true) {
            next();
        } else {
            return res.status(403).json({ message: 'User does not have admin privileges' });
        }
    } catch (error) {
        console.error('Error verifying token:', error);
        res.status(400).json({ message: 'Invalid token' });
    }
}


// Routes for gift data
router.post('/', verifyToken, giftDataController.createGiftData); // Protect the route with verifyToken middleware
router.get('/', isAdmin, verifyToken, giftDataController.getAllGiftData); // Protect the route with isAdmin middleware
router.get('/:id', verifyToken, giftDataController.getGiftDataById); // Protect the route with verifyToken middleware
router.put('/:id', verifyToken, giftDataController.updateGiftData); // Protect the route with verifyToken middleware
router.delete('/:id', verifyToken, giftDataController.deleteGiftData); // Protect the route with verifyToken middleware

module.exports = router;
