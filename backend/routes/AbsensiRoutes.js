import express from 'express';
import { RaihDataAbsen, RaihDataAbsenById } from '../controllers/AbsensiController.js';

const AbsensiRouter = express.Router();

AbsensiRouter.get('/pengguna/absen',RaihDataAbsen);
AbsensiRouter.get('/pengguna/absen/:id', RaihDataAbsenById);

export default AbsensiRouter;