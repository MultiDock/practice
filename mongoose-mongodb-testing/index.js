const mongoose = require('mongoose');
mongoose.set("strictQuery", false);
mongoose.connect('mongodb://127.0.0.1:27017/movieApp')
.then(() => {
    console.log('Connection Open')
})
.catch(err => {
    console.log('Oh no an error!')
    console.log(err)
})

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});

const Movie = mongoose.model('Movie', movieSchema);

// Movie.insertMany([
//     {title: 'Crank', year: 1999, score: 8.2, rating: 'R'},
//     {title: 'MadMax', year: 1992, score: 8.0, rating: 'R'},
//     {title: 'ALiens', year: 1994, score: 9.2, rating: 'R'},
//     {title: 'The 100', year: 1999, score: 5.2, rating: 'PG'},
//     {title: 'Transporter', year: 1999, score: 4.2, rating: 'R'},
// ])
//     .then(data => {
//         console.log('It worked')
//         console.log(data);
//     })