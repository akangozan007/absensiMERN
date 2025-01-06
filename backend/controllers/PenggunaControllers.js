import Pengguna from '../models/PenggunaModels.js';
import session from 'express-session';

// Get all users
export const RaihDataPengguna = async (req, res) => {
    try {
        const pengguna = await Pengguna.find();
        res.json(pengguna);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get user by ID
export const RaihDataPenggunaById = async (req, res) => {
    try {
        const pengguna = await Pengguna.findById(req.params.id);
        if (!pengguna) {
            return res.status(404).json({ message: "Pengguna tidak ditemukan" });
        }
        res.json(pengguna);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

// Register user
export const RegistAddPengguna = async (req, res) => {
    const pengguna = new Pengguna(req.body);
    try {
        const penggunaADD = await pengguna.save();
        res.status(201).json(penggunaADD);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// User login
export const LoginPengguna = async (req, res) => {
    const { username, password } = req.body;
    try {
        const pengguna = await Pengguna.findOne({ username });
        if (!pengguna) {
            return res.status(404).json({ message: "Pengguna tidak ditemukan" });
        }

        // Check password (assume plain text for this example)
        const isPasswordValid = password === pengguna.password; // Replace with hashed password check
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Password salah" });
        }

        // Set session
        req.session.pengguna = {
            id: pengguna._id,
            username: pengguna.username,
            role: pengguna.level,
        };
        req.session.save(err => {
            if (err) {
                console.error("Gagal menyimpan session:", err);
                return res.status(500).json({ message: "Gagal menyimpan session" });
            }
            console.log("Session berhasil disimpan:", req.session.pengguna);
            res.status(200).json({ message: "Login berhasil", pengguna: req.session.pengguna });
        });

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get session data
export const GetSessionPengguna = async (req, res) => {
    if (req.session.pengguna) {
        console.log("Session saat login:", req.session);
        return res.status(200).json(req.session.pengguna);
    } else {
        return res.status(401).json({ message: "Tidak ada session aktif" });
    }
};

// User logout
export const LogoutPengguna = async (req, res) => {

    if (req.session.pengguna) {
        req.session.destroy(err => {
            if (err) {
                console.log('Gagal menghapus session:', err);
                return res.status(500).json({ message: "Gagal logout" });
            }
            res.clearCookie('connect.sid');
            return res.status(200).json({ message: "Berhasil logout" });
        });
    } else {
        return res.status(401).json({ message: "Tidak ada session aktif" });
    }
};
