const express       = require('express');
const mongoose      = require('mongoose');
const requireDir    = require('require-dir');
const cors          = require('cors');
//inicia aapp
const app = express();
app.use(express.json());
app.use(cors());
//iniciando db
mongoose.connect(
    'mongodb://localhost:27017/ingles', 
    {useNewUrlParser: true,
    useUnifiedTopology: true
});

requireDir('./src/models');
const Pa = mongoose.model('Word');
app.get("/", (req, res)=>{
    Pa.create({
        wordEnglish: "teste",
        wordPortuguese:'teste',
        Description:'teste',
        Syno: 'teste',
        Tag: 'teste'
    })
});
app.use('/', require('./src/routes'));

app.listen(3322);
