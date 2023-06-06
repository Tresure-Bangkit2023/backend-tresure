const express = require('express');
const {
    getUsers,
    getUserById,
    updateUser,
    deleteUser,
    registerUser
} = require('../controllers/userController');
const { authenticateToken } = require('../middlewares/authMiddleware');

const router = express.Router();

// Route untuk mendapatkan semua pengguna
router.get('/users', authenticateToken, getUsers);

// Route untuk mendapatkan pengguna berdasarkan ID
router.get('/users/:userId', authenticateToken, getUserById);

// Route untuk memperbarui pengguna
router.patch('/users/:userId', authenticateToken, updateUser);

// Route untuk menghapus pengguna
router.delete('/users/:userId', authenticateToken, deleteUser);

// Route untuk membuat pengguna
router.post('/users', registerUser);

module.exports = router;