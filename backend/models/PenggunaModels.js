import mongoose from "mongoose";

const Pengguna = mongoose.Schema({
    nama:{
        type:String,
        required:true
    },
    level:{
        type:String,
        required:true
    },
    whatsapp:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    kelas:{
        type:String,
        required:true
    },
    jurusan:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
});



export default mongoose.model('Pengguna', Pengguna);
