module.exports = function createMatriculaRouter() {
  const express = require('express');
  const router = express.Router();

  router.post('/', (req: any, res: any) => {
    const aluno = req.body;

    if (!aluno || !aluno.nome || !aluno.email || !aluno.curso) {
      return res.status(400).json({ erro: 'Todos os campos são obrigatórios.' });
    }

    console.log('Aluno cadastrado:', aluno);

    return res.status(201).json({ mensagem: 'Matrícula realizada com sucesso!', aluno });
  });

  return router;
};


// const localMatriculaRouter = express.Router(); // nome único para este arquivo
// const { Aluno } = require('../types/aluno');

// localMatriculaRouter.post('/', (req: any, res: any) => {
//   const aluno = req.body;

//   if (!aluno.nome || !aluno.email || !aluno.curso) {
//     return res.status(400).json({ erro: 'Todos os campos são obrigatórios.' });
//   }

//   console.log('Aluno cadastrado:', aluno);

//   return res.status(201).json({ mensagem: 'Matrícula realizada com sucesso!', aluno });
// });

// module.exports = localMatriculaRouter;
