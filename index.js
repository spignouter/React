require('dotenv').config()
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 5000;
const app = express()

app.use(express.json());
app.use(cookieParser());
app.use(cors()); //для взаимодействия с сервером из браузера


const start = async ()=>{
    try{
        app.listen(PORT, ()=> console.log("Server started on PORT =", PORT))

        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(()=> console.log('MongoDB has started...'))
        .catch(e => console.log(e))

    }catch(e){
        console.log(e);
    }
}

start();