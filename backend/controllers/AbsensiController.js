import Absensi from '../models/AbsensiModels.js';

// get data absensi semua orang
export const RaihDataAbsen = async (req, res) => {
    try {
        const absensi = await Absensi.find();
        res.json(absensi);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

// get data absensi untuk user tertentu
export const RaihDataAbsenById = async (req, res) => {
    
    try {
        const absensi = await Absensi.find(req.params.id);
        res.json(absensi);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}