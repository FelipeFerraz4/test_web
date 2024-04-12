const express = require("express");
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const foods = require('./foods');

//middlewares json
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//routers
const routerFoods = require('./routes/Foods');
app.use('/api/foods', routerFoods); 

// Conectar ao Banco de Dados - usar URL fornecida pelo Atlas
mongoose.connect(process.env.DB_URL)
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
