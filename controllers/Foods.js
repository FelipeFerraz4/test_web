const Foods = require('../models/Foods');
const mongoose = require('mongoose');

class FoodsControllers {
    static async getFoods (req, res) {
        try {
            const foods = await Foods.find();
            res.status(200).json(foods);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async getFoodsById (req, res) {
        try {
            const id = req.params.id;
            // console.log(id);
            // const objectId = new mongoose.Types.ObjectId(id);
            const foods = await Foods.findById(id);
            // console.log('aqui' + foods);
            // if(!foods){
            //     res.status(422).json({ message: 'user not find' });
            // }
            res.status(200).json(foods);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    
    static async newFood (req, res) {
        console.log('new food');
        const {name, category, quantity, expirationDate, price } = req.body;
    
        const food = {
            name,
            category,
            quantity,
            expirationDate,
            price
        };
    
        if (!name || !category || !quantity || !expirationDate || !price) {
            return res.status(422).json({ error: "Missing required fields" });
        }
    
        try {
            // Se Foods.create() for um método estático da classe Foods
            await Foods.create(food);
            res.status(201).json({ message: 'Food added successfully' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = FoodsControllers
