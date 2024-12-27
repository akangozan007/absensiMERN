import express from 'express';
import { RaihDataPengguna } from '../controllers/PenggunaControllers.js';


const PenggunaRouter = express.Router();

PenggunaRouter.get('/pengguna', RaihDataPengguna);

export default PenggunaRouter;