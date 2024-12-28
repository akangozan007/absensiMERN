import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import PenggunaRoutes from './controllers/PenggunaControllers.js';
import AbsensiRoutes from './controllers/AbsensiController.js';

const app = express();

mongoose.connect('mongodeb://localhost:27017/absensi_db', {
    useNewUrlParser:true,
    useUnifiedTopolofy:true
});

const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('database connected'));

app.use(cors());

app.use(express.json());
app.use(PenggunaRoutes);
app.use(AbsensiRoutes);

app.listen(5000, () => console.log('server up and running'));

