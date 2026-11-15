# Aula 06 – Organizando uma API: Separando as Rotas dos Controllers

## Contextualização

Na aula anterior, aprendemos a organizar nossa API REST separando as rotas do arquivo principal `server.js`, utilizando o recurso `{ Router }` do Express.js. Com isso, criamos o arquivo `usuarioRoutes.js`, responsável por concentrar todas as rotas relacionadas ao gerenciamento de usuários.

Entretanto, mesmo após essa separação, percebemos que o arquivo `usuarioRoutes.js` ainda contém toda a lógica das operações, como cadastrar, listar, atualizar e excluir usuários. Embora essa estrutura funcione, à medida que nossa aplicação cresce, o arquivo pode ficar muito extenso e dificultar a leitura e a manutenção do código.

Nesta aula, vamos dar mais um passo na organização do nosso back-end, aprendendo a **separar as rotas dos Controllers (controladores)**.

Os Controllers serão responsáveis por receber as requisições encaminhadas pelas rotas, executar as operações necessárias e retornar as respostas ao cliente.

Dessa forma, cada arquivo terá uma responsabilidade específica, tornando nossa aplicação mais organizada e facilitando futuras implementações.

## 📂 Organização do projeto

Utilizando como base a estrutura de pastas da aula anterior, vamos adicionar uma nova pasta chamada `controllers`, que conterá o arquivo `usuarioControllers.js`.

Nossa aplicação ficará organizada da seguinte forma:

```text
projeto/
│
├── controllers/
│   └── usuarioControllers.js  <-- Lógica das operações
│
├── routes/
│   └── usuarioRoutes.js       <-- Definição das rotas
│
├── server.js                  <-- Configuração do servidor
└── package.json
```

Agora, cada arquivo terá uma responsabilidade:

- **server.js:** configura o Express, registra as rotas e inicia o servidor.
- **usuarioRoutes.js:** define os caminhos e métodos HTTP disponíveis na API.
- **usuarioControllers.js:** contém as funções responsáveis por executar as operações de gerenciamento dos usuários.

## 1. Entendendo o que são Controllers

Podemos imaginar os **Controllers como os responsáveis por executar as tarefas solicitadas pelas rotas**.

Por exemplo, quando um cliente realiza uma requisição para cadastrar um usuário, a rota identifica a requisição e encaminha sua execução para uma função do Controller.

O Controller recebe os dados enviados, realiza o cadastro e retorna uma resposta ao cliente.

Para facilitar a compreensão, podemos comparar nossa aplicação com uma empresa:

- O `server.js` representa a entrada principal da empresa.
- O `usuarioRoutes.js` funciona como uma recepção, identificando para qual setor cada solicitação deve ser encaminhada.
- O `usuarioControllers.js` representa o setor responsável por executar a tarefa solicitada.

**Importante:** o Controller não cria uma nova rota. Ele contém a função que será executada quando determinada rota for acessada.

## 2. Por que separar as rotas dos Controllers?

Vamos observar como estava nosso código na aula anterior.

No arquivo `usuarioRoutes.js`, tínhamos:

```javascript
router.get("/", (req, res) => {
    return res.json(lista)
})
```

Nesse exemplo, a rota e a lógica responsável por listar os usuários estão no mesmo lugar.

Agora, vamos separar essas responsabilidades.

No arquivo `usuarioRoutes.js`, teremos apenas:

```javascript
router.get("/", listarUsuario)
```

E no arquivo `usuarioControllers.js`, teremos:

```javascript
export const listarUsuario = (req, res) => {
    return res.json(lista)
}
```

Observe que **não alteramos a funcionalidade da nossa API**. Apenas transferimos a lógica da operação para outro arquivo.

Assim, o `usuarioRoutes.js` identifica qual função deverá ser executada, enquanto o `usuarioControllers.js` contém a implementação dessa função.

## 3. Criando o arquivo usuarioControllers.js

Primeiramente, devemos criar a pasta `controllers` na raiz do projeto.

Dentro dessa pasta, criaremos o arquivo `usuarioControllers.js`, responsável por armazenar as funções que antes estavam implementadas diretamente nas rotas.

No início do arquivo, vamos adicionar:

```javascript
const lista = [];
```

Esse array continuará sendo utilizado para armazenar temporariamente os usuários cadastrados.

Em seguida, vamos transferir as operações de gerenciamento dos usuários para funções específicas.

### 3.1 Criando o Controller para listar usuários

Anteriormente, utilizávamos:

```javascript
router.get("/", (req, res) => {
    return res.json(lista)
})
```

Agora, no arquivo `usuarioControllers.js`, teremos:

```javascript
export const listarUsuario = (req, res) => {
    return res.json(lista)
}
```

Observe que criamos uma constante chamada `listarUsuario`, que recebe uma função responsável por retornar a lista de usuários.

Mas por que utilizamos `export`?

A palavra-chave `export` permite disponibilizar essa função para que ela possa ser importada e utilizada em outro arquivo da aplicação.

Dessa forma, o arquivo `usuarioRoutes.js` poderá importar a função `listarUsuario` e executá-la quando receber uma requisição GET.

### 3.2 Criando o Controller para cadastrar usuários

Vamos observar outro exemplo, agora utilizando o cadastro de usuários.

Antes, no arquivo `usuarioRoutes.js`, tínhamos:

```javascript
router.post("/", (req, res) => {
    const nome = req.body.nome
    const idade = req.body.idade

    lista.push({ nome, idade })

    return res.status(201).json({ nome, idade })
})
```

Agora, transferiremos essa lógica para o arquivo `usuarioControllers.js`:

```javascript
export const cadastrarUsuario = (req, res) => {
    const nome = req.body.nome
    const idade = req.body.idade

    lista.push({ nome, idade })

    return res.status(201).json({ nome, idade })
}
```

Perceba que a lógica continua a mesma. A diferença é que agora ela está dentro de uma função chamada `cadastrarUsuario`.

Essa função poderá ser utilizada pela rota POST sem a necessidade de escrever toda a lógica de cadastro no arquivo de rotas.

**Atenção:** quando utilizamos `export const`, estamos exportando uma função específica. Isso permite que o mesmo arquivo disponibilize várias funções, como `listarUsuario`, `cadastrarUsuario` e `deletarUsuario`.

## 4. Organizando as demais funções

Seguindo a mesma lógica dos exemplos anteriores, vamos transferir as demais operações do arquivo `usuarioRoutes.js` para `usuarioControllers.js`.

No projeto desta aula, teremos as seguintes funções:

| Função | Responsabilidade |
|---|---|
| `listarUsuario` | Retornar todos os usuários cadastrados |
| `cadastrarUsuario` | Cadastrar um novo usuário |
| `atualizarTodoUsuario` | Atualizar todos os dados de um usuário |
| `atualizarParteUsuario` | Atualizar apenas os dados informados |
| `deletarUsuario` | Excluir um usuário |
| `buscarIndice` | Consultar um usuário pelo índice |

Cada função será responsável por uma operação específica.

Observe que todas continuam recebendo os parâmetros `req` e `res`, utilizados pelo Express para trabalhar com as requisições e respostas HTTP.

## 5. Importando os Controllers no usuarioRoutes.js

Após criar as funções no arquivo `usuarioControllers.js`, precisamos disponibilizá-las para o arquivo de rotas.

Para isso, no início do arquivo `usuarioRoutes.js`, devemos adicionar:

```javascript
import { Router } from "express";

import {
    listarUsuario,
    cadastrarUsuario,
    atualizarTodoUsuario,
    atualizarParteUsuario,
    deletarUsuario,
    buscarIndice
} from "../controllers/usuarioControllers.js";
```

A primeira importação permite utilizar o `Router` do Express.

Já a segunda importa as funções que foram criadas e exportadas no arquivo `usuarioControllers.js`.

**Mas por que utilizamos as chaves `{ }` na importação?**

Porque estamos importando funções que foram exportadas individualmente utilizando `export const`.

Por exemplo:

```javascript
export const listarUsuario = (req, res) => {
    return res.json(lista)
}
```

Para importar essa função em outro arquivo, utilizamos:

```javascript
import { listarUsuario } from "../controllers/usuarioControllers.js";
```

As chaves indicam que estamos importando uma função específica pelo seu nome.

Outro detalhe importante é o caminho:

```javascript
"../controllers/usuarioControllers.js"
```

O `../` indica que devemos voltar uma pasta a partir de `routes` e, em seguida, acessar a pasta `controllers`.

## 6. Simplificando o arquivo usuarioRoutes.js

Agora que todas as funções estão disponíveis, podemos simplificar nosso arquivo de rotas.

Ele ficará da seguinte forma:

```javascript
import { Router } from "express";

import {
    listarUsuario,
    cadastrarUsuario,
    atualizarTodoUsuario,
    atualizarParteUsuario,
    deletarUsuario,
    buscarIndice
} from "../controllers/usuarioControllers.js";

const router = Router();

// GET - Listar todos os usuários
router.get("/", listarUsuario)

// POST - Cadastrar usuário
router.post("/", cadastrarUsuario)

// PUT - Atualizar todos os dados
router.put("/:indice", atualizarTodoUsuario)

// PATCH - Atualizar parcialmente
router.patch("/:indice", atualizarParteUsuario)

// DELETE - Excluir usuário
router.delete("/:indice", deletarUsuario)

// GET - Buscar usuário pelo índice
router.get("/:indice", buscarIndice)

export default router;
```

Observe como o código ficou mais simples e organizado.

Agora, o arquivo contém apenas as definições das rotas e as referências às funções que serão executadas.

### Entendendo uma das rotas

Vamos analisar a seguinte linha:

```javascript
router.post("/", cadastrarUsuario)
```

Podemos dividir essa instrução em três partes:

- `router.post`: define que a rota responderá às requisições HTTP do tipo POST.
- `"/"`: representa o caminho da rota, que será combinado com o prefixo `/usuario` definido no `server.js`.
- `cadastrarUsuario`: é a função do Controller que será executada quando a requisição chegar.

**Importante:** observe que utilizamos `cadastrarUsuario` sem os parênteses `()`.

Isso acontece porque estamos passando a função para o Express, permitindo que ele a execute quando receber uma requisição correspondente.

Se utilizássemos `cadastrarUsuario()`, estaríamos tentando executar a função imediatamente, em vez de entregá-la ao Express para ser utilizada no momento da requisição.

## 7. E o arquivo server.js? Precisamos alterá-lo?

Não! O arquivo `server.js` continuará praticamente igual ao da aula anterior.

```javascript
import express from "express"
import usuarioRoutes from "./routes/usuarioRoutes.js"

const app = express()

app.use(express.json())

// Registrar as rotas de usuários
app.use("/usuario", usuarioRoutes)

app.get("/", (req, res) => {
    res.json({
        message: "Olá mundo!"
    })
})

app.listen(3000, () => {
    console.log("Servidor iniciado")
})
```

Isso acontece porque o `server.js` não precisa conhecer diretamente as funções dos Controllers.

Ele precisa apenas importar e registrar o conjunto de rotas por meio da seguinte linha:

```javascript
app.use("/usuario", usuarioRoutes)
```

O próprio arquivo `usuarioRoutes.js` ficará responsável por encaminhar as requisições para as funções correspondentes do Controller.

## 8. Como funciona a comunicação entre os arquivos?

Vamos imaginar que um cliente utilize o Postman ou Bruno para realizar uma requisição:

```http
POST http://localhost:3000/usuario
```

Enviando o seguinte JSON:

```json
{
    "nome": "João",
    "idade": 20
}
```

O funcionamento será o seguinte:

**1º – server.js**

O Express recebe a requisição e identifica que o caminho começa com `/usuario`.

```javascript
app.use("/usuario", usuarioRoutes)
```

**2º – usuarioRoutes.js**

O arquivo de rotas identifica que a requisição utiliza o método POST e encaminha sua execução para a função `cadastrarUsuario`.

```javascript
router.post("/", cadastrarUsuario)
```

**3º – usuarioControllers.js**

A função recebe os dados enviados, adiciona o usuário ao array e retorna uma resposta.

```javascript
export const cadastrarUsuario = (req, res) => {
    const nome = req.body.nome
    const idade = req.body.idade

    lista.push({ nome, idade })

    return res.status(201).json({ nome, idade })
}
```

**4º – Resposta ao cliente**

O servidor retorna o código HTTP `201 (Created)` e os dados do usuário cadastrado:

```json
{
    "nome": "João",
    "idade": 20
}
```

Perceba que cada arquivo desempenhou uma função específica, mas todos trabalharam juntos para atender à requisição.

## 9. Diferença entre Router e Controller

Para finalizar, é importante compreender a diferença entre esses dois conceitos.

| Router | Controller |
|---|---|
| Define os caminhos da API. | Contém a lógica das operações. |
| Identifica o método HTTP utilizado. | Processa os dados da requisição. |
| Encaminha a requisição para a função correspondente. | Executa a operação e retorna a resposta. |
| Fica em `usuarioRoutes.js`. | Fica em `usuarioControllers.js`. |

**Resumindo:** o Router define **qual função será chamada**, enquanto o Controller define **o que essa função fará**.

Essa separação é uma prática importante na organização de aplicações back-end, pois permite que cada parte do código tenha uma responsabilidade bem definida.

Ao final desta aula, os alunos deverão compreender a diferença entre **Router e Controller**, aprender a exportar e importar funções entre arquivos JavaScript e reconhecer a importância de separar responsabilidades no desenvolvimento de APIs REST.

Com essa organização, nossa aplicação estará mais preparada para receber novas funcionalidades e avançar para estruturas mais completas de desenvolvimento back-end.
