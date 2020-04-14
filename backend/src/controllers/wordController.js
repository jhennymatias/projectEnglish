const mongoose      = require('mongoose');
const Word          = mongoose.model('Word');

module.exports = {
    async index(req, res){
        const word = await Word.find();
        return res.json(word);
    },
    async update(req, res){
        const word = await Word.findByIdAndUpdate(req.params.id, req.body, {new:true});
        return res.json(word);
    },
    
    async destroy(req, res){
        const word = await Word.findByIdAndRemove(req.params.id);
        return res.send("Removido");
    },
    async store(req, res){
        const word = await Word.create(req.body);
        return res.json(word);
    },
    async show(req, res){
        const word = await Word.findById(req.params.id);
        return res.json(word);
    },
    async home(req, res){
        const word = await Word.findOne();
        return res.json(word);
    },
    
}




   



