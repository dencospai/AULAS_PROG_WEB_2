# Programação para Internet II

Aula 3: **Implementação de uma API REST, permitindo cadastrar, listar, consultar, atualizar e excluir usuários por meio dos métodos HTTP (GET, POST, PUT, PATCH e DELETE), armazenando os dados temporariamente em um array**

## Testando a API com Bruno (Postman, Thunder Client ou Insomnia)

Para testar as rotas da API desenvolvida durante as aulas, utilize uma das seguintes ferramentas:

- **[Bruno](https://www.usebruno.com/)**
- **[Postman](https://www.postman.com/downloads/)**
- **[Thunder Client](https://www.thunderclient.com/)**
  **[Insomnia](https://insominia.rest/)**

### Localizar os arquivos de teste

Após clonar o repositório, localize a pasta contendo o arquivo `.yml`.

Exemplo:

```text
AULAS_PROG_WEB_2/
├── server.js
├── package.json
├── README.md
└── TESTES_REQUISICAO_METODOS_HTTP/
    └── opencollection.yml
```

### Iniciar o servidor

Antes de realizar os testes, abra o terminal na pasta do projeto e execute:

```bash
npm install
npm run start
```
Mantenha o servidor em execução durante os testes.

### Utilizando o Bruno
Instruções para utilizar o Bruno (usado em aula):
1. Instala a extensão Bruno no VS Code
2. Abra o Bruno.
3. Selecione a opção de importar uma coleção ou especificação.
4. Escolha a opção de importação compatível com **OpenAPI**.
5. Localize o arquivo `.yml` na pasta /TESTES_REQUISICAO_METODOS_HTTP.
6. Confirme a importação.
7. Configure o endereço da API [http://localhost:3000/usuario].
8. Selecione uma requisição e clique em **Send**.

Para demais clientes como Postman, Insomnia ou Thunder Clients as instruções acimas são parecidas.

### Testar as requisições

Com o servidor em execução, verifique o endereço configurado na ferramenta.
```text
http://localhost:3000/usuario
```

As requisições podem utilizar diferentes métodos HTTP:

| Método | Finalidade |
|---|---|
| GET | Consultar informações |
| POST | Cadastrar informações |
| PUT | Atualizar informações |
| DELETE | Excluir informações |

Selecione a requisição desejada, clique em **Send** e observe a resposta retornada pelo servidor.
