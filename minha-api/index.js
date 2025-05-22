const express = require('express');
const cors = require('cors');      // Importa o cors
const app = express();
const port = 3000;

app.use(cors());                   // Habilita o cors para todas as rotas
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API funcionando!');
});

app.get('/alunos', (req, res) => {
  res.json([
    { id: 1, nome: 'João' },
    { id: 2, nome: 'Maria' },
    { id: 3, nome: 'Maria Pandora' },
    { id: 4, nome: 'Rayra Mello' },
    { id: 5, nome: 'Rayssa Mello' },
    { id: 6, nome: 'Rayssa Mello' },
    { id: 7, nome: 'Raimunda Mello' },
    { id: 8, nome: 'Sidnei Carvalho' }    
  ]);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
