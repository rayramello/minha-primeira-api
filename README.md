Minha Primeira API
Projeto com backend em Node.js + Express e frontend em React.

Sobre
Este projeto é uma API simples para gerenciar uma lista de alunos, com frontend em React consumindo os dados do backend.

Observações:
Este projeto foi desenvolvido como atividade acadêmica e serve como base para aprendizagem e prática dos conceitos de APIs REST e frontend React.

Como rodar
Backend
Navegue até a pasta do backend:

cd minha-api

Instale as dependências:

npm install

Inicie o servidor:

node index.js

O servidor estará rodando em http://localhost:3000.

Frontend
Navegue até a pasta do frontend:

cd frontend

Instale as dependências:

npm install

Inicie o frontend:

npm run dev

O frontend estará rodando em http://localhost:5173.

Rotas disponíveis
GET / — Retorna uma mensagem de teste indicando que a API está funcionando.

GET /alunos — Retorna uma lista estática de alunos no formato JSON.

Tecnologias utilizadas
Node.js

Express

React

Vite (para o frontend)

Estrutura do projeto

minha-primeira-api/

├── minha-api/ # Backend (Node.js + Express)

│ └── index.js

├── frontend/ # Frontend (React + Vite)

│ ├── src/

│ ├── public/

│ └── package.json

└── README.md

Como contribuir
Faça um fork do projeto.

Crie uma branch para sua feature: git checkout -b minha-feature

Faça commit das suas alterações: git commit -m "Minha nova feature"

Envie para sua branch: git push origin minha-feature

Abra um Pull Request no repositório original.

