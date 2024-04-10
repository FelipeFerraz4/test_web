const express = require("express");
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const foods = require('./foods');

//import schema
const Foods = require('./models/Foods');

//middlewares json
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//controllers
app.get("/api/foods", async (req,res)=>{
    res.send(foods);
});

app.post('/api/foods', (req,res) => {
    console.log('new food');
    const food = {
        "id":req.body,
        "name":req.body,
        "category": req.body,
        "quantity": req.body,
        "expirationDate": req.body,
        "price": req.body
    };
    res.send("New foods register with success");
});













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
