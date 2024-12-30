import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import PenggunaRoutes from './routes/PenggunaRoutes.js';
import AbsensiRoutes from './routes/AbsensiRoutes.js';

const app = express();

mongoose.connect('mongodb://localhost:27017/absensi_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
});

const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('database connected'));

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
}));

app.use(express.json());
app.use(PenggunaRoutes);
app.use(AbsensiRoutes);
app.use('/pengguna', PenggunaRoutes);

app.listen(5000, () => console.log('server up and running'));

