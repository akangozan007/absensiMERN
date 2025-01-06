import express from 'express';
import { 
    RaihDataPengguna,
    RaihDataPenggunaById, 
    RegistAddPengguna, 
    LoginPengguna,
    GetSessionPengguna,
    LogoutPengguna,
} from '../controllers/PenggunaControllers.js';
import cookieParser from 'cookie-parser';
import Session from 'express-session';

const PenggunaRouter = express.Router();

// Tambahkan middleware cookie-parser
PenggunaRouter.use(cookieParser());

// Setup session middleware
PenggunaRouter.use(
    Session({
        secret: 'secret', 
        resave: false,
        saveUninitialized: false,
        cookie: {
            secure: false, // Set true jika menggunakan HTTPS
            maxAge: 1000 * 60 * 60 * 24, // 1 hari
        },
        name: 'connect.sid' // Nama cookie sesi
    })
);

// Rute list data pengguna
PenggunaRouter.get('/pengguna', RaihDataPengguna);
PenggunaRouter.get('/pengguna/:id', RaihDataPenggunaById);

// Rute register
PenggunaRouter.post('/register', RegistAddPengguna);

// Rute login
PenggunaRouter.post('/login', LoginPengguna);

// Rute untuk mendapatkan sesi pengguna
PenggunaRouter.get('/dashboard', GetSessionPengguna);

// Rute untuk logout
PenggunaRouter.get('/dashboard/logout', LogoutPengguna);

export default PenggunaRouter;
