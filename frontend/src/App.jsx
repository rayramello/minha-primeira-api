import React, { useEffect, useState } from 'react';

function App() {
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/alunos')
      .then((res) => res.json())
      .then((data) => setAlunos(data))
      .catch((err) => console.error('Erro ao buscar alunos:', err));
  }, []);

  return (
    <div>
      <h1>Lista de Alunos</h1>
      <ul>
        {alunos.map((aluno) => (
          <li key={aluno.id}>{aluno.nome}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
