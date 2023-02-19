const mongoose = require('mongoose');
mongoose.set("strictQuery", false);
mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
    .then(() => {
        console.log('Connection Open')
    })
    .catch(err => {
        console.log('Oh no an error!')
        console.log(err)
    })

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 20
    },
    price: {
        type: Number
    },
    onSale: {
        type: Boolean,
        default: false
    }
});

const Product = mongoose.model('Product', productSchema);

const bike = new Product({name: ' Bike', price: 59})
bike.save()
    .then(data => {
        console.log('it worked')
        console.log(data);
    })
    .catch(err => {
        console.log('error')
        console.log(err)
    })

