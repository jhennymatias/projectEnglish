const express = require('express');
const routes = express.Router();

const wordController = require('./controllers/wordController');

routes.get("/words", wordController.index);
routes.get('/words/:id', wordController.show);
routes.post('/words', wordController.store);
routes.put('/words/:id', wordController.update);
routes.delete('/words/:id', wordController.destroy);
routes.get('/wordss', wordController.home);
module.exports = routes;