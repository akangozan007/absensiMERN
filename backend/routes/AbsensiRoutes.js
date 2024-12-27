import express from 'express';
import { RaihDataAbsensi } from '../controllers/AbsensiController';

const AbsensiRouter = express.Router();

AbsensiRouter.get('/pengguna/absen');

export default AbsensiRouter;