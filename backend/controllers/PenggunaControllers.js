import Pengguna from '../models/PenggunaModels.js';
import session from 'express-session';
// get data user untuk proses tertentu 
export const RaihDataPengguna = async (req, res) => {
    try {
        const pengguna = await Pengguna.find();
        res.json(pengguna);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
// get data user untuk proses tertentu
export const RaihDataPenggunaById = async (req, res) => {
    try {
        const pengguna = await Pengguna.findById(req.params.id)
        res.json(pengguna);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

// fitur register untuk penginputan absensi

export const RegistAddPengguna = async (req, res) => {
    const pengguna = new Pengguna(req.body);
    try {
        const penggunaADD = await pengguna.save();
        res.status(201).json(penggunaADD);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

// fitur login pengguna

export const LoginPengguna = async (req, res) => {
    const { username, password } = req.body;
    try {
        const pengguna = await Pengguna.findOne({ username });
        if (!pengguna) {
            return res.status(404).json({ message: "Pengguna tidak ditemukan" });
        }
        const jikaPasswordValid = password === pengguna.password;
        if (!jikaPasswordValid) {
            return res.status(401).json({ message: "Password salah" });
        }

        // Simpan data session sebelum mengirim respons
        req.session.pengguna = {
            id: pengguna._id,
            username: pengguna.username,
            role: pengguna.level,
        };
        console.log(req.session.pengguna);

        // Kirim respons
        return res.status(201).json({ message: "Login Berhasil ...", pengguna });
    } catch (error) {
        // Tangani kesalahan
        return res.status(400).json({ message: error.message });
    }
};
