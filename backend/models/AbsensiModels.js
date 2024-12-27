import mongoose from "mongoose";

const Absensi = mongoose.Schema({
    namaYgAbsen:{
        type:String,
        required:true
    },
    tanggalAbsen:{
        type:String,
        required:true
    },
    jamAbsen:{
        type:String,
        required:true
    },
    kodePengguna:{
        type:String,
        required:true
    },
});

export default mongoose.model('Absensi', Absensi);