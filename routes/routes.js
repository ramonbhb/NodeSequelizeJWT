const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');
const routes = Router();
const verificar = require ('../middlewares/autenticacao');

/* MIDDLEWARES */

routes.get('/', (req,res) => {
    res.status(200).json({
        mensagem: "Hello World",
        access_life: process.env.ACCESS_LIFE,
        access_secret: process.env.ACCESS_SECRET
    });
})

routes.post('/login', PessoaController.login);

routes.post('/logout', (req,res) => {
    res.json({auth: false, token:null});
});

routes.get('/pessoas', verificar(),PessoaController.readAll);
routes.get('/pessoas/:id', PessoaController.readOne);
routes.post('/pessoas',PessoaController.create);
routes.get('/meusdados', verificar(), PessoaController.myData)

module.exports = routes;