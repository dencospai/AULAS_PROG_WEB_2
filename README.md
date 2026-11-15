# Aula 05 – Organizando uma API: Separando as Rotas do Servidor

## Contextualização

Até o momento, todas as rotas estavam implementadas diretamente no arquivo `server.js`. Embora essa abordagem funcione em aplicações pequenas, à medida que o projeto cresce, concentrar todas as rotas em um único arquivo pode dificultar a organização, a leitura e a manutenção do código.

Nesta etapa, aprenderemos a **separar as rotas do arquivo principal do servidor**, utilizando o recurso ` { Router } ` do Express.js. Com essa organização, o arquivo `server.js` ficará responsável pela configuração e inicialização da aplicação, enquanto o arquivo `usuarioRoutes.js` concentrará as rotas relacionadas ao gerenciamento de usuários.

Essa prática representa um primeiro passo para a **modularização do back-end**, permitindo desenvolver aplicações mais organizadas e facilitando futuras implementações.

## 📂 Organização do projeto

Usando como base a estrutura de pastas da aula anterior, a aplicação será organizada da seguinte forma com a inserção arquivo `routes\usuarioRoutes.js` com a finalidade de centralizar as rotas:

```text
projeto/
│
├── routes/    <-- Pasta para as rotas
│   └── usuarioRoutes.js  <-- Arquivo com as rotas
│
├── server.js
└── package.json
```
### Entendendo a separação (acompanhe visualizando o código disponível)

O Express possui um recurso chamado `{ Router }` que permite separar um conjunto de rotas da aplicação principal.
```javascript
import { Router } from "express";
```
Podemos imaginar o { Router } como um organizador de rotas dentro da aplicação. Em vez de concentrar todas as rotas no `server.js`, utilizamos `{ Router }` para agrupá-las em um arquivo específico para elas.
O interessante é que não precisamos mudar a lógica de funcionamento das nossas rotas. Vamos apenas mudar o lugar onde elas estão escritas, onde antes estavam no `server.js` para `usuarioRoutes.js`. Então a linha.
Após importar `{ Render}` do Express com a linha `import { Router } from "express"` no usuarioRouter.js, agora criamos uma constante que podemos chamar de `router` no qual instancia o recurso { Router } do Express.
```javascript
const router = Router();
```
A constante router será utilizada no lugar de app na definição de todas as rotas transferidas para o arquivo usuarioRoutes.js. Por exemplo:

// Antes (server.js)
```javascript
app.get("/usuario", (req, res) => {
    return res.json(lista)
})
```

// Depois (usuarioRoutes.js)
`render.get("/", (req, res) => {
    return res.json(lista)
})
```
Essa alteração permite que as rotas sejam gerenciadas pelo { Router } do Express através da constante router, mantendo-as separadas da configuração principal do servidor. E a alteração da `/usuario` para `/`porque ela futuramente será definida no arquivo `server.js` ao longo dessa aula.

Por fim, após inserir todas as rotas, alterando `app.` por `router.` e rota `"/usuario"` por `"/"`devemos adicionar a seguinte linha ao final do arquivo usuarioRoutes.js:
```javascript
export default router;
```
Essa linha é fundamental, pois permite exportar as rotas e possa ser importado e utilizado em outros arquivos da aplicação, como o server.js.
Para compreender melhor, imagine que o arquivo usuarioRoutes.js representa um setor responsável por gerenciar todas as rotas relacionadas aos usuários. O export default funciona como uma maneira de disponibilizar esse setor para o restante da aplicação.
Dessa forma, o arquivo server.js poderá importar o Router definido em usuarioRoutes.js e utilizá-lo para registrar as rotas responsáveis pelo gerenciamento dos usuários, mantendo o código mais organizado e separado por responsabilidades.
Sem o `export default router;`, não será possível importar esse Router no server.js da maneira que estamos utilizando em nosso projeto.


Agora, indo para o arquivo `server.js`, devemos adicionar a seguinte linha logo abaixo da importação do Express, no início do código:
```javascript
import express from "express"
import usuarioRoutes from "./routes/usuarioRoutes.js"
```
A segunda linha é responsável por importar a rota exportada do arquivo usuarioRoutes.js. Dessa forma, o arquivo server.js terá acesso as rotas de usuários, permitindo que elas sejam registradas e utilizadas pela aplicação.

Agora, vamos entender por que alteramos a rota `/usuario` para `/` no arquivo usuarioRoutes.js. Essa mudança acontece porque, no arquivo principal server.js, adicionamos a seguinte linha, logo após app.use(express.json()):
```javascript
app.use("/usuario", usuarioRoutes)
```
Essa linha informa ao Express que todas as requisições que começam com `/usuario` devem ser encaminhadas ao conjunto de rotas definido no arquivo usuarioRoutes.js.
Isso significa que o caminho `/usuario` já foi definido no server.js. Portanto, não precisamos escrevê-lo novamente no arquivo de rotas.

Veja o exemplo. Antes, quando todas as rotas estavam no server.js, utilizávamos:
```javascript
app.get("/usuario", (req, res) => {
    return res.json(lista)
})
```
Agora, no arquivo usuarioRoutes.js, utilizamos:
```javascript
router.get("/", (req, res) => {
    return res.json(lista)
})
```
Mas por que apenas /?

Porque o Express combina automaticamente o caminho `/usuario`, definido no server.js, com o caminho `/`, definido no usuarioRoutes.js.
Assim, quando realizamos uma requisição `GET /usuario`, o Express encontra a rota router.get("/") e retorna a lista de usuários cadastrados.
Resumindo: a rota `/usuario` continua existindo e funcionando normalmente. A diferença é que agora o server.js define o caminho principal, enquanto o arquivo usuarioRoutes.js contém as operações que serão executadas em cada rota. Essa separação evita a repetição de caminhos e deixa o código mais organizado e fácil de manter.

**ATENÇÂO:**
E sabem a diferença do `app.get()` e `router.get()`? O `app.get()` registra a rota diretamente na aplicação; o `router.get()` registra a rota em um Router que precisa ser montado na aplicação.

