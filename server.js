
import express from "express"

const app = express()

app.use(express.json()) //aplicação entender requisições e enviar respostas em json

const lista = [] //array
let proximoID = 1 //colodo esse contador para os indices serem inseridos automaticamente

// GET - Rota principal
app.get("/", (req, res) => {
    return res.send("Olá Mundo!")
})

// GET - Visualizar todos os usuários
app.get("/usuario", (req, res) => {
    return res.json(lista)
})

// POST - Cadastrar usuário
app.post("/usuario", (req, res) => {
    const nome = req.body.nome
    const idade = req.body.idade

    if (!nome || idade === undefined || idade === null) {
        return res.json({
            mensagem: "Nome e idade são obrigatórios!"
        })
    }

    const usuario = {
        id: proximoID++,
        nome,
        idade
    }

    lista.push(usuario)

    return res.json(usuario)
})

// GET - Visualizar usuário por ID
app.get("/usuario/:indice", (req, res) => {
    const id = Number(req.params.indice)

    const usuario = lista.find(usuario => usuario.id === id)

    if (usuario === undefined) {
        return res.json({
            mensagem: "Usuário não encontrado!"
        })
    }

    return res.json(usuario)
})

// PUT - Atualizar todos os dados
app.put("/usuario/:indice", (req, res) => {
    const id = Number(req.params.indice)

    const indice = lista.findIndex(usuario => usuario.id === id)

    if (indice === -1) {
        return res.json({
            mensagem: "Usuário não encontrado!"
        })
    }

    const nome = req.body.nome
    const idade = req.body.idade

    
    if (!nome || idade === undefined || idade === null) {
        return res.json({
            mensagem: "Nome e idade são obrigatórios!"
        })
    }

    lista[indice] = {
        id,
        nome,
        idade
    }

    return res.json(lista[indice])
})

// PATCH - Atualizar apenas alguns dados
app.patch("/usuario/:indice", (req, res) => {
    const id = Number(req.params.indice)

    const usuario = lista.find(usuario => usuario.id === id)

    if (usuario === undefined) {
        return res.json({
            mensagem: "Usuário não encontrado!"
        })
    }

    const nome = req.body.nome
    const idade = req.body.idade

    
    if (nome === undefined && idade === undefined) {
        return res.json({
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
    return res.json(usuario)
})

// DELETE - Excluir usuário
app.delete("/usuario/:indice", (req, res) => {
    const id = Number(req.params.indice)

    const indice = lista.findIndex(usuario => usuario.id === id)

    if (indice === -1) {
        return res.json({
            mensagem: "Usuário não encontrado!"
        })
    }

    lista.splice(indice, 1)

    return res.json({
        mensagem: "Usuário removido com sucesso!"
    })
})

// Iniciar servidor
app.listen(3000, () => {
    console.log("Servidor iniciado")
})
