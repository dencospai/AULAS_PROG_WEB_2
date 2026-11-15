# Aula 05 – Organizando uma API: Separando as Rotas do Servidor

## Contextualização

Até o momento, todas as rotas estavam implementadas diretamente no arquivo `server.js`. Embora essa abordagem funcione em aplicações pequenas, à medida que o projeto cresce, concentrar todas as rotas em um único arquivo pode dificultar a organização, a leitura e a manutenção do código.

Nesta etapa, aprenderemos a **separar as rotas do arquivo principal do servidor**, utilizando o recurso `Router` do Express.js. Com essa organização, o arquivo `server.js` ficará responsável pela configuração e inicialização da aplicação, enquanto o arquivo `usuarioRoutes.js` concentrará as rotas relacionadas ao gerenciamento de usuários.

Essa prática representa um primeiro passo para a **modularização do back-end**, permitindo desenvolver aplicações mais organizadas e facilitando futuras implementações.

## 📂 Organização do projeto

Usando como base a estruruta de pastas da aula anterior, a aplicação será organizada da seguinte forma com a inserção arquivo `routes\usuarioRoutes.js` com a finalidade de centralizar as rotas:

```text
projeto/
│
├── routes/    <-- Pasta para as rotas
│   └── usuarioRoutes.js  <---Arquivo com as rotas
│
├── server.js
└── package.json
```
### 1. Arquivo server.js

## 📝 Atividade prática

O Express possui um recurso chamado { Router } , que permite separar um conjunto de rotas da aplicação principal.
```javascript
import { Router } from "express";
Podemos imaginar o  { Router } como um organizador de rotas. Em vez de colocar todas as rotas no `server.js`, criamos um arquivo específico para elas.
O interessante é que não precisamos mudar a lógica de funcionamento das nossas rotas. Vamos apenas mudar o lugar onde elas estão escritas, saindo de `server.js` para `usuarioRoutes.js`, arquivo dedicado as elas.
Seguindo, com a linha
```javascript
const router = Router();
é uma constante chamada router no qual instancia o recurso  { Router }  do express.
Agora, é só transferir as rotas que estão no server.js para o arquivo usuarioRoutes.js.
 5 <Troque app. por router. em todas as rotas>
No final, colocar
```javascript
export default router;
pois essa linha é fundamental, pra disponibilizar esse Router para que outro arquivo possa utilizá-lo.
É exatamente isso que o export default faz: permite que o Router seja importado por outro módulo.
Imaginem que o usuarioRoutes.js é um setor responsável pelos usuários. O export é a maneira de disponibilizar esse setor para o restante da aplicação.
Se não exportarmos o Router, não conseguiremos importá-lo normalmente no server.js.
7 import usuarioRoutes from "./routes/usuarioRoutes.js"
Na primeira parte, estamos importando o arquivo que contém nossas rotas.
8 app.use("/usuario", usuarioRoutes)
Nesse caso, estamos informando ao Express que todas server.js que as requisições para a rota /usario devem ser encaminhadas ao usuarioRoutesr que importamos, pois lá é que estão nosso de rotas

Observem que o server.js não precisa conhecer todos os detalhes de cada rota. Ele apenas registra o Router responsável por determinado conjunto de funcionalidades.
Isso torna nossa aplicação mais organizada e facilita o desenvolvimento de novos recursos.
E sabem a diferença do app.get() e router.get()? app.get() registra a rota diretamente na aplicação; router.get() registra a rota em um Router que precisa ser montado na aplicação.


## ✅ Resultado esperado

Ao final da aula, os alunos deverão compreender como separar as rotas do arquivo principal de uma API REST, reconhecendo a importância da **modularização, organização e manutenção do código** no desenvolvimento de aplicações back-end com Node.js e Express.js.
