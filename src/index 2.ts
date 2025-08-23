const express = require('express');
const cors = require('cors');
const cursosRouter = require('./routes/cursos') ();       // CommonJS
const matriculaRouter = require('./routes/matricula')(); // CommonJS

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Rotas
app.use('/cursos', cursosRouter);      // agora é um Router válido
app.use('/matricula', matriculaRouter);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
