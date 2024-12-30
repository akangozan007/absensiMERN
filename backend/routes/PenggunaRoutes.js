import express from 'express';
import { RaihDataPengguna, RaihDataPenggunaById, RegistAddPengguna, LoginPengguna } from '../controllers/PenggunaControllers.js';
import cookieParser from 'cookie-parser';
import Session from 'express-session';

const PenggunaRouter = express.Router();
// list data user
PenggunaRouter.get('/pengguna', RaihDataPengguna);
PenggunaRouter.get('/pengguna/:id',RaihDataPenggunaById);
// register
PenggunaRouter.post('/register', RegistAddPengguna);
// Tambahkan middleware cookie-parser
PenggunaRouter.use(cookieParser());

// Setup session middleware
PenggunaRouter.use(
    Session({
        secret: 'secret', // Ganti dengan secret yang aman
        resave: false,
        saveUninitialized: false,
        cookie: {
            secure: false, // Gunakan true jika menggunakan HTTPS
            maxAge: 1000 * 60 * 60 * 24, // 1 hari
        },
    })
);

// Route login
PenggunaRouter.post('/login', LoginPengguna);


export default PenggunaRouter;