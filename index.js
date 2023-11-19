import express from 'express';
import { buscarUfs, buscarUfPorId, buscarUfsPorNome } from './servicos/serivoco.js';
import handlebars from 'express-handlebars';
import bodyParser from 'body-parser';
const app = express();


app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));


//rotas



app.get('/', (req, res) => {
    res.render('home');
  
});

app.post('/ufs', (req, res) => {
  const nomeUf = req.body.nomeUF;
  console.log('Nome da UF recebido:', nomeUf);

  const resultado = nomeUf ? buscarUfsPorNome(nomeUf) : buscarUfs();
  console.log('Resultado da busca:', resultado);

  if (resultado.length > 0) {
     res.render('resultadoBusca', { estados: resultado });
  } else {
     res.status(404).send({ "erro": "Nenhuma UF encontrada" });
  }
});






app.get('/ufs/:iduf', (req, res) => {
  const uf = buscarUfPorId(req.params.iduf);

  if (uf) {
    res.json(uf);
  } else if (isNaN(parseInt(req.params.iduf))) {
      res.status(400).send({ "erro": "Requisição inválida" });
  } else {
      res.status(404).send({ "erro": "UF não encontrada" });
  }
});

app.listen(8080, () => {
  console.log('Servidor iniciado na porta 8080');
});