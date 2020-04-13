const mongoose = require('mongoose');

const WordSchema = new mongoose.Schema({
    wordEnglish:{
        type: String,
        required: true
    },
    wordPortuguese:{
        type: String,
        required: true
    },
    Description:{
        type: String,
        required: true
    },
    Syno:{
        type: String,
        required: true
    },
});

mongoose.model('Word', WordSchema);