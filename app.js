const express = require("express");
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const foods = require('./foods');

//middlewares json
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Rotas
app.get("/", (req,res)=>{
    res.send(foods);
});

// Conectar ao Banco de Dados - usar URL fornecida pelo Atlas
mongoose.connect('mongodb+srv://felipestudy2402:Pot00i8CZFBBL4ux@cluster0.kkygxab.mongodb.net/')
    .then(() => {
        console.log('Connected to DataBase');
        
        // Servidor
        app.listen(process.env.PORT, () => {
            console.log("Server is running");
        });
    })
    .catch((err) => {
        console.log(err);
    });
