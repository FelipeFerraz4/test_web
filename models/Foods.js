const mongoose = require('mongoose');

const FoodsSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    category: {
        type: String,
        require: true,
    },
    quantity: {
        type: Number,
        require: true,
    },
    expirationDate: {
        type: Date,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    },
});

module.exports = mongoose.model('Foods', FoodsSchema);
