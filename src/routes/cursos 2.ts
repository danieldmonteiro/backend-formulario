module.exports = function createCursosRouter() {
  const express = require('express');
  const router = express.Router();

  const cursos = [
    "Engenharia de Software",
    "Ciência da Computação",
    "Design UX/UI",
    "Segurança da Informação"
  ];

  router.get('/', (req: any, res: any) => {
    res.json(cursos);
  });

  return router;
};


// const localCursosRouter = express.Router();

// const cursos = [
//   "Engenharia de Software",
//   "Ciência da Computação",
//   "Design UX/UI",
//   "Segurança da Informação"
// ];

// localCursosRouter.get('/', (req: any, res: any) => {
//   res.json(cursos);
// });

// module.exports = localCursosRouter;
