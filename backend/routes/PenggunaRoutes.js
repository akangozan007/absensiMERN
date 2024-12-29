import express from 'express';
import { RaihDataPengguna, RaihDataPenggunaById, RegistAddPengguna, LoginPengguna } from '../controllers/PenggunaControllers.js';


const PenggunaRouter = express.Router();
// list data user
PenggunaRouter.get('/pengguna', RaihDataPengguna);
PenggunaRouter.get('/pengguna/:id',RaihDataPenggunaById);
// register
PenggunaRouter.post('/register', RegistAddPengguna);
//login
PenggunaRouter.post('/login', LoginPengguna);

export default PenggunaRouter;