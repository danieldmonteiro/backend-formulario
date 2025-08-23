# Backend da AVA1 da disciplina Desenvolvimento Backend

## Matrículas de aluno para cursos on-line

Imagine que uma empresa de serviços educacionais está lançando uma plataforma para alunos realizarem matrículas em cursos on-line. O sistema deve permitir que os usuários vejam uma lista de cursos disponíveis, selecionem um deles e realizem a matrícula informando seus dados pessoais. Para isso, será necessário criar uma interface responsiva e acessível, além de um servidor que receba e armazene essas informações.

Crie uma aplicação web que ofereça uma experiência fluida e interativa ao usuário para a matrícula em cursos on-line, garantindo que os dados informados sejam enviados corretamente a uma API construída com boas práticas e segurança.

Procedimentos para elaboração do TD

1. Criação do Frontend com Vue.js:

Criar um componente principal chamado FormularioMatricula.vue.
Incluir campos para nome completo, e-mail e curso selecionado.
Utilizar princípios de UX antecipada: mensagens de erro claras, validações imediatas, botões com feedback visual.
Exibir a lista de cursos a partir de um array local ou uma chamada à API.

2. Criação da API com Node.js, Express e TypeScript:

Criar um projeto Node com TypeScript e Express.
Criar uma rota GET/cursos que retorna uma lista de cursos.
Criar uma rota POST/matrícula que recebe os dados do aluno.
Validar os dados recebidos usando TypeScript (tipagem via interface).
Responder com os códigos HTTP adequados: 201 Created, 400 Bad Request etc.

3. Integração Vue.js + API:

Realizar uma requisição GET no carregamento da página para exibir os cursos disponíveis.
Fazer uma requisição POST ao submeter o formulário com os dados preenchidos.
Exibir mensagens de sucesso ou erro com base na resposta da API.
