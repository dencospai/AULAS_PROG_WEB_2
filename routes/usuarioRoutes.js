import { Router } from "express";

const router = Router();

const lista = []



router.get("/", (req, res) => {
    return res.json(lista)
})


router.post("/", (req, res) => {
    const nome = req.body.nome
    const idade = req.body.idade

    lista.push({ nome, idade })

    return res.status(201).json({ nome, idade })
})


router.put("/:indice", (req, res) => {
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
})


router.patch("/:indice", (req, res) => {
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
})

router.delete("/:indice", (req, res) => {
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
})


router.get("/:indice", (req, res) => {
    const indice = Number(req.params.indice)

    if (!lista[indice]) {
        return res.status(404).json({
            mensagem: "Usuário não encontrado!"
        })
    }

    return res.json(lista[indice])
})

export default router;