const lista = [];

export const listarUsuario = (req, res) => {
    return res.json(lista)
}


export const cadastrarUsuario = (req, res) => {
    const nome = req.body.nome
    const idade = req.body.idade

    lista.push({ nome, idade })

    return res.status(201).json({ nome, idade })
}



export const atualizarTodoUsuario = (req, res) => {
    const indice = Number(req.params.indice)

    if (!lista[indice]) {
        return res.status(404).json({
            mensagem: "Usuário não encontrado!"
        })
    }

    const nome = req.body.nome
    const idade = req.body.idade

    lista[indice] = { nome, idade }

    return res.json(lista[indice])
}


export const atualizarParteUsuario = (req, res) => {
    const indice = Number(req.params.indice)

    if (!lista[indice]) {
        return res.status(404).json({
            mensagem: "Usuário não encontrado!"
        })
    }

    const nome = req.body.nome
    const idade = req.body.idade

    if (nome !== undefined) {
        lista[indice].nome = nome
    }

    if (idade !== undefined) {
        lista[indice].idade = idade
    }

    return res.json(lista[indice])
}



export const deletarUsuario = (req, res) => {
    const indice = Number(req.params.indice)

    if (!lista[indice]) {
        return res.status(404).json({
            mensagem: "Usuário não encontrado!"
        })
    }

    lista.splice(indice, 1)

    return res.json({
        mensagem: "Usuário excluído com sucesso!"
    })
}

export const buscarIndice = (req, res) => {
    const indice = Number(req.params.indice)

    if (!lista[indice]) {
        return res.status(404).json({
            mensagem: "Usuário não encontrado!"
        })
    }

    return res.json(lista[indice])
}

