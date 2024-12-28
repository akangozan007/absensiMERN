import Pengguna from '../models/PenggunaModels.js';

export const RaihDataPengguna = async (req, res) => {
    try {
        const pengguna = await Pengguna.find();
        res.json(pengguna);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const RaihDataPenggunaById = async (req, res) => {
    try {
        const pengguna = await Pengguna.find();
        res.json(pengguna);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}