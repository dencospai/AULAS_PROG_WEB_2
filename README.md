# Programação para Internet II

Repositório destinado aos códigos e exemplos práticos desenvolvidos durante as aulas da disciplina de **Programação para Internet II**, com foco no desenvolvimento Back-end utilizando Node.js e Express.

## 📚 Organização das aulas

Cada aula está organizada em uma branch específica, permitindo acessar o código correspondente ao conteúdo estudado.

| Branch | Aula |
|---|---|
| `branch-aula-01` | Aula 01 |
| `branch-aula-02` | Aula 02 |
| `branch-aula-03` | Aula 03 |
| `branch-aula-xx` | Aula xx |

## 🛠️ 1. Pré-requisitos

Antes de começar, instale os seguintes programas:

- [Node.js] (https://nodejs.org/) — Ambiente para executar JavaScript no servidor.
- [Git](https://git-scm.com/downloads) — Ferramenta para clonar o projeto.

## 📥 2. Clonar o projeto

Para baixar o código de uma aula específica, utilize:

```bash
git clone --branch branch-aula-01 --single-branch https://github.com/dencospai/AULAS_PROG_WEB_2.git
```

**Importante:** substitua `branch-aula-01` pela branch da aula desejada.

Exemplo para baixar a Aula 03:

```bash
git clone --branch branch-aula-03 --single-branch https://github.com/dencospai/AULAS_PROG_WEB_2.git
```

O comando criará uma pasta contendo o projeto da aula selecionada.

## 3. Acessar a pasta do projeto

Com o VS Code, abra a pasta manualmente.

Ou no terminal, execute:
```bash
cd AULAS_PROG_WEB_2
```
e em seguida, abra com o VS Code:
```bash
cdode .
```

## 📦 4. Instalar as dependências

Dentro da pasta do projeto, execute:

```bash
npm install
```

Esse comando instala automaticamente as dependências declaradas no arquivo `package.json`, como o Express.

**Observação:** a pasta `node_modules` será criada automaticamente. Não é necessário baixá-la do GitHub.

## 5. Executar o servidor

Para iniciar o projeto, execute:

```bash
npm run start
```

Com o navegador, acesse:
```bash
http://localhost:3000
```
Para encerrar a execução, pressione `Ctrl + C` no terminal.

## 🔄 6. Acessar outra aula

Caso queira trabalhar com outra aula, recomenda-se cloná-la em uma pasta diferente.

Exemplo para baixar a Aula 04 em uma pasta chamada `aula-04`:

```bash
git clone --branch branch-aula-04 --single-branch https://github.com/dencospai/AULAS_PROG_WEB_2.git aula-04
```

Depois:

```bash
cd aula-04
npm install
npm run start
```

Dessa forma, é possível manter diferentes versões do projeto no computador.

**Bons estudos!**
