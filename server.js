
import express from "express"

const app = express()

app.use(express.json())

const lista = []
let proximoID = 1

// GET - Rota principal
app.get("/", (req, res) => {
    // 200 (OK): requisição realizada com sucesso.
    return res.status(200).send("Olá Mundo!")
})

// GET - Visualizar todos os usuários
app.get("/usuario", (req, res) => {
    // 200 (OK): a consulta foi realizada com sucesso,
    // mesmo que a lista esteja vazia.
    return res.status(200).json(lista)
})

// POST - Cadastrar usuário
app.post("/usuario", (req, res) => {
    const nome = req.body.nome
    const idade = req.body.idade

    if (!nome || idade === undefined || idade === null) {
        // 400 (Bad Request): faltam dados obrigatórios.
        return res.status(400).json({
            mensagem: "Nome e idade são obrigatórios!"
        })
    }

    const usuario = {
        id: proximoID++,
        nome,
        idade
    }

    lista.push(usuario)

    // 201 (Created): um novo usuário foi criado.
    return res.status(201).json(usuario)
})

// GET - Visualizar usuário por ID
app.get("/usuario/:indice", (req, res) => {
    const id = Number(req.params.indice)

    const usuario = lista.find(usuario => usuario.id === id)

    if (usuario === undefined) {
        // 404 (Not Found): o ID informado não foi encontrado.
        return res.status(404).json({
            mensagem: "Usuário não encontrado!"
        })
    }

    // 200 (OK): usuário encontrado com sucesso.
    return res.status(200).json(usuario)
})

// PUT - Atualizar todos os dados
app.put("/usuario/:indice", (req, res) => {
    const id = Number(req.params.indice)

    const indice = lista.findIndex(usuario => usuario.id === id)

    // 404 (Not Found): não existe usuário com esse ID.
    if (indice === -1) {
        return res.status(404).json({
            mensagem: "Usuário não encontrado!"
        })
    }

    const nome = req.body.nome
    const idade = req.body.idade

    
    if (!nome || idade === undefined || idade === null) {
        // 400 (Bad Request): PUT exige todos os dados obrigatórios.
        return res.status(400).json({
            mensagem: "Nome e idade são obrigatórios!"
        })
    }

    lista[indice] = {
        id,
        nome,
        idade
    }

    // 200 (OK): usuário atualizado com sucesso.
    return res.status(200).json(lista[indice])
})

// PATCH - Atualizar apenas alguns dados
app.patch("/usuario/:indice", (req, res) => {
    const id = Number(req.params.indice)

    const usuario = lista.find(usuario => usuario.id === id)

    if (usuario === undefined) {
        // 404 (Not Found): usuário não encontrado.
        return res.status(404).json({
            mensagem: "Usuário não encontrado!"
        })
    }

    const nome = req.body.nome
    const idade = req.body.idade

    
    if (nome === undefined && idade === undefined) {
        // 400 (Bad Request): nenhum campo foi informado.
        return res.status(400).json({
            mensagem: "Informe pelo menos um campo para atualizar!"
        })
    }

    if (nome !== undefined) {
        usuario.nome = nome
    }

    if (idade !== undefined) {
        usuario.idade = idade
    }

    // 200 (OK): atualização parcial realizada com sucesso.
    return res.status(200).json(usuario)
})

// DELETE - Excluir usuário
app.delete("/usuario/:indice", (req, res) => {
    const id = Number(req.params.indice)

    const indice = lista.findIndex(usuario => usuario.id === id)

    if (indice === -1) {
        // 404 (Not Found): usuário não existe.
        return res.status(404).json({
            mensagem: "Usuário não encontrado!"
        })
    }

    lista.splice(indice, 1)

    // 200 (OK): exclusão realizada e mensagem retornada.
    return res.status(200).json({
        mensagem: "Usuário removido com sucesso!"
    })
})

// Iniciar servidor
app.listen(3000, () => {
    console.log("Servidor iniciado")
})
