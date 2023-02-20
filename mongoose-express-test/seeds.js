const mongoose = require('mongoose');

const Product = require('./models/product');

    mongoose.set("strictQuery", false);
    mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
    .then(() => {
        console.log('monogo Connection Open')
    })
    .catch(err => {
        console.log('Oh no an error!')
        console.log(err)
    })
    
const seedProducts = [
    {
        name: 'Ruby Grapefruit',
        price: 1.99,
        category: 'fruit'
    },
    {
        name: 'Tomato',
        price: 3.99,
        category: 'vegetable'
    },
    {
        name: 'Dragonfruit',
        price: 4.00,
        category: 'fruit'
    },
    {
        name: 'Milk',
        price: 1.99,
        category: 'dairy'
    },
]

Product.insertMany(seedProducts)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })