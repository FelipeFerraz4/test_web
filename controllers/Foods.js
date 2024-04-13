const Foods = require('../models/Foods');
const mongoose = require('mongoose');

class FoodsControllers {
    static async getFoods (req, res) {
        try {
            console.log('getFoods');
            const foods = await Foods.find();
            res.status(200).json(foods);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async getFoodsById (req, res) {
        try {
            console.log('getFoodsById');
            const id = req.params.id;
            // console.log(id);
            // const objectId = new mongoose.Types.ObjectId(id);
            const foods = await Foods.findById(id);
            // if(foods == null) {
            //     res.status(500).json({ message: 'Not find element' });
            // }
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

    static async updateFood (req, res) {
        try {  
            console.log('update food');
            const id = req.params.id;
            const {name, category, quantity, expirationDate, price } = req.body;
            const food = {
                name,
                category,
                quantity,
                expirationDate,
                price
            };

            const updateFood = await Foods.updateOne({_id: id}, food);
            res.status(200).json(food);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async deleteFood (req, res) {
        try {  
            console.log('delete food');
            const id = req.params.id;

            await Foods.deleteOne({_id: id});
            res.status(200).json({message: 'deleted food'});
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = FoodsControllers
