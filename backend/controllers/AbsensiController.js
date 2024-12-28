import Absensi from '../models/AbsensiModels.js';


export const RaihDataAbsen = async (req, res) => {
    try {
        const absensi = await Absensi.find();
        res.json(absensi);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const RaihDataAbsenById = async (req, res) => {
    try {
        const absensi = await Absensi.find();
        res.json(absensi);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}