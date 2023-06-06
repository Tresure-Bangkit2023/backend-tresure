const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
dotenv.config();

// Fungsi untuk registrasi pengguna
const registerUser = (req, res) => {
    // Dapatkan data pengguna dari body permintaan
    const { email, fullName, username, password, confirmPassword, age, likedCategories } = req.body;

    // Periksa apakah password dan konfirmasi password cocok
    if (password !== confirmPassword) {
        return res.status(400).json({ message: 'Password and confirm password do not match' });
    }

    // Generate salt untuk hashing password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    // Buat objek pengguna baru dan Simpan pengguna ke basis data
    User.create({
            email,
            full_name: fullName,
            username,
            password: hashedPassword,
            age,
            liked_categories: likedCategories
        })
        .then(() => {
            return res.status(201).json({ message: 'User registered successfully' });
        })
        .catch((error) => {
            console.error('Error registering user:', error);
            return res.status(500).json({ message: 'Failed to register user' });
        });
};


// Fungsi untuk mendapatkan semua pengguna
const getUsers = async(req, res) => {
    try {
        const users = await User.findAll();
        return res.status(200).json({ users });
    } catch (error) {
        console.error('Error getting users:', error);
        return res.status(500).json({ message: 'Failed to get users' });
    }
};

// Fungsi untuk mendapatkan pengguna berdasarkan ID
const getUserById = async(req, res) => {
    const { userId } = req.params;
    try {
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.status(200).json({ user });
    } catch (error) {
        console.error('Error getting user:', error);
        return res.status(500).json({ message: 'Failed to get user' });
    }
};


// Fungsi untuk memperbarui pengguna
const updateUser = async(req, res) => {
    const { userId } = req.params;
    const { email, fullName, username } = req.body;

    try {
        const user = await User.findByPk(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        await user.update({
            email,
            fullName,
            username
        });

        return res.status(200).json({ message: 'User updated succesfully' });
    } catch (error) {
        console.error('Error updating user:', error);
        return res.status(500).json({ message: 'Failed to update user' });
    }
};


// Fungsi untuk menghapus pengguna
const deleteUser = async(req, res) => {
    const { userId } = req.params;

    try {
        const user = await User.findByPk(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        await user.destroy();

        return res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error('Error deleting user:', error);
        return res.status(500).json({ message: 'Failed to delete user' });
    }
};


module.exports = {
    registerUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser,
};