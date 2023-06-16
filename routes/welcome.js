const express = require('express');
const router = express.Router();
router.use(express.json());

router.get('/', async(req, res) => {
    try {
        res.status(200).json({
            error: false,
            message: "Hello, if you get this message, it means this service is running."
        });
    } catch (error) {
        res.status(500).json({
            error: true,
            message: 'Internal Server Error.'
        });
    }
});

module.exports = router;