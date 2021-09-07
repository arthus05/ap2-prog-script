# AP2 Programação em Script
## Aluno: Arthus Vinícius Cruz de Moura - 473223

Nesse projeto, fiz uma **API  rest**, com rotas de **CRUD** para posts de blog. Utilizando um serviço público de dados "mockados", https://jsonplaceholder.typicode.com, com a rota "/posts"

## Como iniciar o servidor

Deve-se instalar as dependências (pasta node_modules), e então inicializar o servidor, com os seguintes comandos:

```bash
npm i
npm run dev
```

## Testar/Utilizar a aplicação

Utilize algum programa para realizar requisições HTTP, como **insomnia** ou **postman**, e utilize as rotas, com os seguintes métodos:
* **GET:** http://localhost:6060/posts  
* **POST:** http://localhost:6060/posts
* **GET:** http://localhost:6060/posts/{id}
* **PUT:** http://localhost:6060/posts/{id}
* **DEL:** http://localhost:6060/posts/{id}

## Perguntas do trabalho

* O seu protótipo é descartável ou evolucionário? Justifique. 
	* Evolucionário. É uma REST API, a qual ainda pode-se adicionar mais entidades, com seus respectivos controllers. Além de ser possível, ao invés de utilizar um serviço para dados mokcados, um banco de dados real, utilizando alguma ORM, ou mesmo nativamente.
* Quais as características da linguagem escolhida fazem ela apropriada para o desenvolvimento de um protótipo? 
	* Desde a criação do NodeJS, o suporte ao JavaScript como linguagem para desenvolvimento backend vem ganhando muito suporte. Agora com o TypeScript, uma versão do JavaScript com tipagem mais forte, podemos ter as vantagens e robustês da tipagem, com todas as vantagens trazidas do JS.
* Que dificuldades você teve no desenvolvimento do protótipo? 
	* Nenhuma, trabalho com isso, e portanto não tive dificuldades nesse protótipo.
* Quais as vantagens de ter um protótipo desenvolvido antes da implementação do programa efetivo?
	* Já cria-se uma estrutura sobre a qual o projeto vai ser realizado, além de já detectar mudanças necessárias na regra de negócio e adequação de tecnologias pra cada cenário.