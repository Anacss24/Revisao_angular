const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Dados simulados (in-memory database)
let todos = [
  { id: 1, title: 'Comprar pão', completed: false },
  { id: 2, title: 'Estudar Angular', completed: false }
];

// Rotas
app.get('/todos', (req, res) => {
  res.json(todos);
});

app.post('/todos', (req, res) => {
    const newTodo = {
      id: todos.length + 1,
      title: req.body.title,
      completed: req.body.completed || false // Usa o valor enviado ou false por padrão
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
  });

app.delete('/todos/:id', (req, res) => {
  const todoId = parseInt(req.params.id);
  todos = todos.filter(todo => todo.id !== todoId);
  res.status(204).send();
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});
